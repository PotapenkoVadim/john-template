import '../styles/globals.scss';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import { appWithTranslation } from 'next-i18next';

function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta
          name='description'
          content='Generated by create next app' />
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1' />
        <link
          rel='icon'
          href='/favicon.ico' />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default appWithTranslation(App);
