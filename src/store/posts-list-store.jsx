import { createContext, useReducer } from "react";

export const PostList = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
});

const postListReducer = (currPostList, action) => {
  return currPostList;
};

const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(
    postListReducer,
    DEFAULT_POST_LIST
  );

  const addPost = () => {};
  const deletePost = () => {};
  return (
    <PostList.Provider value={{ postList, addPost, deletePost }}>
      {children}
    </PostList.Provider>
  );
};

const DEFAULT_POST_LIST = [
  {
    id: "1",
    title: "Going to Mumbai",
    body: "Hi friends I am going to Mumbai for my vacation",
    reactions: 3,
    userId: "user-2",
    tags: ["vacation", "Mumbai", "enjoying"],
  },
  {
    id: "2",
    title: "Finally Graduated",
    body: "I am so happy to inform that I passed btech successfully",
    reactions: 15,
    userId: "user-6",
    tags: ["graduation", "btech", "unbelievable"],
  },
];

export default PostListProvider;
