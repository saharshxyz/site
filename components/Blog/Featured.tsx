import { useContext } from 'react';

import { FaBookmark } from 'react-icons/fa';
import FeaturedPost from './FeaturedPost';
import featured from './Featured.module.scss';

import { PostsContext } from '../../pages/blog/index';

const Featured = () => {
  const posts = useContext(PostsContext);
  return (
    <div className={featured.root}>
      <div className={featured.wrapper}>
        <h2>
          <FaBookmark className={featured.icon} /> Featured
        </h2>
        <div className={featured.posts}>
          {posts.map((post) => (
            <div className={featured.post}>
              <FeaturedPost title={post.title} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Featured;
