import React, { useState, useEffect } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const SkeletonCard = () => {
  const [loading, setLoading] = useState(true);

  return (
    <>
      <div
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="100"
        key={blog.id}
        className="w-full bg-white pb-10 flex md:flex-row flex-col rounded-2xl overflow-hidden bg-orange-400 2xl:h-[200px] md:h-[180px] h-auto relative z-0 border-primary/30 border-[1px]"
      >
        <div className="flex md:flex-row flex-col items-center gap-0 md:gap-3 ">
          <img
            src={`http://localhost:8081/uploads/${blog.image}`}
            alt={blog.title}
            className="md:w-auto overflow-hidden w-full md:h-60 h-full object-cover md:rounded-md hover:scale-105 duration-200 transition-all ease-out hover:opacity-70"
          />

          <div>
            <p className="absolute text-center text-primary py-2 bottom-2 right-5 hover:text-grey flex items-center text-sm">
              Baca Selengkapnya
              <FaArrowRight className="mt-1 ml-2" />
            </p>
            <p className="bg-primary px-6 py-1 absolute top-2 left-2 text-white text-sm tracking-wider font-primary font-light rounded-tl-2xl rounded-br-2xl">
              {blog.category}
            </p>
          </div>
          <div className="w-full md:p-1 p-4 md:py-4 space-y-2 h-full ">
            <h3 className="text-primary text-justify capitalize mb-2 font-medium text-lg 2xl:text-xl hover:text-blue-600 cursor-pointer ">
              {blog.title}
            </h3>
            <div className="w-full bg-grey h-[2px]"></div>
            <p className="line-clamp-2 2xl:line-clamp-3 text-sm text-primary md:text-start text-justify">
              <div>
                <div
                  dangerouslySetInnerHTML={{
                    __html: DOMPurify.sanitize(blog.content),
                  }}
                ></div>
              </div>
            </p>
            <div className="absolute bottom-5 flex gap-2 text-primary items-center text-sm">
              <img className=" w-4" src="./icons/idate.svg" alt="idate" />
              <p>{new Date(blog.published_date).toLocaleDateString("en-GB")}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SkeletonCard;
