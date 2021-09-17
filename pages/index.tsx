import Link from 'next/link';
import Layout from '../components/Layouts/Layout';
import Post from '../components/Post';

const Home = () => (
  <Layout>
    <Post>
      <p>
        Oh, you want to know more about me? Instead of reading some random text
        blob about me, shoot me an email saying "hi" to{' '}
        <a href="mailto:sup@sahar.sh" title="Saharsh&#39;s Email">
          sup [at] sahar.sh{' '}
        </a>{' '}
        and I'll send you my number so we can actually get to know each other.
        Don't be shy, I don't bite and I'll reply quickly — I promise :)
      </p>
    </Post>
  </Layout>
);

export default Home;
