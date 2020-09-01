import postPreview from './PostPreview.module.scss';
import Link from 'next/link';
import { FaExternalLinkAlt } from 'react-icons/fa';

const PostPreview = (props) => {
  return (
    <Link as={`/blog/${props.slug}`} href="/blog/[slug]">
      <a>
        <div className={postPreview.root}>
          <h2>
            {props.title} <FaExternalLinkAlt className={postPreview.icon} />
          </h2>
          <p className={postPreview.meta}>
            {props.pubDate} | {props.readTime} | {props.tags}
          </p>
          <hr />
          <p>{props.excerpt}</p>
        </div>
      </a>
    </Link>
  );
};

export default PostPreview;
