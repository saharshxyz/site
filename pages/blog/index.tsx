import { GetStaticProps } from 'next';
import { createContext } from 'react';

import Layout from '../../components/Layouts/Layout';
import Header from '../../components/Blog/Header';
import PostPreview from '../../components/Blog/PostPreview';

import { getPosts } from '../api/posts';

interface Post {
  Post: [];
  title: string;
  featured: boolean;
  tags: any;
  tagList: string;
  uuid: string;
  slug: string;
}

export const PostsContext = createContext<Post[]>([]);

const Home = (props) => {
  return (
    <PostsContext.Provider value={props.posts}>
      <Layout>
        <Header />
        <hr className="fancy" />
        {props.posts.map((post) => (
          <PostPreview
            key={post.uuid}
            slug={post.slug}
            title={post.title}
            pubDate={post.dateFormatted}
            readTime={`${post.reading_time} mins`}
            tags={post.tagList}
            excerpt={post.excerpt}
          />
        ))}
      </Layout>
    </PostsContext.Provider>
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
