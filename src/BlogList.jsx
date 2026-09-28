function BlogList({ blogs, onDelete }) {
  return (
    <section className="w-full rounded-2xl bg-gray-100 p-4 sm:p-6 lg:p-8">
      {/* Header */}
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900 sm:text-3xl">
          Blog Posts
        </h2>

        <p className="mt-1 text-sm text-gray-500">
          {blogs.length}{" "}
          {blogs.length === 1 ? "blog" : "blogs"} found
        </p>
      </div>

      {/* No Blogs */}
      {blogs.length === 0 ? (
        <div className="rounded-xl border border-dashed border-gray-300 bg-white p-10 text-center">
          <h3 className="text-lg font-semibold text-gray-700">
            No blogs found
          </h3>

          <p className="mt-2 text-sm text-gray-500">
            Try changing your search.
          </p>
        </div>
      ) : (
        /* Blog Grid */
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {blogs.map((blog) => (
            <article
              key={blog.id}
              className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              {/* Category */}
              {blog.category && (
                <span className="mb-3 inline-block rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700">
                  {blog.category}
                </span>
              )}

              {/* Title */}
              <h2 className="mb-3 text-xl font-bold text-gray-900">
                {blog.title}
              </h2>

              {/* Content */}
              <p className="mb-4 line-clamp-3 text-sm leading-6 text-gray-600">
                {blog.content}
              </p>

              {/* Author */}
              <div className="border-t border-gray-100 pt-4">
                <p className="text-sm font-medium text-gray-700">
                  Author:{" "}
                  <span className="font-semibold text-blue-600">
                    {blog.author}
                  </span>
                </p>
              </div>

              {/* Reading Time */}
              {blog.readingTime && (
                <p className="mt-3 text-sm text-gray-500">
                  📖 {blog.readingTime} min read
                </p>
              )}

              {/* Featured */}
              {blog.featured && (
                <p className="mt-2 text-sm font-semibold text-amber-600">
                  ⭐ Featured
                </p>
              )}

              {/* Delete */}
              <button
                type="button"
                onClick={() => onDelete(blog.id)}
                className="mt-4 w-full rounded-lg bg-red-500 px-4 py-2 font-semibold text-white transition hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-offset-2"
              >
                Delete
              </button>
            </article>
          ))}
        </div>
      )}
    </section>
  );
}

export default BlogList;