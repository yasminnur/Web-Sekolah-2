import React from "react";

export default function Footer() {
  return (
    <>
        {/* Konten untuk layar besar (LG) bg-[#FAFAFA]*/}
        <div className="lg:flex px-[80px] py-[64px] justify-between bg-[#FAFAFA]">
          {/* Logo */}
          <div className="md:mr-12 sm:mb-12">
            <img src="/assets/home/logoUngu.png" alt="" />
            <p className="text-blue-950 text-xl font-normal text-justify max-w-[488px] sm:w-full">
              Jelajahi semua pengetahuan dan ilmu yang
              berguna bersama kami, untuk kehidupan yang
              lebih bermanfaat
            </p>
          </div>

          {/* Bagian Informasi, Tentang, dan Ikuti Kami */}
          <div className="sm:flex gap-32 ">
            {/* Informasi */}
            <div className="sm:mb-20">
              <h1 className="md:mb-[22px] sm:mb-[10px] text-blue-950 text-2xl font-semibold">
                Informasi
              </h1>
              <ul className="md:space-y-[20px] sm:space-y-0 text-neutral-700 text-xl font-normal">
                <li>Artikel</li>
                <li>Galeri</li>
              </ul>
            </div>
            {/* Tentang */}
            <div className="sm:mb-20">
              <h1 className="md:mb-[22px] sm:mb-[10px] text-blue-950 text-2xl font-semibold">
                Tentang
              </h1>
              <ul className="md:space-y-[20px] sm:space-y-0 text-neutral-700 text-xl font-normal">
                <li>Tentang Kami</li>
                <li>Hubungi Kami</li>
              </ul>
            </div>
            {/* Ikuti Kami */}
            <div className="sm:mb-20">
              <h1 className="md:mb-[22px] sm:mb-[10px] text-blue-950 text-2xl font-semibold">
                Ikuti Kami
              </h1>
              <ul className="md:space-y-[20px] sm:space-y-0 text-neutral-700 text-xl font-normal">
                <li className="flex items-center">
                  <img
                    className="w-[16px] h-[16px] mr-2"
                    src="/assets/home/facebook.png"
                    alt="Facebook Icon"
                  />
                  <a href="#" className="">
                    namasekolah
                  </a>
                </li>
                <li className="flex items-center">
                  <img
                    className="w-[16px] h-[16px] mr-2"
                    src="/assets/home/twitter.png"
                    alt="Facebook Icon"
                  />
                  <a href="#" className="">
                    namasekolah
                  </a>
                </li>
                <li className="flex items-center">
                  <img
                    className="w-[16px] h-[16px] mr-2"
                    src="/assets/home/instagram.png"
                    alt="Facebook Icon"
                  />
                  <a href="#" className="">
                    namasekolah
                  </a>
                </li>
              </ul>
            </div>
          </div>
      </div>
      
      {/* Bagian hak cipta untuk layar kecil */}
      <div className="bg-[#FAFAFA] py-[32px] sm:border-t-2">
          <p className="flex justify-center items-center">
            Hak Cipta © 2021. Seluruh hak dilindungi.
          </p>
        </div>
    </>
  );
}
