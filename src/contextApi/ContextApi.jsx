import React, { createContext, useState } from "react";

export const BlogContext = createContext({
  blogData: [],
  setBlogData: () => {},
});


const BlogContextApi = ({ children }) => {
  const [blogData, setBlogData] = useState([]);
  return (
    <BlogContext.Provider value={{ blogData, setBlogData }}>
      {children}
    </BlogContext.Provider>
  );
};

export default BlogContextApi;
