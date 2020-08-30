import { FaBookmark } from 'react-icons/fa';
import { features } from 'process';
import featured from './Featured.module.scss';
import FeaturedPost from './FeaturedPost';

const Featured = () => {
  return (
    <div className={featured.root}>
      <div className={featured.wrapper}>
        <h2>
          <FaBookmark className={featured.icon} /> Featured
        </h2>
        <div className={featured.posts}>
          <div className={featured.post}>
            <FeaturedPost />
          </div>
          <div className={featured.post}>
            <FeaturedPost />
          </div>
          <div className={featured.post}>
            <FeaturedPost />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
