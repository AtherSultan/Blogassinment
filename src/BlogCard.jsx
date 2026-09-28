// import { memo } from "react";

// const BlogCard = memo(({ blog, onDelete }) => {
//   return (
//     <article>
//       <h2>{blog.Title}</h2>

//       <p>
//         Category: {blog.Category }
//       </p>

//       <p>{blog.Content}</p>

//       <p>
//         Author: {blog.Author}
//       </p>

//       <br />

//       <button onClick={() => onDelete(blog.Id)}>
//         Delete
//       </button>
//     </article>
//   );
// });

// export default BlogCard;


import { memo } from "react";

const BlogCard = memo(({ blog, onDelete }) => {
  return (


    
    <article className="group flex h-full flex-col rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
      {/* Category */}
      <div className="mb-4">
        <span className="inline-block rounded-full bg-blue-100 px-3 py-1 text-sm font-semibold text-blue-700">
          {blog.category}
        </span>
      </div>

      {/* Title */}
      <h2 className="mb-3 text-xl font-bold text-gray-900 transition group-hover:text-blue-600">
        {blog.title}
      </h2>

      {/* Content */}
      <p className="mb-5 line-clamp-3 flex-grow text-sm leading-6 text-gray-600">
        {blog.content}
      </p>

      {/* Author */}
      <div className="mb-5 flex items-center gap-2 border-t border-gray-100 pt-4">
        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-600 font-bold text-white">
          {blog.author?.charAt(0).toUpperCase()}
        </div>

        <div>
          <p className="text-xs text-gray-500">
            Written by
          </p>

          <p className="text-sm font-semibold text-gray-800">
            {blog.author}
          </p>
        </div>
      </div>

      {/* Reading Time */}
      {blog.readingTime && (
        <p className="mb-4 text-sm text-gray-500">
          📖 {blog.readingTime} min read
        </p>
      )}

      {/* Delete Button */}
      <button
        onClick={() => onDelete(blog.id)}
        className="w-full rounded-lg bg-red-500 px-4 py-2.5 font-semibold text-white transition hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-offset-2 active:scale-95"
      >
        Delete Blog
      </button>
    </article>

    
  );
});

export default BlogCard;
