import { render, RenderOptions } from '@testing-library/react';
import { FC, ReactElement } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';

import ConfirmProvider from '../context/confirm-provider';
import GlobalStateProvider from '../context/global-state-provider';

const queryClient = new QueryClient();

const AllTheProviders: FC = ({ children }: any) => {
  return (
    <QueryClientProvider client={queryClient}>
      <ConfirmProvider>
        <GlobalStateProvider>{children}</GlobalStateProvider>
      </ConfirmProvider>
    </QueryClientProvider>
  );
};

const customRender = (ui: ReactElement, options?: Omit<RenderOptions, 'wrapper'>) =>
  render(ui, { wrapper: AllTheProviders, ...options });

export * from '@testing-library/react';
export { customRender as render };
