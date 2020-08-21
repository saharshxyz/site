import layout from './Layout.module.scss';
import Head from 'next/head';
import Nav from './Nav';
import Footer from './Footer';

const Layout = (props) => {
  return (
    <div>
      <Head>
        <title>Saharsh Yeruva | @saharshy29</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={layout.contentWrapper}>
        <Nav />
        {props.children}
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
