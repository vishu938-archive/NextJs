import React from "react";

const Blog = async () => {
  await new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("to see loading in ui");
    }, 2000);
  });
  return (
    <div>
      <h2>MY BLOG</h2>
    </div>
  );
};

export default Blog;
