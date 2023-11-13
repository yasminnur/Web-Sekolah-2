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
        className="w-full px-[80px] py-[20px] fixed top-0 left-0 right-0 z-10"
        // {`w-full rounded-none px-[80px] py-[20px]  top-0 left-0 right-0 z-10 ${
        //   isScrolled
        //     ? "bg-white"
        //     : "text-gray-800"
        // }  rounded-2xl`}
>
        {/* className="w-full px-[80px] py-[20px] fixed top-0 left-0 right-0 z-10"> */}
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
              isScrolled
                ? "text-gray-800"
                : "dark:bg-white dark:bg-opacity-25 dark:text-white"
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
                <li >
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
                  <Link href="/contact">Kontak</Link>
                </li>
              </ul>
              <button
                className={`self-center px-[24px] my-[20px] py-[4px] bg-white bg-opacity-25 flex justify-end items-end rounded-[4px] font-semibold ${
                  isScrolled
                    ? "text-gray-800"
                    : "dark:bg-violet-400 dark:text-gray-900"
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

// import React, { useState, useEffect } from "react";
// import Link from "next/link";
// import { useRouter } from "next/router";

// function header() {
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
//     <>
//     <header
//       className="h-[72px] w-full bg-red-200 px-[80px] py-[20px] fixed top-0 left-0 right-0 z-10"
//       >
//       <div className="container flex justify-between h-12 mx-auto">
//         <a
//           href="#"
//           aria-label="Back to homepage"
//           className="flex items-center p-2 bg-blue-200"
//         >
//           <img src="./assets/home/inagata.png" alt="Logo"></img>
//         </a>
//         <ul className="h-full items-stretch hidden space-x-7 lg:flex my-[24px]">
//           <li className="flex border-2">
//             <Link
//               href="/"
//               passHref
//               className={`flex items-center px-3 -mb-1 text-white ${
//                 router.pathname === "/" ? "bg-red-200" : "font-normal"
//               }`}
//             >
//               Beranda
//             </Link>
//           </li>
//           <li className="flex">
//             <Link
//               href="/about"
//               passHref
//               className={`flex items-center px-4 -mb-1 dark:border-transparent hover:font-semibold ${
//                 router.pathname === "/about" ? "font-extrabold" : "font-normal"
//               }`}
//             >
//               Tentang
//             </Link>
//           </li>
//           <li className="flex">
//             <Link
//               href="/galeri"
//               passHref
//               className={`flex items-center px-4 -mb-1 dark:border-transparent hover:font-semibold ${
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
//               className={`flex items-center px-4 -mb-1 dark:border-transparent hover:font-semibold ${
//                 router.pathname === "/news" ? "font-extrabold" : "font-normal"
//               }`}
//             >
//               Artikel
//             </Link>
//           </li>
//           <li className="flex">
//             <Link
//               href="/kontak"
//               passHref
//               className={`flex items-center px-4 -mb-1 dark:border-transparent hover:font-semibold ${
//                 router.pathname === "/kontak"
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
//             className={`self-center px-[24px] my-[20px] py-[4px] bg-white bg-opacity-25 flex justify-end items-end rounded-[4px] font-semibold ${
//               isScrolled
//                 ? "text-gray-800"
//                 : "dark:bg-white dark:bg-opacity-25 dark:text-white"
//             }  rounded-2xl`}
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
//                 className={`self-center px-[24px] my-[20px] py-[4px] bg-white bg-opacity-25 flex justify-end items-end rounded-[4px] font-semibold ${
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
//       </header>
//       </>
//   );
// }

// export default header;