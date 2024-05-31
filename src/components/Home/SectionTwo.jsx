import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const SectionTwo = () => {
  useEffect(() => {
    AOS.init({
      duration: 1500,
      easing: "ease-in-out",
      once: false,
    });
  }, []);
  return (
    <section id="product">
      <div className="w-full min-h-screen md:p-0 p-6 md:h-screen relative z-0 font-primary overflow-hidden flex flex-col items-start justify-center gap-2 2xl:gap-6 ">
        <img
          className="absolute -z-10 top-0 left-0"
          src="./icons/bubble.svg"
          alt="bubble"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="500"
        />
        <img
          className="absolute -z-10 right-0 md:right-44 top-0 md:top-20"
          src="./icons/bubble2.svg"
          alt="bubble"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="700"
        />

        <img
          className="absolute -z-10 md:right-0 right-0 top-20"
          src="./icons/bubble3.svg"
          alt="bubble"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="900"
        />

        <div className="space-y-2 px-0 md:px-16 2xl:px-28">
          <p
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="200"
            className="uppercase text-grey 2xl:text-2xl text-xl font-medium"
          >
            Our Product
          </p>
          <h1
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="300"
            className="text-xl md:text-2xl 2xl:text-4xl font-semibold capitalize text-primary pb-5 md:pb-0"
          >
            We are committed to helping more than 1000 people <br />
            from all regions in Indonesia {">>>"}
          </h1>
        </div>

        <div className="w-full grid grid-cols-1 gap-10 md:gap-5 md:grid-cols-3">
          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="50"
            className="flex flex-col gap-3 md:gap-5 p-0 md:p-16 2xl:px-28"
          >
            <div className="flex gap-5 items-center">
              <img
                src="./icons/people.svg"
                alt="ipeople"
                className="w-8 md:w-auto"
              />
              <p className="text-2xl md:text-3xl 2xl:text-4xl font-semibold text-primary">
                1000+
              </p>
            </div>
            <div className="w-rull h-[2px] bg-grey"></div>
            <p className="2xl:text-xl text-base text-justify">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy.
            </p>
          </div>
          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="100"
            className="flex flex-col gap-3 md:gap-5 p-0 md:p-16"
          >
            <div className="flex gap-5 items-center">
              <img
                src="./icons/products.svg"
                alt="ipeople"
                className="w-8 md:w-auto"
              />
              <p className="text-2xl md:text-3xl 2xl:text-4xl font-semibold text-primary">
                199+
              </p>
            </div>
            <div className="w-rull h-[2px] bg-grey"></div>
            <p className="2xl:text-xl text-base text-justify">
              Text ever since the 1500s, when an unknown printer took a galley
              of type and scrambled it to make a type specimen book. It has
              survived not only five centuries.
            </p>
          </div>
          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="200"
            className="flex flex-col gap-3 md:gap-5 p-0 md:p-16"
          >
            <div className="flex gap-5 items-center">
              <img
                src="./icons/testimoni.svg"
                alt="ipeople"
                className="w-8 md:w-auto"
              />
              <p className="text-2xl md:text-3xl 2xl:text-4xl font-semibold text-primary">
                2K Testimoni
              </p>
            </div>
            <div className="w-rull h-[2px] bg-grey"></div>
            <p className="2xl:text-xl text-base text-justify">
              Scrambled it to make a type specimen book. It has survived not
              only five centuries, but also the leap into electronic
              typesetting.
            </p>
          </div>
        </div>
      </div>
      <div
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="100"
        className="bg-primary md:absolute bottom-0 2xl:h-56 md:h-36 h-44 mb-10 md:mb-0 max-sm:-mt-10 w-full"
      ></div>
    </section>
  );
};

export default SectionTwo;
