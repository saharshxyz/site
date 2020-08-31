import { GetStaticProps } from 'next';

import Layout from '../../components/Layouts/Layout';
import Header from '../../components/Blog/Header';
import PostPreview from '../../components/Blog/PostPreview';

import { PostsProvider } from '../../context/postContext';
import { getPosts } from '../api/posts';

const Home = (props) => {
  return (
    <PostsProvider>
      <Layout>
        <Header />
        <hr className="fancy" />
        {props.posts.map((post) => (
          <PostPreview
            title={post.title}
            pubDate={post.dateFormatted}
            readTime={`${post.reading_time} mins`}
            tags={post.tagList}
            excerpt={post.excerpt}
          />
        ))}
      </Layout>
    </PostsProvider>
  );
};

export default Home;

export const getStaticProps = async () => {
  const posts = await getPosts();

  posts.map((post) => {
    post.dateFormatted = new Intl.DateTimeFormat('en-US', {
      month: 'short',
      day: 'numeric',
    }).format(new Date(post.published_at));
  });

  posts.map((post) => {
    post.tagList = post.tags.map((tag) => tag.name).join(' ');
  });

  return {
    props: {
      posts,
    },
  };
};
