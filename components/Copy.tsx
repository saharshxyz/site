import Link from 'next/link';
import post from './Copy.module.scss';

const Post = (props) => {
  return <div className={post.root}>{props.children}</div>;
};

export default Post;
