import Layout from '../../components/Layouts/Layout';
import Header from '../../components/Blog/Header';
import Tags from '../../components/Blog/Tags';
import PostPreview from '../../components/Blog/PostPreview'
import Post from 'components/Post';

const Home = () => {
  return (
    <Layout>
      <Header />
      <hr className="fancy"/>
      <Tags />
      <PostPreview />
      <PostPreview />
      <PostPreview />
      <PostPreview />
    </Layout>
  );
};

export default Home;
