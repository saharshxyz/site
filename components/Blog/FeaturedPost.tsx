import Link from 'next/link';

import styles from './FeaturedPost.module.scss';

const FeaturedPost = (props) => {
  return (
    <Link as={`/blog/${props.slug}`} href="/blog/[slug]">
      <a>
        <div className={styles.root}>
          <h3>{props.title}</h3>
          <p>{props.tags}</p>
        </div>
      </a>
    </Link>
  );
};

export default FeaturedPost;
