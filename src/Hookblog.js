import { useState, useCallback } from "react";

function useBlogs() {
  // Initial blog data
  const [blogs, setBlogs] = useState([
    {
      id: 1,
      title: "Understanding React Hooks",
      category: "React",
      author: "Ali Khan",
      readingTime: 6,
      featured: true,
    },
    {
      id: 2,
      title: "Redux Toolkit Basics",
      category: "Redux",
      author: "Sara Ahmed",
      readingTime: 8,
      featured: false,
    },
    {
      id: 3,
      title: "Building Blog UI in React",
      category: "React",
      author: "Hamza Malik",
      readingTime: 5,
      featured: false,
    },
    {
      id: 4,
      title: "Node.js and Express Introduction",
      category: "Node",
      author: "Ayesha Noor",
      readingTime: 7,
      featured: true,
    },
  ]);

  // Add Blog
  const addBlog = useCallback((blog) => {
    setBlogs((oldBlogs) => [
      ...oldBlogs,
      {
        id: Date.now(),
        ...blog,
      },
    ]);
  }, []);

  // Delete Blog
  const deleteBlog = useCallback((id) => {
    setBlogs((oldBlogs) =>
      oldBlogs.filter((blog) => blog.id !== id)
    );
  }, []);

  return {
    blogs,
    addBlog,
    deleteBlog,
  };
}

export default useBlogs;
