import Link from 'next/link';
import post from './Post.module.scss';

const Post = (props) => {
  return (
		<div className={post.root}>
    {props.children}
		</div>
  );
};

export default Post;
