import { createContext } from 'react';

let posts = {};

export const PostContext = createContext(posts);

export const PostsProvider = ({ children }) => {
  return (
    <PostContext.Provider>
      {children}
    </PostContext.Provider>
  );
};
