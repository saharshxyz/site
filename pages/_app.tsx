import { AppProps } from 'next/app';
import Head from 'next/head';
import 'styles/globals.scss';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link key="icon" rel="icon" href={require('images/favicon.png')} />
        <link
          key="fonts-preconnect"
          rel="preconnect"
          href="https://fonts.gstatic.com"
        />
        <script async defer data-website-id="ded82c91-5872-4e84-b800-8b9e72a05bed" src="https://analytics.saharsh.xyz/umami.js"></script>
      </Head>
      <Component {...pageProps} />
    </>
  );
}
