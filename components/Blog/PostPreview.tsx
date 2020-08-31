import postPreview from './PostPreview.module.scss';

const PostPreview = (props) => {
  return (
    <div className={postPreview.root}>
      <h2>{props.title}</h2>
      <p className={postPreview.meta}>
        {props.pubDate} | {props.readTime} min | {props.tags}
      </p>
      <hr />
      <p>{props.excerpt}</p>
    </div>
  );
};

export default PostPreview;
