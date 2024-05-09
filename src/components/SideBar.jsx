import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import { GiPunchBlast } from "react-icons/gi";
import { FaAutoprefixer } from "react-icons/fa6";
import DOMPurify from "dompurify";

const SideBar = () => {
  const [popularBlogs, setPopularBlogs] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8081/articles")
      .then((res) => res.json())
      .then((data) => setPopularBlogs(data.slice(0, 15)));
  }, []);
  return (
    <>
      <div className="w-full flex flex-col capitalize font-primary">
        <h3 className="text-2xl font-semibold flex items-center gap-2">
          <p>Paling Terupdate</p>
          <GiPunchBlast />
        </h3>
        <div>
          {popularBlogs.slice(0, 5).map((blog) => (
            <div key={blog.id} className="my-5 border-b-2 border-spacing-2">
              <div className="flex items-center gap-3">
                <img
                  src={`http://localhost:8081/uploads/${blog.image}`}
                  alt={blog.image}
                  className="w-20 h-20 object-cover rounded-lg outline outline-third outline-1"
                />
                <div>
                  <h4 className="font-medium">{blog.title}</h4>
                  <div
                    className="line-clamp-2 text-xs"
                    dangerouslySetInnerHTML={{
                      __html: DOMPurify.sanitize(blog.content),
                    }}
                  ></div>
                </div>
              </div>
              <Link
                to={`/articles/${blog.id}`}
                className="text-base pb-2 hover:text-third flex items-center py-1 justify-end mt-2"
              >
                <p>Read More</p>
                <FaArrowRight className="mt-1 ml-2" />
              </Link>
            </div>
          ))}
        </div>

        {/* Popular Blog */}
        <h3 className="text-2xl font-semibold mt-20 flex items-center gap-2">
          <p>Paling Sering Dibaca</p>
          <FaAutoprefixer />
        </h3>
        <div>
          {popularBlogs.slice(0, 5).map((blog) => (
            <div key={blog.id} className="my-5 border-b-2 border-spacing-2">
              <h4 className="font-medium mb-2 ">{blog.title}</h4>
              <Link
                to={`/articles/${blog.id}`}
                className="text-base pb-2 hover:text-orange-500 inline-flex items-center py-1"
              >
                Read More <FaArrowRight className="mt-1 ml-2" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default SideBar;
