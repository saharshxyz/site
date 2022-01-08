import Link from 'next/link';
import Layout from '../components/Layouts/Layout';
import Post from '../components/Post';

const Home = () => (
  <Layout>
    <Post>
      <p>
        <a href="mailto:sup@sahar.sh" title="Saharsh&#39;s Email">
          sup [at] sahar.sh{' '}
        </a>
      </p>
    </Post>
  </Layout>
);

export default Home;
