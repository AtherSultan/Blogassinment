// import {
//   useRef,
//   useMemo,
//   useCallback,
//   useState,
// } from "react";

// import useBlogs from "./Hookblog";
// import Navbar from "./Navbar";
// import BlogForm from ".BlogForm";
// import BlogList from "./BlogList";
// import SearchBar from "./SearchBar";

// function App() {
//   // Custom Hook
//   const {
//     blogs,
//     addBlog,
//     deleteBlog,
//   } = useBlogs();

//   // useState
//   const [search, setSearch] = useState("");

//   // useRef
//   const inputRef = useRef(null);

//   // useCallback
//   const handleSearch = useCallback((value) => {
//     setSearch(value);
//   }, []);

//   // useMemo
//   const filteredBlogs = useMemo(() => {
//     return blogs.filter((blog) =>
//       blog.title
//         .toLowerCase()
//         .includes(search.toLowerCase())
//     );
//   }, [blogs, search]);

//   // Add new blog
//   const addNewBlog = () => {
//     addBlog({
//       title: "New React Blog",
//       category: "React",
//       author: "Ather",
//       content: "This is a new blog about React.",
//       readingTime: 5,
//       featured: false,
//     });

//     inputRef.current?.focus();
//   };

//   return (
//     <div className="min-h-screen bg-gray-50 text-gray-900">

//       {/* Navbar */}
//       <Navbar />

//       {/* Main Container */}
//       <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">

//         {/* Hero Section */}
//         <section className="mb-10 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-700 px-6 py-10 text-white shadow-lg sm:px-10">
//           <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-blue-100">
//             React Project
//           </p>

//           <h1 className="text-3xl font-bold sm:text-4xl lg:text-5xl">
//             Blog Dashboard
//           </h1>

//           <p className="mt-3 max-w-2xl text-sm leading-6 text-blue-100 sm:text-base">
//             Create, search, and manage your blog posts using
//             React Hooks and reusable components.
//           </p>
//         </section>

//         {/* Dashboard Grid */}
//         <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">

//           {/* Create Blog */}
//           <section
//             id="create"
//             className="lg:col-span-1"
//           >
//             <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
//               <h2 className="mb-1 text-2xl font-bold text-gray-900">
//                 Create Blog
//               </h2>

//               <p className="mb-6 text-sm text-gray-500">
//                 Add a new blog post.
//               </p>

//               <BlogForm onAddBlog={addBlog} />
//             </div>
//           </section>

//           {/* Blogs */}
//           <section
//             id="blogs"
//             className="lg:col-span-2"
//           >
//             <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">

//               {/* Search */}
//               <div className="mb-6">
//                 <SearchBar
//                   search={search}
//                   onSearch={handleSearch}
//                 />
//               </div>

//               {/* Blog Count */}
//               <div className="mb-6 flex items-center justify-between border-b border-gray-200 pb-4">
//                 <div>
//                   <h2 className="text-2xl font-bold text-gray-900">
//                     Blogs
//                   </h2>

//                   <p className="mt-1 text-sm text-gray-500">
//                     {filteredBlogs.length}{" "}
//                     {filteredBlogs.length === 1
//                       ? "blog"
//                       : "blogs"}{" "}
//                     found
//                   </p>
//                 </div>

//                 <button
//                   onClick={addNewBlog}
//                   className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 active:scale-95"
//                 >
//                   + Add Blog
//                 </button>
//               </div>

//               {/* Blog List */}
//               <BlogList
//                 blogs={filteredBlogs}
//                 search=""
//                 onDelete={deleteBlog}
//               />
//             </div>
//           </section>
//         </div>
//       </main>
//     </div>
//   );
// }

// export default App;

import {
  useMemo,
  useCallback,
  useState,
} from "react";

import useBlogs from "./Hookblog";
import Navbar from "./Navbar";
import BlogForm from "./BlogForm";
import BlogList from "./BlogList";
import SearchBar from "./SearchBar";

function App() {
  // Custom Hook
  const {
    blogs,
    addBlog,
    deleteBlog,
  } = useBlogs();

  // useState
  const [search, setSearch] = useState("");

  // useCallback
  const handleSearch = useCallback((value) => {
    setSearch(value);
  }, []);

  // useMemo
  const filteredBlogs = useMemo(() => {
    return blogs.filter((blog) =>
      blog.title
        .toLowerCase()
        .includes(search.toLowerCase())
    );
  }, [blogs, search]);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">

      {/* Navbar */}
      <Navbar />

      {/* Main Container */}
      <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">

        {/* Hero */}
        <section className="mb-10 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-700 px-6 py-10 text-white shadow-lg sm:px-10">
          <p className="mb-2 text-sm font-semibold uppercase tracking-wider text-blue-100">
            React Project
          </p>

          <h1 className="text-3xl font-bold sm:text-4xl lg:text-5xl">
            Blog Dashboard
          </h1>

          <p className="mt-3 max-w-2xl text-sm leading-6 text-blue-100 sm:text-base">
            Create, search, and manage your blog posts using
            React Hooks and reusable components.
          </p>
        </section>

        {/* Dashboard */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">

          {/* Create Blog */}
          <section
            id="create"
            className="lg:col-span-1"
          >
            <BlogForm onAddBlog={addBlog} />
          </section>

          {/* Blogs */}
          <section
            id="blogs"
            className="lg:col-span-2"
          >
            <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">

              {/* Search */}
              <div className="mb-6">
                <SearchBar
                  search={search}
                  onSearch={handleSearch}
                />
              </div>

              {/* Header */}
              <div className="mb-6 border-b border-gray-200 pb-4">
                <h2 className="text-2xl font-bold text-gray-900">
                  Blogs
                </h2>

                <p className="mt-1 text-sm text-gray-500">
                  {filteredBlogs.length}{" "}
                  {filteredBlogs.length === 1
                    ? "blog"
                    : "blogs"}{" "}
                  found
                </p>
              </div>

              {/* Blog List */}
              <BlogList
                blogs={filteredBlogs}
                onDelete={deleteBlog}
              />

            </div>
          </section>

        </div>
      </main>
    </div>
  );
}

export default App;