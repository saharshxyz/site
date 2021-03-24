import Link from 'next/link';
import Layout from '../components/Layouts/Layout';
import Post from '../components/Post';

const Home = () => (
  <Layout>
    <Post>
      <p>
        Hey, this is Saharsh and you&#39;ll usually find me going by{' '}
        <em>@saharshxyz</em> on the internet. Here are some of the places that
        you can find me:{' '}
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
        ,{' '}
        <a href="https://sahar.sh/ln" title="Saharsh&#39;s Linkedin">
          Linkedin
        </a>
        . If you prefer, you can also reach out to me via email:{' '}
        <a href="mailto:hello@saharsh.tech" title="Saharsh&#39;s Email">
          hello [at] saharsh.tech
        </a>
        .
      </p>
    </Post>
  </Layout>
);

export default Home;
