import React, { useEffect, useState } from "react";
import { HiOutlineArrowSmRight } from "react-icons/hi";
import { FaArrowRight } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import DOMPurify from "dompurify";

const SectionThree = () => {
  const [popularBlogs, setPopularBlogs] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1500,
      easing: "ease-in-out",
      once: false,
    });
  }, []);

  useEffect(() => {
    fetch("http://localhost:8081/articles")
      .then((res) => res.json())
      .then((data) => {
        const publishedBlogs = data.filter((blog) => blog.status === 1); // Hanya ambil blog dengan status 1
        setPopularBlogs(publishedBlogs.slice(0, 15)); // Ambil 15 blog teratas
      });
  }, []);
  return (
    <section id="artikel">
      <div className="w-full min-h-screen md:h-auto relative z-0 font-primary overflow-hidden grid grid-cols-1 md:grid-cols-5">
        <img
          className="absolute bottom-0 left-0 -z-10"
          src="./icons/accentLogo.svg"
          alt="accent logo"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="300"
        />

        <div className="col-span-2 place-content-center capitalize pr-20 space-y-6 px-6 md:px-16 2xl:px-28 mb-6 md:mb-0 ">
          <p
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="100"
            className="2xl:text-5xl text-2xl md:text-4xl text-primary font-semibold"
          >
            berita terkini tentang kesehatan yang relevan.
          </p>
          <div className="w-96">
            <p
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="100"
              className="text-grey capitalize"
            >
              Tetap terhubung dengan perkembangan terbaru di dunia farmasi dan
              kesehatan.
            </p>
          </div>
          <Link
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="100"
            to="/blogs"
            className="bg-accent w-fit px-7 py-2 rounded-xl capitalize border-primary border flex gap-2 items-center"
          >
            Baca Berita{" "}
            <span>
              <HiOutlineArrowSmRight />
            </span>
          </Link>
        </div>
        <div className="col-span-1 md:col-span-3 place-content-center capitalize md:pr-20 2xl:space-y-8 md:space-y-4 space-y-8 p-6 max-sm:pb-16 md:px-16 2xl:px-28 bg-gradient-to-b">
          <p
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="100"
            className="2xl:text-3xl text-xl text-primary font-semibold"
          >
            POSTINGAN TERBARU
          </p>
          <div className="flex flex-col gap-6">
            {popularBlogs.slice(0, 3).map((blog) => (
              <Link
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="100"
                to={`/articles/${blog.id}`}
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
                      <img
                        className=" w-4"
                        src="./icons/idate.svg"
                        alt="idate"
                      />
                      <p>
                        {new Date(blog.published_date).toLocaleDateString(
                          "en-GB"
                        )}
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionThree;
