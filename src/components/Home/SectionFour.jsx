import React, { useEffect, useState } from "react";
import { IoMdCall } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import AOS from "aos";
import "aos/dist/aos.css";
import axios from "axios";

const SectionFour = () => {
  const [name, setName] = useState("");
  const [nophone, setNophone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [notificationVisible, setNotificationVisible] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: "ease-in-out",
      once: false,
    });
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validasi form
    if (!name || !nophone || !email || !message) {
      setError("Semua field harus diisi !");
      return;
    }
    setError("");

    const newData = {
      name,
      nophone,
      email,
      message,
    };

    try {
      const response = await axios.post(
        "http://localhost:8081/postcontactus",
        newData
      );
      if (response.data.Status === "Success") {
        alert("Produk berhasil ditambahkan!");
      }
    } catch (error) {
      console.error("Terjadi kesalahan saat mengirim data:", error);
      alert("Terjadi kesalahan saat menambahkan produk.");
    }
    resetForm();
    showNotification();
  };

  const resetForm = () => {
    setName("");
    setNophone("");
    setEmail("");
    setMessage("");
  };

  const showNotification = () => {
    setNotificationVisible(true);
    setTimeout(() => {
      setNotificationVisible(false);
    }, 4000); // 4 detik
  };

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
              className="2xl:text-3xl text-2xl text-primary font-medium mt-6 md:-mt-24 2xl:-mt-28"
            >
              Dapatkan informasi terupdate setiap minggunya.
            </p>
          </div>
          <form
            data-aos="fade-up"
            data-aos-duration="2000"
            data-aos-delay="400"
            className="2xl:space-y-6 space-y-3"
            onSubmit={handleSubmit}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                e.preventDefault();
                handleSubmit(e);
              }
            }}
          >
            <input
              placeholder="Nama lengkap*"
              id="nama lengkap"
              name="nama lengkap"
              className="w-full outline-none border-b py-3 px-2 border-grey"
              value={name}
              type="text"
              onChange={(e) => setName(e.target.value)}
            />
            <input
              placeholder="No. Phone*"
              id="nomor handphone"
              name="nomor handphone"
              className="w-full outline-none border-b py-3 px-2 border-grey"
              value={nophone}
              type="number"
              onChange={(e) => setNophone(e.target.value)}
            />
            <input
              placeholder="Email*"
              id="email"
              name="email"
              className="w-full outline-none border-b py-3 px-2 border-grey"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
            />
            <textarea
              placeholder="Pesan*"
              id="pesan"
              name="pesan"
              className="w-full outline-none border-b py-3 px-2 border-grey"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              typeof="text"
            />
            {error && <p className="text-[#FF4D4D]">{error}</p>}

            <div className="w-full flex justify-end pb-20 md:pb-0">
              <button className="uppercase bg-transparent text-primary hover:text-grey tracking-wider font-medium underline underline-offset-2 duration-150">
                kirim pesan
              </button>
            </div>
          </form>
        </div>

        <img
          className="w-full absolute bottom-0 -z-10 md:h-1/3 h-28 object-cover pt-10"
          src="./images/peta.png"
          alt="peta"
        />
      </div>

      {notificationVisible && (
        <div className="notification font-normal capitalize font-primary">
          Berhasil mengirimkan pesan !
        </div>
      )}
    </section>
  );
};

export default SectionFour;
