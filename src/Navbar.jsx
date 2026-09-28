const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 border-b border-gray-200 bg-white shadow-sm">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        {/* Logo / Brand */}
        <a
          href="#blogs"
          className="text-xl font-bold tracking-tight text-gray-900 transition hover:text-blue-600 sm:text-2xl"
        >
          Blog Dashboard
        </a>

        {/* Navigation Links */}
        <div className="flex items-center gap-2 sm:gap-4">
          <a
            href="#blogs"
            className="rounded-lg px-3 py-2 text-sm font-medium text-gray-600 transition hover:bg-blue-50 hover:text-blue-600 sm:px-4 sm:text-base"
          >
            Blogs
          </a>

          <a
            href="#create"
            className="rounded-lg bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-blue-700 hover:shadow-md sm:px-4 sm:text-base"
          >
            Create Blog
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
