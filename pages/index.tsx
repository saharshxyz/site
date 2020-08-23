import Link from 'next/link';
import Layout from '../components/Layout';
import Post from '../components/Post'

const Home = () => {
  return (
    <Layout>
      <Post>
        <h1>Hey, I'm Saharsh</h1>
        <p>
          I am a 16-year-old from Central Masssachusettes.{' '}
          <b>I make websites, write blog posts, and read [a lot].</b>
        </p>
        <h2>Say Hi</h2>
        <p>
          I'm on and around most places on the web &mdash; you'll usually find
          me going by <i>@saharshy29</i>. Here are some of the places that I am
          at least somewhat active on:
        </p>
        <ul>
          <li>
            <a href="https://srsh.link/twitter">Twitter</a>
          </li>
          <li>
            <a href="https://srsh.link/github">Github</a>
          </li>
          <li>
            <a href="https://srsh.link/instagram">Instagram</a>
          </li>
          <li>
            <a href="https://srsh.link/linkedin">Linkedin</a>
          </li>
          <li>
            <a href="https://srsh.link/messenger">Messenger</a> /{' '}
            <a href="https://srsh.link/facebook">Facebook</a>
          </li>
          <li>Email - hello [at] saharsh.tech</li>
        </ul>
      </Post>
    </Layout>
  );
};

export default Home;
