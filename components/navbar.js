// import Link from "next/link";
// import React, { useState, useEffect } from "react";
// import { useRouter } from "next/router";

// export default function navbar() {
//   const router = useRouter();
//   const [logo, setLogo] = useState("logo.png");
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const toggleMobileMenu = () => {
//     setIsMobileMenuOpen(!isMobileMenuOpen);
//   };

//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 0) {
//         setIsScrolled(true);
//         setLogo("logoblack.svg");
//       } else {
//         setIsScrolled(false);
//         setLogo("logo.svg");
//       }
//     };

//     window.addEventListener("scroll", handleScroll);

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   return (
//     <>
//       <header
//         className={`hidden lg:flex w-full rounded-none px-[80px] py-[20px] fixed top-0 left-0 right-0 z-10 ${
//           isScrolled
//             ? "bg-gradient-to-r from-[#4BA3EB] to-[#5DDAAA]"
//             : "text-gray-800"
//         }  rounded-2xl`}
//       >
//         <div className="container flex justify-between h-12 mx-auto">
//           <a
//             href="#"
//             aria-label="Back to homepage"
//             className="flex items-center p-2"
//           >
//             <img src="./assets/home/inagata.png" alt="Logo"></img>
//           </a>
//           <ul className="flex space-x-7 my-[24px] items-center">
//             <li>
//             <Link
//   href="/"
//   passHref
//   className={`flex items-center px-3 -mb-1 text-white ${
//     router.pathname === "/" ? "border-b-2" : "font-normal"
//   }`}
// >
//   Beranda
// </Link>

//             </li>
//             <li>
//               <Link
//                 href="/about"
//                 passHref
//                 className={`flex items-center px-3 -mb-1 text-white ${
//                   router.pathname === "/about" ? "border-b-2" : "font-normal"
//                 }`}
//               >
//                 About
//               </Link>
//             </li>
//             <li>
//               <Link
//                 href="/galeri"
//                 passHref
//                 className={`flex items-center px-3 -mb-1 text-white ${
//                   router.pathname === "/galeri" ? "border-b-2" : "font-normal"
//                 }`}
//               >
//                 Galeri
//               </Link>
//             </li>
//             <li>
//               <Link
//                 href="/news"
//                 passHref
//                 className={`flex items-center px-3 -mb-1 text-white ${
//                   router.pathname === "/news" ? "border-b-2" : "font-normal"
//                 }`}
//               >
//                 Artikel
//               </Link>
//             </li>
//             <li>
//               <Link
//                 href="/kontak"
//                 passHref
//                 className={`flex items-center px-3 -mb-1 text-white ${
//                   router.pathname === "/kontak" ? "border-b-2" : "font-normal"
//                 }`}
//               >
//                 Kontak
//               </Link>
//             </li>
//           </ul>
//           <button
//             className={`bg-white bg-opacity-25 px-5 rounded-[4px] font-semibold ${
//               isScrolled ? "text-gray-800" : "bg-white text-black"
//             }  rounded-2xl`}
//           >
//             PPDB
//           </button>

//           <div className="lg:hidden">
//             <button onClick={toggleMobileMenu} className="p-4">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke="currentColor"
//                 className={`w-6 h-6 ${
//                   isScrolled ? "text-gray-800" : "dark:text-gray-100"
//                 }`}
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d="M4 6h16M4 12h16M4 18h16"
//                 ></path>
//               </svg>
//             </button>
//             {isMobileMenuOpen && (
//               <div className="lg:hidden bg-white text-gray-800 absolute top-16 left-0 right-0 mt-2 p-2  shadow-lg">
//                 <ul className="flex flex-col space-y-2 ml-5 py-3">
//                   <li>
//                     <Link href="/">Beranda</Link>
//                   </li>
//                   <li>
//                     <Link href="/about">Tentang</Link>
//                   </li>
//                   <li>
//                     <Link href="/galeri">Galeri</Link>
//                   </li>
//                   <li>
//                     <Link href="/news">Artikel</Link>
//                   </li>
//                   <li>
//                     <Link href="/kontak">Kontak</Link>
//                   </li>
//                 </ul>
//                 <button
//                   className={`self-center px-[24px] my-[20px] py-[4px] bg-white bg-opacity-25 flex justify-end items-end rounded-[4px] font-semibold ${
//                     isScrolled
//                       ? "text-gray-800"
//                       : "bg-gradient-to-r from-[#4BA3EB] to-[#5DDAAA]"
//                   } border-2 rounded-2xl mt-4`}
//                 >
//                   PPDB
//                 </button>
//               </div>
//             )}
//           </div>
//         </div>
//       </header>
//     </>
//   );
// }

// import Image from 'next/image';
// import Link from 'next/link';
// import { useState } from 'react';

// function Navbar() {
//   const [navbar, setNavbar] = useState(false);

//   const toggleNavbar = () => {
//     setNavbar(!navbar);
//   };

//   return (
//     <div>
//       <nav className={`w-full fixed top-0 left-0 right-0 z-10 ${navbar ? 'bg-purple-900' : 'bg-transparent'}`}>
//         <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-8">
//           <div>
//             <div className="flex items-center justify-between py-3 md:py-5 md:block">
//               <Link href="/">
//                 <Image src="/assets/home/inagata.png" width={60} height={60} alt="logo" />
//               </Link>
//               <div className="md:hidden">
//                 <button
//                   className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
//                   onClick={toggleNavbar}
//                 >
//                   {navbar ? (
//                     <h1>x</h1>
//                   ) : (
//                     <Image
//                       src="/assets/menu.png"
//                       width={30}
//                       height={30}
//                       alt="logo"
//                       className="focus:border-none active:border-none"
//                     />
//                   )}
//                 </button>
//               </div>
//             </div>
//           </div>
//           <div>
//             <div
//               className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
//                 navbar ? 'p-12 md:p-0 block ' : 'hidden'
//               }`}
//             >
//               <ul className="h-screen md:h-auto items-center justify-center md:flex ">
//                 <li className="pb-6 text-xl text-white py-2 md:px-6 text-center border-b-2 md:border-b-0  hover:bg-purple-900  border-purple-900  md:hover:text-purple-600 md:hover:bg-transparent">
//                   <Link href="/" onClick={toggleNavbar}>
//                     Beranda
//                   </Link>
//                 </li>
//                 <li className="pb-6 text-xl text-white py-2 px-6 text-center  border-b-2 md:border-b-0  hover:bg-purple-600  border-purple-900  md:hover:text-purple-600 md:hover:bg-transparent">
//                   <Link href="/about" onClick={toggleNavbar}>
//                     Tentang
//                   </Link>
//                 </li>
//                 <li className="pb-6 text-xl text-white py-2 px-6 text-center  border-b-2 md:border-b-0  hover:bg-purple-600  border-purple-900  md:hover:text-purple-600 md:hover:bg-transparent">
//                   <Link href="/galeri" onClick={toggleNavbar}>
//                     Galeri
//                   </Link>
//                 </li>
//                 <li className="pb-6 text-xl text-white py-2 px-6 text-center  border-b-2 md:border-b-0  hover:bg-purple-600  border-purple-900  md:hover:text-purple-600 md:hover:bg-transparent">
//                   <Link href="/news" onClick={toggleNavbar}>
//                     Artikel
//                   </Link>
//                 </li>
//                 <li className="pb-6 text-xl text-white py-2 px-6 text-center  border-b-2 md:border-b-0  hover:bg-purple-600  border-purple-900  md:hover:text-purple-600 md:hover:bg-transparent">
//                   <Link href="/kontak" onClick={toggleNavbar}>
//                     Kontak
//                   </Link>
//                 </li>
//               </ul>
//               <div className="mt-4 md:mt-0">
//     <button className="bg-white bg-opacity-25 px-5 rounded-[4px] font-semibold items-end justify-end">
//       PPDB
//     </button>
//   </div>
//             </div>
//           </div>
//         </div>
//       </nav>
//     </div>
//   );
// }

// export default Navbar;

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





