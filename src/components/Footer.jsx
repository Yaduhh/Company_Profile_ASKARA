import {
  FaInstagram,
  FaLinkedin,
  FaTiktok,
  FaTwitter,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { IoMdCall } from "react-icons/io";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="w-full bg-primary">
        <div className="w-full relative z-0 justify-center font-primary grid grid-cols-1 md:grid-cols-5 text-white py-10 md:py-16 px-8 md:px-16 2xl:px-28">
          <div className="col-span-1 md:col-span-2 max-w-md space-y-3">
            <a href="/#">
              <img src="./../../icons/logoFooter.svg" alt="logo footer" />
            </a>
            <p className="text-justify 2xl:text-lg text-base capitalize md:pr-10">
              Perusahaan terpercaya dan terkemuka dengan memberikan pelayanan
              terbaik dibidang distribusi bahan baku
            </p>

            <div className="flex gap-4 items-center text-2xl pt-6 md:pt-10 justify-between md:justify-normal">
              <FaYoutube />
              <FaTwitter />
              <FaInstagram />
              <FaTiktok />
              <FaWhatsapp />
              <FaLinkedin />
            </div>
          </div>
          <div className="col-span-1 space-y-4 mt-10 md:mt-0 text-center md:text-start">
            <h1 className="uppercase font-semibold text-xl md:text-2xl 2xl:text-3xl">
              Company
            </h1>
            <div className="capitalize space-y-2 md:text-lg text-base font-normal flex flex-col">
              <a href="/about">Tentang</a>
              <a href="/#service">Services</a>
              <a href="/#testimoni">Testimoni</a>
            </div>
          </div>
          <div className="col-span-1 space-y-4 mt-10 md:mt-0 text-center md:text-start">
            <h1 className="uppercase font-semibold text-xl md:text-2xl 2xl:text-3xl">
              Support
            </h1>
            <div className="capitalize space-y-2 md:text-lg text-base font-normal flex flex-col">
              <a href="/#feedback">Feedback</a>
              <a href="/#helpcenter">Help Center</a>
              <a href="/#webians">Webians</a>
            </div>
          </div>
          <div className="col-span-1 space-y-4 mt-10 md:mt-0 text-center md:text-start">
            <h1 className="uppercase font-semibold text-xl md:text-2xl 2xl:text-3xl">
              Contact
            </h1>
            <div className="capitalize space-y-2 md:text-lg text-base font-normal">
              <Link
                to={"#call"}
                className="flex items-center gap-2 justify-center md:justify-normal"
              >
                <IoMdCall size={25} />
                <p>500 164 24 60</p>
              </Link>
              <Link
                to={"/#gmail"}
                className="flex items-center gap-2 justify-center md:justify-normal"
              >
                <MdEmail size={25} />
                <p className="normal-case">skara@mail.com</p>
              </Link>
            </div>
          </div>
        </div>
        <div className="w-full h-[1px] bg-white "></div>
        <div className="w-full flex md:flex-row flex-col justify-between 2xl:px-28 px-6 md:px-16 py-6 font-primary">
          <div className="text-white text-sm md:text-base 2xl:text-lg text-center md:text-start">
            <p>© Copyright by YaduhUI. All rights reserved.</p>
          </div>
          <div className="md:flex-row hidden gap-14 text-base 2xl:text-lg items-center capitalize text-white ">
            <Link to={`#privacy`}>Privacy Policy</Link>
            <Link to={`#termsofuse`}>Terms of use</Link>
            <Link to={`#legal`}>Legal</Link>
            <Link to={`#sitemap`}>Site Map</Link>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
