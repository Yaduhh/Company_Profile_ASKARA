import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { PiRedditLogoFill } from "react-icons/pi";
import { IoClose } from "react-icons/io5";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  // Nav Items
  const navItems = [
    { path: "/", link: "Beranda" },
    { path: "/contact", link: "Produk" },
    { path: "/blogs", link: "Tentang" },
    { path: "/about", link: "Berita" },
  ];

  return (
    <>
      <header className="bg-primary/90 backdrop-blur-sm text-white fixed top-2 left-2 right-2 font-primary z-50 md:rounded-3xl">
        <nav className="px-4 py-3 md:mx-20 mx-2 flex justify-between items-center">
          <img
            className="w-36"
            src="./images/logo_white.svg"
            alt="logo white"
          />

          {/* NavItems */}
          <ul className="md:flex gap-10 text-base hidden px-8 py-2">
            {navItems.map(({ path, link }) => (
              <li className="text-white/70" key={path}>
                <NavLink to={path}>{link}</NavLink>
              </li>
            ))}
          </ul>

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
          </ul>
        </div>
      </header>
    </>
  );
};

export default Navbar;
