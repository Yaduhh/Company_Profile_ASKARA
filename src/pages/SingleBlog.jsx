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

  return (
    <>
      {/* blog details */}
      <div className="max-w-5xl 2xl:max-w-6xl mx-auto my-24 flex flex-col md:flex-row gap-12 font-primary p-6 md:p-0">
        <div className="lg:w-3/4 mx-auto">
          <div>
            <img
              src={`http://localhost:8081/uploads/${image}`}
              alt={image}
              className="w-full mx-auto rounded"
            />
          </div>
          <div className="flex justify-between text-sm my-4 bg-grey rounded">
            <p className="flex items-center gap-2 text-white px-6 py-1.5 rounded-full">
              <FaUser />
              {author}
            </p>
            <p className="flex items-center gap-2 text-white px-6 py-1.5 rounded-full">
              <FaCalendar />
              {formattedDate}
            </p>
            <p className="flex items-center gap-2 text-white px-6 py-1.5 rounded-full">
              <FaClock />
              {reading_time} Menit
            </p>
          </div>
          <div className="text-3xl md:text-4xl font-semibold my-5 text-primary cursor-pointer capitalize space-y-3">
            <h2>{title}</h2>
            <div className="w-full h-[2px] bg-grey rounded"></div>
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
