import Link from 'next/link';
import Layout from '../components/Layouts/Layout';
import Post from '../components/Post';

const Home = () => {
  return (
    <Layout>
      <Post>
        <h1>Hey, I’m Saharsh</h1>

        <p>
          … a kid from Central Massachusetts.{' '}
          <strong>I make websites, write blog posts, and read [a lot].</strong>
        </p>

        <p>
          As a current high-school senior at{' '}
          <a
            href="http://whs.westboroughk12.org"
            title="Westborough High School"
          >
            Westborough High School
          </a>
          , the thing at the top of my mind is what I'll be doing after
          high-school. As of now, my plan is to explore the intersection of
          Computer Science, Philosophy, Psychology, and Economics.
        </p>

        <h2>Say Hi!</h2>

        <p>
          I am on and around most places on the web — you&#39;ll usually find me
          going by <em>@saharshxyz</em>. Here are some places that I am at least
          somewhat active on:{' '}
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
          , and{' '}
          <a href="https://sahar.sh/m" title="Saharsh on Messenger">
            Messenger
          </a>{' '}
          /{' '}
          <a href="https://sahar.sh/fb" title="Saharsh&#39;s Facebook">
            Facebook
          </a>
          . If you prefer, you can also reach out to me via email at{' '}
          <a href="mailto:hello@saharsh.tech" title="Saharsh&#39;s Email">
            hello [at] saharsh.tech
          </a>
          .
        </p>
      </Post>
    </Layout>
  );
};

export default Home;
