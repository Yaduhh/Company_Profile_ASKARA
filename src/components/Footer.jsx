import { FaInstagram, FaLinkedin, FaTiktok, FaWhatsapp } from "react-icons/fa6";

const Footer = () => {
  return (
    <>
      <footer className="w-full relative z-0 flex justify-center font-primary bg-primary rounded-tr-[50px] ">
        <div className="2xl:mx-28 md:mx-0 text-white w-full relative z-0 gap-8 md:gap-14 h-auto grid grid-cols-1 md:grid-cols-5 md:p-12 p-8 pb-20 md:pb-28">
          <div className="space-y-2 col-span-2 text-center md:text-start">
            <h1 className="text-3xl font-semibold">
              Yaduh | <span className="font-normal">Blog</span>
            </h1>
            <div className="w-full bg-white h-[1px]"></div>
            <p className="text-sm text-justify">
              Blog ini tentang artikel seputar teknologi dan tutorial editing,
              jika ada artikel yang ngaur dan tidak mendidik mohon dimaafkan.
            </p>
            <div className="flex items-center gap-5 text-2xl pt-4 justify-center md:justify-start">
              <FaLinkedin />
              <FaWhatsapp />
              <FaTiktok />
              <FaInstagram />
            </div>
          </div>
          <div className="space-y-4 col-span-2 md:col-span-1 text-center md:text-start">
            <h2 className="text-xl font-medium tracking-wider uppercase underline underline-offset-8">
              Explore
            </h2>
            <div className="space-y-1 capitalize">
              <div>
                <a href="#">Adobe Product</a>
              </div>
              <div>
                <a href="#">Design</a>
              </div>
              <div>
                <a href="#">Web Development</a>
              </div>
            </div>
          </div>
          <div className="space-y-4 col-span-2 md:col-span-1 text-center md:text-start">
            <h2 className="text-xl font-medium tracking-wider uppercase  underline underline-offset-8">
              category
            </h2>
            <div className="space-y-1 capitalize">
              <div>
                <a href="#">Adobe Product</a>
              </div>
              <div>
                <a href="#">Design</a>
              </div>
              <div>
                <a href="#">Web Development</a>
              </div>
            </div>
          </div>
          <div className="space-y-4 col-span-2 md:col-span-1 text-center md:text-start">
            <h2 className="text-xl font-medium tracking-wider uppercase  underline underline-offset-8">
              Services
            </h2>
            <div className="space-y-1 capitalize">
              <div>
                <a href="#">Wedding Digital Invitation</a>
              </div>
              <div>
                <a href="#">Editing Design</a>
              </div>
              <div>
                <a href="#">Web Development</a>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-black/50 w-full h-10 absolute bottom-0"></div>
        <div className="bg-black/50 md:w-[40%] w-[100%] md:h-8 h-5 rounded-t-full absolute bottom-10">
          <p className="text-center mt-5 font-primary text-white md:text-sm text-xs tracking-wider">
            Copyright © 2024 Yaduh | Blog. All Reserved
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
