import Head from 'next/head';
import Nav from '../components/Nav';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Saharsh Yeruva | @saharshy29</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav />
    </div>
  );
}
