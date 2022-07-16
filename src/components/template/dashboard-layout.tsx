import { useState } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { ToastContainer } from 'react-toastify';

import ConfirmProvider from '../../context/confirm-provider';
import GlobalStateProvider from '../../context/global-state-provider';
import Header from './header';
import Seo from './seo';
import SideBar from './sidebar';

const queryClient = new QueryClient();

export const DashboardLayout = ({
  children,
  title,
}: {
  children: React.ReactNode
  title: string
}): JSX.Element => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ConfirmProvider>
          <GlobalStateProvider>
            <Seo title={title} />
            <div className="font-roboto flex h-screen bg-gray-200">
              <SideBar
                sidebarOpen={sidebarOpen}
                toggle={() => setSidebarOpen(false)}
              />
              <div className="flex flex-1 flex-col overflow-hidden">
                <Header toggle={() => setSidebarOpen(true)} />
                <main className="flex-1 overflow-y-auto overflow-x-hidden bg-gray-200">
                  {children}
                </main>
              </div>
            </div>
          </GlobalStateProvider>
          {process.env.NODE_ENV === 'development' && (
            <ReactQueryDevtools initialIsOpen={false} />
          )}
        </ConfirmProvider>
      </QueryClientProvider>
      <ToastContainer
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        position={'bottom-right'}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
};

export default DashboardLayout;
