import react from "react";

const BlogLayout = ({ children }) => {
  return (
    <div>
      <h1>This is a blog</h1>
      {children}
    </div>
  );
};

export default BlogLayout;
