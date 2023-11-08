import { NextPageWithLayout } from '@/data/types/next-page-with-layout.types';
import AppLayout from '@/layout/app-layout.component';
import { wrapper } from '@/store/store';
import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { Provider } from 'react-redux';

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout;
};

export default function App({ Component, ...rest }: AppPropsWithLayout) {
  const { store, props } = wrapper.useWrappedStore(rest);

  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout ?? ((page) => page);

  return <>
    <Provider store={store}>
      <AppLayout getLayout={getLayout}>
        <Component {...props.pageProps} />
      </AppLayout>
    </Provider>
  </>
}
