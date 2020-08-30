import Layout from '../../components/Layouts/Layout';
import Copy from '../../components/Copy'

const Post = () => {
  return (
    <Layout>
      <h1>Post about something interesting</h1>
      <p>Aug 12 | 5 min | #stuff #things #life</p>
      <hr />
			<Copy>
				<h1>Hello</h1>
				<p>Hi</p>
				<h2>Sup</h2>
				<p>Nothing</p>
				<p>ok</p>
			</Copy>
    </Layout>
  );
};

export default Post;
