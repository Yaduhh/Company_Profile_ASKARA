import React, { useEffect } from "react";
import { IoMdCall } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import AOS from "aos";
import "aos/dist/aos.css";
import LoadingSpinner from "../LoadingSpinner";

const SectionFour = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: "ease-in-out",
      once: false,
    });
  }, []);

  return (
    <section id="kontak">
      <div className="w-full min-h-screen relative z-0 font-primary overflow-hidden grid grid-cols-1 md:grid-cols-2 p-6 md:p-16 2xl:p-28">
        <img
          className="absolute bottom-0 left-0 -z-10"
          src="./icons/accentLogo.svg"
          alt="accent logo"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="300"
        />
        <div className="col-span-1 space-y-5 md:space-y-10 place-content-center">
          <h1
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="300"
            className="uppercase text-primary font-semibold text-3xl md:tracking-wider"
          >
            Informasi Kontak
          </h1>
          <div className="space-y-0 md:space-y-2">
            <div
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="300"
              className="flex gap-2 items-center text-primary"
            >
              <IoMdCall size={30} />
              <p className="text-xl md:text-2xl font-semibold">500 164 24 60</p>
            </div>
            <div
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="300"
              className="flex gap-2 items-center text-primary"
            >
              <MdEmail size={30} />
              <p className="text-xl md:text-2xl font-semibold">
                skara@mail.com
              </p>
            </div>
          </div>

          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="300"
            className="border-2 border-primary w-full md:w-[70%] relative z-0 rounded-xl overflow-hidden"
          >
            <img className="w-auto" src="./images/maps.png" alt="maps" />
            <button
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="300"
              className="w-full bg-primary absolute bottom-0 text-white py-2 flex items-center gap-2 justify-center hover:bg-secondary duration-150"
            >
              <span>
                <img src="./icons/imaps.svg" alt="imaps" />
              </span>{" "}
              Lihat Maps
            </button>
          </div>
        </div>
        <div className="col-span-1 md:place-content-center place-content-start 2xl:space-y-5 space-y-2">
          <div className="w-full md:w-7/12">
            <p
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="300"
              className="2xl:text-3xl text-2xl text-primary font-medium -mt-6 2xl:mt-0"
            >
              Dapatkan informasi terupdate setiap minggunya.
            </p>
          </div>
          <form
            data-aos="fade-up"
            data-aos-duration="2000"
            data-aos-delay="400"
            className="2xl:space-y-6 space-y-4"
          >
            <input
              placeholder="Nama lengkap*"
              id="nama lengkap"
              name="nama lengkap"
              className="w-full outline-none border-b py-3 px-2 border-grey"
            />
            <input
              placeholder="No. Phone*"
              id="nomor handphone"
              name="nomor handphone"
              className="w-full outline-none border-b py-3 px-2 border-grey"
            />
            <input
              placeholder="Email*"
              id="email"
              name="email"
              className="w-full outline-none border-b py-3 px-2 border-grey"
            />

            <div className="w-full flex justify-end">
              <button className="uppercase bg-transparent text-primary hover:text-grey tracking-wider font-medium underline underline-offset-2 duration-150">
                kirim pesan
              </button>
            </div>
          </form>
        </div>

        <img
          className="w-full absolute bottom-0 -z-10 md:h-auto h-20 object-cover"
          src="./images/peta.png"
          alt="peta"
        />
      </div>
    </section>
  );
};

export default SectionFour;
