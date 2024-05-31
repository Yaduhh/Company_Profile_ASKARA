import React, { useEffect } from "react";
import { MdExpandMore } from "react-icons/md";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";

const Banner = () => {
  useEffect(() => {
    AOS.init({
      duration: 1500,
      easing: "ease-in-out",
      once: false,
    });
  }, []);

  return (
    <>
      <section id="home">
        <div className="w-full h-screen relative z-0 font-primary overflow-hidden flex flex-col items-center justify-center gap-6 px-6 md:px-16 2xl:px-28">
          <img
            className="w-full hidden md:block object-cover h-screen md:h-auto md:w-full absolute -z-10 select-none "
            src="./images/banner.png"
            alt="banner"
            data-aos="fade-up"
            data-aos-duration="1000"
          />
          <img
            className="w-full block md:hidden object-cover h-screen md:h-auto md:w-full absolute -z-10 select-none "
            src="./images/bannersm.png"
            alt="banner"
            data-aos="fade-up"
            data-aos-duration="1000"
          />

          <div className="w-full flex flex-col justify-around items-start gap-3 h-full max-sm:-mt-0 mt-28">
            <div>
              <h1
                data-aos="fade-up"
                className="text-grey pb-6 text-center md:text-start text-xl md:text-3xl font-medium md:tracking-widest"
              >
                OUR MISSON
              </h1>
              <h1
                data-aos="fade-up"
                className="text-3xl px-6 md:px-0 leading-tight text-center md:text-start md:text-4xl 2xl:text-5xl text-primary font-semibold w-full md:w-[40%]"
              >
                We Always Provide The Best Quality Products And The Best
                Solution {">>>"}
              </h1>

              <Link
                data-aos="fade-up"
                data-aos-delay="0"
                to="#contact"
                className="flex gap-4 pb-14 2xl:pb-0 items-center text-primary animate-bounce text-xl justify-center md:justify-normal pt-20"
              >
                <p>See More</p>
                <MdExpandMore />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
