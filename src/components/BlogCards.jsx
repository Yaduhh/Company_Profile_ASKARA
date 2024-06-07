import { Link } from "react-router-dom";
import { CgCalendarDates } from "react-icons/cg";
import DOMPurify from "dompurify";
import { FaUserCircle } from "react-icons/fa";

const BlogCards = ({
  blogs,
  currentPage,
  selectedCategory,
  pageSize,
  searchArticle,
  results,
  searchInput,
}) => {
  const filteredBlogs = blogs
    .filter((blog) => blog.status === 1)
    .filter((blogs) => !selectedCategory || blogs.category === selectedCategory)
    .slice((currentPage - 1) * pageSize, currentPage * pageSize)
    .filter((blog) => {
      if (!searchInput) {
        return true;
      } else {
        return results && results.length > 0
          ? results.some((result) => result.title === blog.title)
          : false;
      }
    });
  const isSearchResultsEmpty = searchArticle && filteredBlogs.length === 0;
  return (
    <>
      {isSearchResultsEmpty && (
        <div className="text-center text-gray-500 mt-4 text-6xl">
          Data tidak ditemukan.
        </div>
      )}

      <div className="grid md:grid-cols-3 sm:grid-cols02 grid-cols-1 gap-6 font-primary h-min w-full">
        {filteredBlogs.map((blog) => (
          <Link
            to={`/articles/${blog.id}`}
            key={blog.id}
            className="rounded-2xl overflow-hidden cursor-pointer bg-orange-400 h-[420px] relative z-0 border-primary/30 border-[1px]"
          >
            <div className="w-full relative z-0 overflow-hidden">
              <img
                src={`http://localhost:8081/uploads/${blog.image}`}
                alt={blog.image}
                className="md:w-auto w-full md:h-60 h-64 object-cover rounded-md hover:scale-105 duration-200 transition-all ease-out hover:opacity-70"
              />
              <p className="w-full bg-primary absolute bottom-0 text-center text-white py-2 font-primary text-sm hover:bg-secondary duration-200">
                Baca Selengkapnya
              </p>
              <p className="bg-primary px-3 py-1 absolute top-1 left-1 text-white text-sm tracking-wider font-primary font-light rounded-tl-2xl rounded-br-2xl">
                {blog.category}
              </p>
            </div>
            <div className="w-full p-3">
              <h3 className="text-primary text-justify capitalize mb-2 font-medium text-md hover:text-blue-600 cursor-pointer ">
                {blog.title}
              </h3>
              <p className="line-clamp-2 text-sm text-primary/70">
                <div
                  dangerouslySetInnerHTML={{
                    __html: DOMPurify.sanitize(blog.content),
                  }}
                ></div>
              </p>
            </div>
            <div className="p-3 w-full absolute bottom-0 space-y-2">
              <div className="w-full bg-primary/30 rounded-full h-[0.5px]"></div>
              <div className="flex items-center gap-1 justify-between text-primary/50 font-primary w-full">
                <div className="text-xs flex items-center gap-1">
                  <FaUserCircle className="h-4 w-4" />
                  <p className="text-xs"> {blog.author}</p>
                </div>
                <div className="text-xs flex items-center gap-1">
                  <CgCalendarDates size={16} />
                  <p className="text-xs">
                    {new Date(blog.published_date).toLocaleDateString("en-GB")}
                  </p>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};

export default BlogCards;
