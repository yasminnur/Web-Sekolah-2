// import Link from "next/link";
// import React from "react";

// export default function navbar() {
  
//   return (
//     <>
//       <nav className="flex h-[72px] justify-between items-center mx-auto px-[80px] text-[16px] text-black bg-transparent">
//           <div className="my-[16px] w-[80px] h-[40px]">
//             <img src="./photo/inagata.png" alt="" />
//           </div>
//             <ul className="flex space-x-7 my-[24px] ">
//           <li>
//             <Link className="active:font-semibold hover:font-semibold" href="/">Beranda</Link>
//           </li>
//           <li>
//             <Link className="active:font-semibold hover:font-semibold" href="/about">About</Link>
//           </li>
//           <li>
//             <Link className="active:font-semibold hover:font-semibold" href="/galeri">Galeri</Link>
//           </li>
//           <li>
//             <Link className="active:font-semibold hover:font-semibold" href="/news">Artikel</Link>
//           </li>
//           <li>
//             <Link className="active:font-semibold hover:font-semibold" href="/kontak">Kontak</Link>
//           </li>
//             </ul>
//             <button className=" px-[24px] my-[20px] py-[4px] bg-white bg-opacity-25 flex justify-end items-end rounded-[4px] font-semibold">
//               PPDB</button>
//       </nav>
//     </>
//   );
// }

// BENAR
import React from 'react';
import { useRouter } from "next/router";
import Link from 'next/link';

function navbar (){
  const router = useRouter();


  return (
      <header className="py-5 px-10 bg-transparent">
        <div className="container flex justify-between bg-transparent">
          <a href="#" aria-label="Back to homepage" className="flex items-center p-2">
            <div className="container mx-auto">
              <img src="./assets/home/logonav.png" alt="" />
            </div>
          </a>
          <ul className="items-stretch hidden space-x-3 lg:flex">
            <li className="flex">
            <Link
              href="/"
              passHref    
              className={`flex items-center px-5 -mb-1 text-white ${
                router.pathname === "/" ? "border-b-4" : "font-normal"
              }`}
            >Beranda
              </Link>
            </li>
            <li className="flex">
            <Link
              href="/about"
              passHref
              className={`flex items-center px-5 -mb-1 text-white ${
                router.pathname === "/about" ? "border-b-4" : "font-normal"
              }`}
            >Tentang Kita
              </Link>
            </li>
            <li className="flex">
            <Link
              href="/news"
              passHref
              className={`flex items-center px-5 -mb-1 text-white ${
                router.pathname === "/news" ? "border-b-4" : "font-normal"
              }`}
            >Berita
              </Link>            </li>
            <li className="flex">
            <Link
              href="/galeri"
              passHref
              className={`flex items-center px-5 -mb-1 text-white ${
                router.pathname === "/galeri" ? "border-b-4" : "font-normal"
              }`}
            >Galeri
              </Link>              </li>
            <li className="flex">
            <Link
              href="/kontak"
              passHref
              className={`flex items-center px-5 -mb-1 text-white ${
                router.pathname === "/kontak" ? "border-b-4" : "font-normal"
              }`}
            >Kontak
              </Link>              </li>
          </ul>
          <div className="items-center flex-shrink-0 hidden lg:flex">
            <button className="self-center px-8 py-3 font-semibold rounded-full bg-blue-500 text-white">PPOB</button>
          </div>
          <button className="p-4 lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 dark:text-gray-100">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </button>
        </div>
      </header>
  );
};
export default navbar; 


// import React, { useState, useEffect } from "react";
// import Link from "next/link";
// import { useRouter } from "next/router";

// function Navbar() {
//   const router = useRouter();
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [logo, setLogo] = useState("logo.svg");
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
//     <header
//       className={`p-4 fixed top-0 left-0 right-0 z-10  ${
//         isScrolled ? "bg-white text-gray-800" : "bg-transparent text-gray-100"
//       }`}
//     >
//       <div className="container flex justify-between h-12 mx-auto">
//         <a
//           href="#"
//           aria-label="Back to homepage"
//           className="flex items-center p-7 "
//         >
//           <img src={logo} alt="Logo"></img>
//         </a>
//         <ul className="items-stretch hidden space-x-3 lg:flex">
//           <li className="flex">
//             <Link
//               href="/"
//               passHref
//               className={`flex items-center px-4 -mb-1 dark:border-transparent ${
//                 router.pathname === "/" ? "font-extrabold" : "font-normal"
//               }`}
//             >
//               Beranda
//             </Link>
//           </li>
//           <li className="flex">
//             <Link
//               href="/about"
//               passHref
//               className={`flex items-center px-4 -mb-1 dark:border-transparent ${
//                 router.pathname === "/about" ? "font-extrabold" : "font-normal"
//               }`}
//             >
//               Tentang
//             </Link>
//           </li>
//           <li className="flex">
//             <Link
//               href="/galery"
//               passHref
//               className={`flex items-center px-4 -mb-1 dark:border-transparent ${
//                 router.pathname === "/galeri" ? "font-extrabold" : "font-normal"
//               }`}
//             >
//               Galeri
//             </Link>
//           </li>
//           <li className="flex">
//             <Link
//               href="/news"
//               passHref
//               className={`flex items-center px-4 -mb-1 dark:border-transparent ${
//                 router.pathname === "/news" ? "font-extrabold" : "font-normal"
//               }`}
//             >
//               Artikel
//             </Link>
//           </li>
//           <li className="flex">
//             <Link
//               href="/contact"
//               passHref
//               className={`flex items-center px-4 -mb-1 dark:border-transparent ${
//                 router.pathname === "/contact"
//                   ? "font-extrabold"
//                   : "font-normal"
//               }`}
//             >
//               Kontak
//             </Link>
//           </li>
//         </ul>
//         <div className="items-center flex-shrink-0 hidden lg:pr-10 lg:flex">
//           <button
//             className={`self-center px-6 py-1 font-semibold ${
//               isScrolled
//                 ? "text-gray-800"
//                 : "dark:bg-violet-400 dark:text-gray-900"
//             } border-2 rounded-2xl`}
//           >
//             PPDB
//           </button>
//         </div>
        
//         <div className="lg:hidden">
//           <button onClick={toggleMobileMenu} className="p-4">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke="currentColor"
//               className={`w-6 h-6 ${
//                 isScrolled ? "text-gray-800" : "dark:text-gray-100"
//               }`}
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d="M4 6h16M4 12h16M4 18h16"
//               ></path>
//             </svg>
//           </button>
//           {isMobileMenuOpen && (
//             <div className="lg:hidden bg-white text-gray-800 absolute top-16 left-0 right-0 mt-2 p-2  shadow-lg">
//               <ul className="flex flex-col space-y-2 ml-5 py-3">
//                 <li >
//                   <Link href="/">Beranda</Link>
//                 </li>
//                 <li>
//                   <Link href="/about">Tentang</Link>
//                 </li>
//                 <li>
//                   <Link href="/galeri">Galeri</Link>
//                 </li>
//                 <li>
//                   <Link href="/news">Artikel</Link>
//                 </li>
//                 <li>
//                   <Link href="/contact">Kontak</Link>
//                 </li>
//               </ul>
//               <button
//                 className={`self-center px-6 py-1 ml-4 mb-4 font-semibold ${
//                   isScrolled
//                     ? "text-gray-800"
//                     : "dark:bg-violet-400 dark:text-gray-900"
//                 } border-2 rounded-2xl mt-4`}
//               >
//                 PPDB
//               </button>
//             </div>
//           )}
//         </div>
//       </div>
//     </header>
//   );
// }

// export default Navbar;