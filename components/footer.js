import React from "react";

export default function Footer() {
  return (
    <>
        {/* Konten untuk layar besar (LG) */}
        <div className="hidden md:hidden lg:flex px-[80px] py-[64px] justify-between bg-[#FAFAFA]">
          {/* Logo */}
          <div className="">
            <img src="/assets/home/logoUngu.png" alt="" />
            <p className="text-blue-950 text-xl font-normal">
              Jelajahi semua pengetahuan dan ilmu yang <br />
              berguna bersama kami, untuk kehidupan yang <br />
              lebih bermanfaat
            </p>
          </div>

          {/* Bagian Informasi, Tentang, dan Ikuti Kami */}
          <div className="flex gap-32 ">
            {/* Informasi */}
            <div>
              <h1 className="mb-[22px] text-blue-950 text-2xl font-semibold">
                Informasi
              </h1>
              <ul className="space-y-[20px] text-neutral-700 text-xl font-normal">
                <li>Artikel</li>
                <li>Galeri</li>
              </ul>
            </div>
            {/* Tentang */}
            <div>
              <h1 className="mb-[22px] text-blue-950 text-2xl font-semibold">
                Tentang
              </h1>
              <ul className="space-y-[20px] text-neutral-700 text-xl font-normal">
                <li>Tentang Kami</li>
                <li>Hubungi Kami</li>
              </ul>
            </div>
            {/* Ikuti Kami */}
            <div>
              <h1 className="mb-[22px] text-blue-950 text-2xl font-semibold">
                Ikuti Kami
              </h1>
              <ul className="space-y-[20px] text-neutral-700 text-xl font-normal">
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
