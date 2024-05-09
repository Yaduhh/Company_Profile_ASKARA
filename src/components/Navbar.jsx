import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
// react icons
import { FaWhatsapp, FaInstagram, FaLinkedin } from "react-icons/fa6";
import { PiRedditLogoFill } from "react-icons/pi";
import { IoClose } from "react-icons/io5";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  // Nav Items
  const navItems = [
    { path: "/", link: "Home" },
    { path: "/contact", link: "Contact" },
    { path: "/blogs", link: "Blogs" },
    { path: "/about", link: "About" },
    { path: "/service", link: "Pesan Vector" },
  ];

  return (
    <>
      <header className="bg-primary/90 backdrop-blur-sm text-white fixed top-0 left-0 right-0 font-primary z-50 md:rounded-b-full">
        <nav className="px-4 py-3 md:mx-20 mx-2 flex justify-between items-center">
          <a href="/" className="text-xl font-bold text-white">
            Yaduh | <span className="text-orange-400 font-light">Blog</span>
          </a>

          {/* NavItems */}
          <ul className="md:flex gap-10 text-base hidden px-8 py-2 rounded-full bg-white">
            {navItems.map(({ path, link }) => (
              <li className="text-primary" key={path}>
                <NavLink to={path}>{link}</NavLink>
              </li>
            ))}
          </ul>

          {/* menu icons */}
          <div className="text-white lg:flex gap-6 items-center hidden">
            <a
              href="https://www.instagram.com/las_vegaaas/"
              target="_blank"
              className="hover:text-third text-xl duration-200 transition-all ease-linear"
            >
              <FaInstagram />
            </a>
            <a
              href="/"
              className="hover:text-third text-xl duration-200 transition-all ease-linear"
            >
              <FaWhatsapp />
            </a>
            <a
              href="/"
              className="hover:text-third text-xl duration-200 transition-all ease-linear"
            >
              <FaLinkedin />
            </a>
            <Link
              to="https://vegaanggara.divitation.com"
              target="_blank"
              className="flex items-center"
            >
              <p className="bg-white text-primary hover:bg-third hover:text-white duration-200 text-sm rounded-xl pl-5 pr-7 py-1 -mr-5">
                My Portofolio
              </p>
              <img
                src="./images/fotopribadi.jpg"
                alt="foto pribadi"
                className="w-10 h-10 rounded-full outline-[1px] outline outline-white z-10"
              />
            </Link>
          </div>

          {/* Mobile Menu */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="cursor-pointer">
              {isMenuOpen ? (
                <IoClose className="w-7 h-7 rotate-45" />
              ) : (
                <PiRedditLogoFill className="w-7 h-7" />
              )}
            </button>
          </div>
        </nav>

        {/* Menu items for only mobile device */}
        <div>
          <ul
            className={`md:hidden gap-12 text-lg block space-y-4 px-6 py-6 mt-12 bg-white ${
              isMenuOpen
                ? "fixed top-3 left-0 w-full transition-all ease-out duration-200"
                : "hidden"
            }`}
          >
            {navItems.map(({ path, link }) => (
              <li className="text-black" key={path}>
                <NavLink
                  onClick={toggleMenu}
                  to={path}
                  className={({ isActive, isPending }) =>
                    isActive ? "active" : isPending ? "pending" : ""
                  }
                >
                  {link}
                </NavLink>
              </li>
            ))}
            {/* menu icons */}
            <div className="text-primary lg:hidden gap-6 items-center flex w-full justify-between">
              <div className="flex items-center gap-5">
                <a
                  href="https://www.instagram.com/las_vegaaas/"
                  target="_blank"
                  className="hover:text-third text-xl duration-200 transition-all ease-linear"
                >
                  <FaInstagram />
                </a>
                <a
                  href="/"
                  className="hover:text-third text-xl duration-200 transition-all ease-linear"
                >
                  <FaWhatsapp />
                </a>
                <a
                  href="/"
                  className="hover:text-third text-xl duration-200 transition-all ease-linear"
                >
                  <FaLinkedin />
                </a>
              </div>
              <Link
                to="https://vegaanggara.divitation.com"
                target="_blank"
                className="flex items-center"
              >
                <p className="bg-primary text-white hover:bg-third hover:text-white duration-200 text-sm rounded-xl pl-5 pr-7 py-1 -mr-5">
                  My Portofolio
                </p>
                <img
                  src="./images/fotopribadi.jpg"
                  alt="foto pribadi"
                  className="w-10 h-10 rounded-full outline-[1px] outline outline-white z-10"
                />
              </Link>
            </div>
          </ul>
        </div>
      </header>
    </>
  );
};

export default Navbar;
