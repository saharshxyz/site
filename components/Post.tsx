import Link from 'next/link';
import PropTypes from 'prop-types';
import post from './Post.module.scss';

const Post = (props) => {
  return <div className={post.root}>{props.children}</div>;
};

Post.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Post;
