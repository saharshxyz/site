import { GetStaticProps } from 'next';
// import Layout from '../../components/Layouts/Layout';
// import Copy from '../../components/Copy';

import { getPosts } from '../api/posts';

const Post = (props) => {
  return (
    <ul>
      {props.posts.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
};

export default Post;

export const getStaticProps = async () => {
  const posts = await getPosts();
  return { props: { posts } };
};
