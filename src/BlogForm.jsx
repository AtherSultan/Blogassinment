import { useRef, useState } from "react";

const BlogForm = ({ onAddBlog }) => {
  const titleInputRef = useRef(null);

  const [formData, setFormData] = useState({
    title: "",
    category: "",
    author: "",
    content: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.title.trim()) {
      titleInputRef.current?.focus();
      return;
    }

    onAddBlog(formData);

    setFormData({
      title: "",
      category: "",
      author: "",
      content: "",
    });

    // Focus title input again
    titleInputRef.current?.focus();
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto w-full max-w-2xl rounded-2xl border border-gray-200 bg-white p-6 shadow-lg sm:p-8"
    >
      {/* Heading */}
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900">
          Create New Blog
        </h2>

        <p className="mt-1 text-sm text-gray-500">
          Add a new blog post to your dashboard.
        </p>
      </div>

      {/* Title */}
      <div className="mb-5">
        <label
          htmlFor="title"
          className="mb-2 block text-sm font-semibold text-gray-700"
        >
          Blog Title
        </label>

        <input
          ref={titleInputRef}
          id="title"
          type="text"
          name="title"
          placeholder="Enter blog title"
          value={formData.title}
          onChange={handleChange}
          className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
        />
      </div>

      {/* Category */}
      <div className="mb-5">
        <label
          htmlFor="category"
          className="mb-2 block text-sm font-semibold text-gray-700"
        >
          Category
        </label>

        <input
          id="category"
          type="text"
          name="category"
          placeholder="e.g. React, JavaScript, Redux"
          value={formData.category}
          onChange={handleChange}
          className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
        />
      </div>

      {/* Author */}
      <div className="mb-5">
        <label
          htmlFor="author"
          className="mb-2 block text-sm font-semibold text-gray-700"
        >
          Author
        </label>

        <input
          id="author"
          type="text"
          name="author"
          placeholder="Enter author name"
          value={formData.author}
          onChange={handleChange}
          className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
        />
      </div>

      {/* Content */}
      <div className="mb-6">
        <label
          htmlFor="content"
          className="mb-2 block text-sm font-semibold text-gray-700"
        >
          Blog Content
        </label>

        <textarea
          id="content"
          name="content"
          rows="6"
          placeholder="Write your blog content..."
          value={formData.content}
          onChange={handleChange}
          className="w-full resize-none rounded-lg border border-gray-300 px-4 py-3 text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
        />
      </div>

      {/* Submit */}
      <button
        type="submit"
        className="w-full rounded-lg bg-blue-600 px-5 py-3 font-semibold text-white shadow-md transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 active:scale-[0.98]"
      >
        Add Blog
      </button>
    </form>
  );
};

export default BlogForm;
