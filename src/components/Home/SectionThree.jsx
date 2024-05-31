import React, { useEffect } from "react";
import { HiOutlineArrowSmRight } from "react-icons/hi";
import ArtikelCards from "../ArtikelCards";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

const SectionThree = () => {
  useEffect(() => {
    AOS.init({
      duration: 1500,
      easing: "ease-in-out",
      once: false,
    });
  }, []);
  return (
    <section id="artikel">
      <div className="w-full min-h-screen md:h-screen relative z-0 font-primary overflow-hidden grid grid-cols-1 md:grid-cols-5">
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
            data-aos="fade-down"
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
        <div className="col-span-1 md:col-span-3 place-content-center capitalize md:pr-20 2xl:space-y-8 md:space-y-4 space-y-8 p-6 max-sm:pb-16 md:px-16 2xl:px-28 bg-gradient-to-b from-primary to-secondary">
          <p
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="100"
            className="2xl:text-3xl text-xl text-white font-semibold"
          >
            POSTINGAN TERBARU
          </p>
          <ArtikelCards />
          <ArtikelCards />
          <ArtikelCards />
        </div>
      </div>
    </section>
  );
};

export default SectionThree;
