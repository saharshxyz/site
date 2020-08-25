import Head from 'next/head';
import PropTypes from 'prop-types';
import layout from './Layout.module.scss';
import Nav from '../Nav';
import Footer from '../Footer';

const Layout = (props) => {
  return (
    <>
      <Head>
        <title>Saharsh Yeruva | @saharshy29</title>
      </Head>
      <div className={layout.wrapper}>
        <div className={layout.contentWrapper}>
          <Nav />
          {props.children}
        </div>
        <Footer />
      </div>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Layout;
