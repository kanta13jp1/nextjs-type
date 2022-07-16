import '@/styles/globals.css';
import 'tailwindcss/tailwind.css';
import Layout from './layout';

import type { NextPage } from 'next';
import type { AppProps } from 'next/app';
import type { ReactElement, ReactNode } from 'react';

import 'react-toastify/dist/ReactToastify.css'; // For Toast
import '../styles/global.css';

type NextPageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function MyApp({ Component, pageProps }: AppPropsWithLayout): ReactNode {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout ?? ((page) => page);

  return getLayout(
    <Layout>
      <Component {...pageProps} />
    </Layout>,
  );
}
