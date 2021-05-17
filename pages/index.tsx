import Link from 'next/link';
import Layout from '../components/Layouts/Layout';
import Post from '../components/Post';

const Home = () => (
  <Layout>
    <Post>
      <p>
        Usually find me <em>@saharshxyz</em> on the internet.
        <a href="https://sahar.sh/t" title="Saharsh&#39;s Twitter">
          Twitter
        </a>
        ,{' '}
        <a href="https://sahar.sh/gh" title="Saharsh&#39;s Github">
          Github
        </a>
        ,{' '}
        <a href="https://sahar.sh/ig" title="Saharsh&#39;s Intagram">
          Instagram
        </a>
        , and <a href="https://sahar.sh/ln" title="Saharsh&#39;s Linkedin">Linkedin
        </a>
        . Email:{' '}
        <a href="mailto:hello@saharsh.tech" title="Saharsh&#39;s Email">
          hello [at] saharsh.tech
        </a>
        .
      </p>
    </Post>
  </Layout>
);

export default Home;
