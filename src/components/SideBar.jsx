import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import DOMPurify from "dompurify";

const SideBar = () => {
  const [popularBlogs, setPopularBlogs] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8081/articles")
      .then((res) => res.json())
      .then((data) => {
        const publishedBlogs = data.filter((blog) => blog.status === 1); // Hanya ambil blog dengan status 1
        setPopularBlogs(publishedBlogs.slice(0, 15)); // Ambil 15 blog teratas
      });
  }, []);

  return (
    <>
      <div className="w-full flex flex-col capitalize font-primary relative rounded overflow-hidden">
        <div className="text-xl font-semibold flex items-center gap-2 bg-primary text-white px-2 py-1.5 absolute top-0 w-full left-0">
          <p>Postingan Terbaru</p>
        </div>
        <div className="pt-10">
          {popularBlogs.length === 0 ? (
            <p className="text-center py-10">Tidak ada postingan</p>
          ) : (
            popularBlogs.slice(0, 5).map((blog) => (
              <div
                key={blog.id}
                className="border border-grey rounded overflow-hidden mt-3 relative -z-0 min-h-28"
              >
                <img
                  src={`http://localhost:8081/uploads/${blog.image}`}
                  alt={blog.image}
                  className="h-full absolute -z-10 w-full object-cover"
                />
                <div className="w-full h-full bg-white/80 backdrop-blur-sm absolute object-cover -z-10"></div>
                <div className="flex flex-col gap-3 items-stretch justify-between px-4 py-3">
                  <Link
                    to={`/articles/${blog.id}`}
                    className="font-medium line-clamp-2"
                  >
                    {blog.title}
                  </Link>
                  <div
                    className="line-clamp-2 text-xs"
                    dangerouslySetInnerHTML={{
                      __html: DOMPurify.sanitize(blog.content),
                    }}
                  ></div>

                  <div className="flex justify-between items-end">
                    <p className="text-xs italic">{blog.category}</p>
                    <Link
                      to={`/articles/${blog.id}`}
                      className="text-sm hover:text-white flex items-center justify-end"
                    >
                      <p>Read More</p>
                      <FaArrowRight className="mt-1 ml-2" />
                    </Link>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
      <div className="w-full flex flex-col capitalize font-primary border border-grey p-2 relative rounded overflow-hidden mt-6">
        {/* Popular Blog */}
        <div className="text-xl font-semibold flex items-center gap-2 bg-primary text-white px-2 py-1.5 absolute top-0 w-full left-0">
          <p>Paling Sering Dibaca</p>
        </div>
        <div className="pt-6">
          {popularBlogs.length === 0 ? (
            <p className="text-center py-10">Tidak ada postingan</p>
          ) : (
            popularBlogs.slice(0, 5).map((blog) => (
              <div key={blog.id} className="my-5 border-b-2 border-spacing-2">
                <h4 className="font-medium mb-2 ">{blog.title}</h4>
                <Link
                  to={`/articles/${blog.id}`}
                  className="text-base pb-2 hover:text-orange-500 inline-flex items-center py-1"
                >
                  Read More <FaArrowRight className="mt-1 ml-2" />
                </Link>
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
};

export default SideBar;
