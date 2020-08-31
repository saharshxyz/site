import { GetStaticProps } from 'next';

import Layout from '../../components/Layouts/Layout';
import Header from '../../components/Blog/Header';
import Tags from '../../components/Blog/Tags';
import PostPreview from '../../components/Blog/PostPreview';

import { getPosts } from '../api/posts';

const Home = (props) => {
  return (
    <Layout>
      <Header />
      <hr className="fancy" />
      <Tags />
      {props.posts.map((post) => (
        <PostPreview
          title={post.title}
          pubDate={post.published_at}
          readTime={post.reading_time}
          // tags={post.tags[1].name}
          excerpt={post.excerpt}
        />
      ))}
    </Layout>
  );
};

export default Home;

export const getStaticProps = async () => {
  const posts = await getPosts();
  return { props: { posts } };
};
