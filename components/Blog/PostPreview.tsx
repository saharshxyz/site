import postPreview from './PostPreview.module.scss';

const PostPreview = () => {
  return (
    <div className={postPreview.root}>
      <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h2>
      <p className={postPreview.meta}>Aug 12 | 5 min | #stuff #things #life</p>
			<hr/>
			<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam beatae nam repellendus ratione expedita possimus, sint dolore necessitatibus quisquam natus, nisi laborum magni sequi placeat ab perferendis, delectus reprehenderit similique ex veritatis illo! Quas voluptates ad exercitationem temporibus quibusdam, corrupti ratione dolorem optio alias. Animi adipisci quidem voluptates officiis provident deleniti officia! Dolor molestiae debitis maxime porro tempora eius architecto.</p>
    </div>
  );
};

export default PostPreview;
