import styles from './FeaturedPost.module.scss';

const FeaturedPost = (props) => {
  return (
    <div className={styles.root}>
      <h3>{props.title}</h3>
      <p>{props.tags}</p>
    </div>
  );
};

export default FeaturedPost;
