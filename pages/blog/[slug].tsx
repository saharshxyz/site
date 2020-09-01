import { GetStaticProps, GetStaticPaths } from 'next';
import Layout from '../../components/Layouts/Layout';
import Copy from '../../components/Copy';

import { getPosts } from '../api/posts';

const Post = (props) => {
  return (
    <Layout>
      <h1>{props.post.title}</h1>
      <p>{props.post.tagList}e</p>
      <hr />
      <Copy>{props.post.html}</Copy>
    </Layout>
  );
};

export default Post;

export const getStaticProps = async () => {
  const posts = await getPosts();

  posts.map((post) => {
    post.dateFormatted = new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
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

export async function getStaticPaths() {
  const posts = await getPosts();
  return {
    paths: posts?.map(({ post }) => `/blog/${post.slug}`),
    fallback: false,
  };
}
