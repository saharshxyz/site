import Link from 'next/link';
import Layout from '../components/Layout';
import Post from '../components/Post';

const Home = () => {
  return (
    <Layout>
      <Post>
        <h1>Hey, I’m Saharsh</h1>

        <p>
          … a 16-year-old from Central Massachusetts.{' '}
          <strong>I make websites, write blog posts, and read [a lot].</strong>
        </p>

        <p>
          As a current high-school senior at{' '}
          <a href="https://westboroughk12.org" title="Westborough High School">
            Westborough High School
          </a>
          , the thing at the top of my mind is what I'll be doing after
          high-school. As of now, my plan is to pursue the intersection of
          Computer Science, Philosophy, and Psychology.
        </p>

        <h2>Say Hi!</h2>

        <p>
          I am on and around most places on the web — you&#39;ll usually find me
          going by <em>@saharshy29</em>. Here are some places that I am at least
          somewhat active on:{' '}
          <a href="https://srsh.link/twitter" title="Saharsh&#39;s Twitter">
            Twitter
          </a>
          ,{' '}
          <a href="https://srsh.link/github" title="Saharsh&#39;s Github">
            Github
          </a>
          ,{' '}
          <a href="https://srsh.link/instagram" title="Saharsh&#39;s Intagram">
            Instagram
          </a>
          ,{' '}
          <a href="https://srsh.link/linkedin" title="Saharsh&#39;s Linkedin">
            Linkedin
          </a>
          , and{' '}
          <a href="https://srsh.link/messenger" title="Saharsh on Messenger">
            Messenger
          </a>{' '}
          /{' '}
          <a href="https://srsh.link/facebook" title="Saharsh&#39;s Facebook">
            Facebook
          </a>
          . If you prefer, you can also reach out to me via email at hello [at]
          saharsh.tech.
        </p>
      </Post>
    </Layout>
  );
};

export default Home;
