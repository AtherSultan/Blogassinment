import { memo } from "react";

const SearchBar = memo(({ search, onSearch }) => {
  console.log("SearchBar rendered");

  return (
    <div className="w-full">
      <label
        htmlFor="blog-search"
        className="mb-2 block text-sm font-semibold text-gray-700"
      >
        Search Blogs
      </label>

      <div className="relative">
        {/* Search Icon */}
        <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
          🔍
        </span>

        <input
          id="blog-search"
          type="text"
          placeholder="Search blogs..."
          value={search}
          onChange={(e) => onSearch(e.target.value)}
          className="w-full rounded-xl border border-gray-300 bg-white py-3 pl-11 pr-4 text-gray-900 shadow-sm outline-none transition duration-200 placeholder:text-gray-400 focus:border-blue-500 focus:ring-4 focus:ring-blue-100"
        />
      </div>
    </div>
  );
});

export default SearchBar;
