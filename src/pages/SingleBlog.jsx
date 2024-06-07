import React from "react";
import { useLoaderData } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { FaClock, FaCalendar } from "react-icons/fa6";
import SideBar from "../components/SideBar";
import { BiSolidCategoryAlt } from "react-icons/bi";
import DOMPurify from "dompurify";

const SingleBlog = () => {
  const data = useLoaderData();
  const {
    title,
    image,
    category,
    author,
    published_date,
    reading_time,
    content,
  } = data[0];

  const formattedDate = new Date(published_date).toLocaleDateString("id-ID", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });

  console.log("ini data di single" + data);

  return (
    <>
      <div className="py-32 px-4 bg-black mx-auto font-primary">
        <div className="text-center text-white">
          <p className="text-5xl leading-snug font-bold mb-5">Single Blog</p>
        </div>
      </div>
      {/* blog details */}
      <div className="max-w-5xl 2xl:max-w-6xl mx-auto my-12 flex flex-col md:flex-row gap-12 font-primary p-6 md:p-0">
        <div className="lg:w-3/4 mx-auto">
          <div>
            <img
              src={`http://localhost:8081/uploads/${image}`}
              alt={image}
              className="w-full mx-auto rounded"
            />
          </div>
          <h2 className="text-3xl font-semibold mb-4 text-blue-500 cursor-pointer mt-8 capitalize">
            {title}
          </h2>
          <div className="flex justify-between text-sm mb-4">
            <p className="flex items-center gap-2 bg-primary text-white px-6 py-1.5 rounded-full">
              <FaUser />
              {author}
            </p>
            <p className="flex items-center gap-2 bg-primary text-white px-6 py-1.5 rounded-full">
              <FaCalendar />
              {formattedDate}
            </p>
            <p className="flex items-center gap-2 bg-primary text-white px-6 py-1.5 rounded-full">
              <BiSolidCategoryAlt />
              {category}
            </p>
            <p className="flex items-center gap-2 bg-primary text-white px-6 py-1.5 rounded-full">
              <FaClock />
              {reading_time} Menit
            </p>
          </div>
          <div
            dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(content) }}
          ></div>
        </div>
        <div className="lg:w-1/3">
          <SideBar />
        </div>
      </div>
    </>
  );
};

export default SingleBlog;
