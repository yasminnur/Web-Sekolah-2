import React from "react";

export default function Footer() {
  return (
    <>
      <div className="lg:flex px-5 md:px-10 py-[64px] justify-between bg-[#FAFAFA]">
        
        <div className="md:mr-16 lg:mr-28 mb-10 lg:mb-0">
          <img src="/assets/home/logoUngu.png" alt="" className="w-[100px]"/>
          <p className="text-blue-950 md:text-base text-sm font-normal mt-3">
            Jelajahi semua pengetahuan dan ilmu yang
            berguna bersama kami, untuk kehidupan yang
            lebih bermanfaat
          </p>
        </div>

        <div className="lg:flex lg:gap-x-14">
          <div className="mb-5 lg:mb-0">
            <h1 className="mb-1 lg:mb-[22px] text-blue-950 text-lg md:text-xl font-semibold">
              Informasi
            </h1>
            <ul className="mb-1 lg:mb-0 lg:space-y-[20px] text-neutral-700 md:text-base text-sm font-normal">
              <li>Artikel</li>
              <li>Galeri</li>
            </ul>
          </div>
         
          <div className="mb-5 lg:mb-0">
            <h1 className="mb-1 lg:mb-[22px] text-blue-950 text-lg md:text-xl font-semibold">
              Tentang
            </h1>
            <ul className="mb-1 lg:mb-0 lg:space-y-[20px] text-neutral-700 md:text-base text-sm font-normal">
              <li style={{whiteSpace: "nowrap"}}>Tentang Kami</li>
              <li style={{whiteSpace: "nowrap"}}>Hubungi Kami</li>
            </ul>
          </div>
         
          <div className="mb-5 lg:mb-0">
            <h1 className="mb-1 lg:mb-[22px] text-blue-950 text-lg md:text-xl font-semibold">
              Ikuti Kami
            </h1>
            <ul className="mb-1 lg:mb-0 lg:space-y-[20px] text-neutral-700 md:text-base text-sm font-normal">
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

      <div className="px-5 md:px-10 bg-[#FAFAFA] py-4 lg:py-[32px] border-t-2">
        <p className="flex justify-center text-center md:text-base text-sm"
        style={{whiteSpace: "nowrap"}}>
          Hak Cipta © 2021. Seluruh hak dilindungi.
        </p>
      </div>
    </>
  );
}
