import Link from "next/link";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";

export default function navbar() {
  const router = useRouter();
  const [logo, setLogo] = useState("logo.svg");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
        setLogo("logoblack.svg");
      } else {
        setIsScrolled(false);
        setLogo("logo.svg");
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <header
        className={`w-full rounded-none px-[80px] py-[20px] fixed top-0 left-0 right-0 z-10 ${
          isScrolled
            ? "bg-gradient-to-r from-[#4BA3EB] to-[#5DDAAA]"
            : "text-gray-800"
        }  rounded-2xl`}
      >
        <div className="container flex justify-between h-12 mx-auto">
          <a
            href="#"
            aria-label="Back to homepage"
            className="flex items-center p-2"
          >
            <img src="./assets/home/inagata.png" alt="Logo"></img>
          </a>
          <ul className="flex space-x-7 my-[24px] items-center">
            <li>
              <Link
                href="/"
                passHref
                className={`flex items-center px-3 -mb-1 text-white ${
                  router.pathname === "/" ? "border-b-2" : "font-normal"
                }`}
              >
                Beranda
              </Link>
            </li>
            <li>
              <Link
                href="/about"
                passHref
                className={`flex items-center px-3 -mb-1 text-white ${
                  router.pathname === "/about" ? "border-b-2" : "font-normal"
                }`}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/galeri"
                passHref
                className={`flex items-center px-3 -mb-1 text-white ${
                  router.pathname === "/galeri" ? "border-b-2" : "font-normal"
                }`}
              >
                Galeri
              </Link>
            </li>
            <li>
              <Link
                href="/news"
                passHref
                className={`flex items-center px-3 -mb-1 text-white ${
                  router.pathname === "/news" ? "border-b-2" : "font-normal"
                }`}
              >
                Artikel
              </Link>
            </li>
            <li>
              <Link
                href="/kontak"
                passHref
                className={`flex items-center px-3 -mb-1 text-white ${
                  router.pathname === "/kontak" ? "border-b-2" : "font-normal"
                }`}
              >
                Kontak
              </Link>
            </li>
          </ul>
          <button
            className={`bg-white bg-opacity-25 px-5 rounded-[4px] font-semibold ${
              isScrolled ? "text-gray-800" : "bg-white text-black"
            }  rounded-2xl`}
          >
            PPDB
          </button>

          <div className="lg:hidden">
            <button onClick={toggleMobileMenu} className="p-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className={`w-6 h-6 ${
                  isScrolled ? "text-gray-800" : "dark:text-gray-100"
                }`}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </button>
            {isMobileMenuOpen && (
              <div className="lg:hidden bg-white text-gray-800 absolute top-16 left-0 right-0 mt-2 p-2  shadow-lg">
                <ul className="flex flex-col space-y-2 ml-5 py-3">
                  <li>
                    <Link href="/">Beranda</Link>
                  </li>
                  <li>
                    <Link href="/about">Tentang</Link>
                  </li>
                  <li>
                    <Link href="/galeri">Galeri</Link>
                  </li>
                  <li>
                    <Link href="/news">Artikel</Link>
                  </li>
                  <li>
                    <Link href="/kontak">Kontak</Link>
                  </li>
                </ul>
                <button
                  className={`self-center px-[24px] my-[20px] py-[4px] bg-white bg-opacity-25 flex justify-end items-end rounded-[4px] font-semibold ${
                    isScrolled
                      ? "text-gray-800"
                      : "bg-gradient-to-r from-[#4BA3EB] to-[#5DDAAA]"
                  } border-2 rounded-2xl mt-4`}
                >
                  PPDB
                </button>
              </div>
            )}
          </div>
        </div>
      </header>
    </>
  );
}
