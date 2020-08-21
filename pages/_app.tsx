import { AppProps } from 'next/app';
import Head from 'next/head';
import 'styles/globals.scss';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link key="icon" rel="icon" href={require('images/favicon.png')} />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
