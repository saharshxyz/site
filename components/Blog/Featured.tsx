import { useContext } from 'react';

import { FaBookmark } from 'react-icons/fa';
import FeaturedPost from './FeaturedPost';
import featured from './Featured.module.scss';

import { PostsContext } from '../../pages/blog/index';

const Featured = () => {
  const posts = useContext(PostsContext);
  const featuredPosts = posts
    .filter((post) => post.featured === true)
    .sort(() => 0.5 - Math.random())
    .slice(0, 3);

  featuredPosts.map((post) => {
    post.tagList = post.tags.map((tag) => tag.name).join(' ');
  });

  return (
    <div className={featured.root}>
      <div className={featured.wrapper}>
        <h2>
          <FaBookmark className={featured.icon} /> Featured
        </h2>
        <div className={featured.posts}>
          {featuredPosts.map((post) => (
            <div className={featured.post}>
              <FeaturedPost title={post.title} tags={post.tagList} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Featured;
