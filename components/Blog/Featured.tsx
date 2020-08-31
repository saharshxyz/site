import { FaBookmark } from 'react-icons/fa';
import FeaturedPost from './FeaturedPost';
import featured from './Featured.module.scss';

import { getPosts } from '../../pages/api/posts';

const Featured = (props) => {
  return (
    <div className={featured.root}>
      <div className={featured.wrapper}>
        <h2>
          <FaBookmark className={featured.icon} /> Featured
        </h2>
        <div className={featured.posts}>
          {props.posts.map((post) => (
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
