import { createContext } from 'react';

const posts = {};

export const PostContext = createContext(posts);

export const PostsProvider = ({ children }) => {
  return <PostContext.Provider>{children}</PostContext.Provider>;
};
