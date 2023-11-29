import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

function Navbar() {
  const [navbar, setNavbar] = useState(false);

  const toggleNavbar = () => {
    setNavbar(!navbar);
  };

  return (
    <>
      <nav className={`bg-transparent fixed w-full z-20 top-0 start-0 border-b border-gray-200 dark:border-gray-600 ${navbar ? "bg-transparent" : "bg-transparent"}`}>
        <div className="max-w-screen-xl flex items-center justify-between mx-auto p-4">
          <div className="flex items-center space-x-3 rtl:space-x-reverse">
            <Link href="/">
              <img src="/assets/home/inagata.png" className="h-8" alt="Inagata Logo" />
            </Link>

            <div className="ml-auto md:hidden">
              <button
                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                onClick={toggleNavbar}
              >
                {navbar ? (
                  <h1>x</h1>
                ) : (
                  <Image src="/assets/menu.png" width={30} height={30} alt="logo" className="focus:border-none active:border-none" />
                )}
              </button>
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-3 ml-auto">
            <button
              type="button"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              PPDB
            </button>
          </div>

          <div className={`items-center w-full md:flex md:w-auto ${navbar ? "p-12 md:p-0 block " : "hidden"}`}>
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 bg-transparent">
              <li className="pb-6 text-xl text-white py-2 md:px-6 text-center border-b-2 md:border-b-0  hover:bg-purple-900  border-purple-900  md:hover:text-purple-600 md:hover:bg-transparent">
                <Link href="/" onClick={toggleNavbar}>
                  Beranda
                </Link>
              </li>
              <li className="pb-6 text-xl text-white py-2 px-6 text-center  border-b-2 md:border-b-0  hover:bg-purple-600  border-purple-900  md:hover:text-purple-600 md:hover:bg-transparent">
                <Link href="/about" onClick={toggleNavbar}>
                  Tentang
                </Link>
              </li>
              <li className="pb-6 text-xl text-white py-2 px-6 text-center  border-b-2 md:border-b-0  hover:bg-purple-600  border-purple-900  md:hover:text-purple-600 md:hover:bg-transparent">
                <Link href="/galeri" onClick={toggleNavbar}>
                  Galeri
                </Link>
              </li>
              <li className="pb-6 text-xl text-white py-2 px-6 text-center  border-b-2 md:border-b-0  hover:bg-purple-600  border-purple-900  md:hover:text-purple-600 md:hover:bg-transparent">
                <Link href="/news" onClick={toggleNavbar}>
                  Artikel
                </Link>
              </li>
              <li className="pb-6 text-xl text-white py-2 px-6 text-center  border-b-2 md:border-b-0  hover:bg-purple-600  border-purple-900  md:hover:text-purple-600 md:hover:bg-transparent">
                <Link href="/kontak" onClick={toggleNavbar}>
                  Kontak
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;





