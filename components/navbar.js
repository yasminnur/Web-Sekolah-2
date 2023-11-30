import Link from "next/link";
import React, { useState, useEffect } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [textColor] = useState("white");
  const [isNavbarScrolled, setNavbarScrolled] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const scrollThreshold = 100;

      if (scrollPosition > scrollThreshold) {
        setNavbarScrolled(true);
      } else {
        setNavbarScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`fixed w-full py-2 px-5 md:px-10 text-white ${
        isNavbarScrolled
          ? "bg-gradient-to-r from-blue-400 to-emerald-300 z-10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-[1240px] m-auto flex justify-between items-center p-4 text-white text-base">
        <Link href="/">
          <img
            src="/assets/home/inagata.png"
            className="h-8"
            alt="Inagata Logo"
          />
        </Link>
        <ul style={{ color: `${textColor}` }} className="hidden sm:flex">
          <li className="p-4">
            <Link href="/">Beranda</Link>
          </li>
          <li className="p-4">
            <Link href="/about">Tentang</Link>
          </li>
          <li className="p-4">
            <Link href="/galeri">Galeri</Link>
          </li>
          <li className="p-4">
            <Link href="/news">Artikel</Link>
          </li>
          <li className="p-4">
            <Link href="/kontak">Kontak</Link>
          </li>
        </ul>
        <div className="text-white px-6 py-1 bg-white bg-opacity-40 rounded hidden sm:flex">
          <button>PPOB</button>
        </div>

        {/* Mobile Button */}
        <div onClick={handleNav} className="block sm:hidden z-10">
          {nav ? (
            <AiOutlineClose size={20} style={{ color: `${textColor}` }} />
          ) : (
            <AiOutlineMenu size={20} style={{ color: `${textColor}` }} />
          )}
        </div>
        {/* Mobile Menu */}
        <div
          className={
            nav
              ? "sm:hidden absolute top-0 left-0 right-0 bottom-0 flex justify-center items-center w-full h-screen text-black bg-white text-center ease-in duration-300"
              : "sm:hidden absolute top-0 left-[-100%] right-0 bottom-0 flex justify-center items-center w-full h-screen text-black bg-white text-center ease-in duration-300"
          }
        >
          <ul>
            <li
              onClick={handleNav}
              className="p-4 text-4xl hover:text-gray-500"
            >
              <Link href="/">Beranda</Link>
            </li>
            <li
              onClick={handleNav}
              className="p-4 text-4xl hover:text-gray-500"
            >
              <Link href="/about">Tentang</Link>
            </li>
            <li
              onClick={handleNav}
              className="p-4 text-4xl hover:text-gray-500"
            >
              <Link href="/galeri">Galeri</Link>
            </li>
            <li
              onClick={handleNav}
              className="p-4 text-4xl hover:text-gray-500"
            >
              <Link href="/news">Artikel</Link>
            </li>
            <li
              onClick={handleNav}
              className="p-4 text-4xl hover:text-gray-500"
            >
              <Link href="/kontak">Kontak</Link>
            </li>
            <li
              onClick={handleNav}
              className="p-4 text-4xl hover:text-gray-500"
            >
              <button className="text-white px-6 py-1 bg-gradient-to-r from-blue-400 to-emerald-300 rounded">
                PPOB
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
