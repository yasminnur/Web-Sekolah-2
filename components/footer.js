import React from "react";

export default function footer() {
  return (
    <>
      <footer class=" ">
        <div className="bg-[#FAFAFA] px-[80px] py-[64px] flex flex-cols-2 justify-between">
          {/* buat logo */}
          <div className="">
            <img src="/assets/home/logoUngu.png" alt="" />
            <p className="text-blue-950 text-xl font-normal">
              Jelajahi semua pengetahuan dan ilmu yang <br />
              berguna bersama kami, untuk kehidupan yang <br />
              lebih bermanfaat
            </p>
          </div>
          {/* buat tentang kami */}
          <div>
            <div className="flex gap-32">
              {/* informasi */}
              <div>
                <h1 className="mb-[22px] text-blue-950 text-2xl font-semibold">
                  Informasi
                </h1>
                <ul className="space-y-[20px] text-neutral-700 text-xl font-normal">
                  <li>Artikel</li>
                  <li>Galeri</li>
                </ul>
              </div>
              {/* tentang */}
              <div>
                <h1 className="mb-[22px] text-blue-950 text-2xl font-semibold">
                  Tentang
                </h1>
                <ul className="space-y-[20px] text-neutral-700 text-xl font-normal">
                  <li>Tentang Kami</li>
                  <li>Hubungi Kami</li>
                </ul>
              </div>
              {/* ikuti kami */}
              <div>
                <h1 class="mb-[22px] text-blue-950 text-2xl font-semibold">
                  Ikuti Kami
                </h1>
                <ul class="space-y-[20px] text-neutral-700 text-xl font-normal">
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
        </div>

        <div className="py-[32px] border-t-2 bg-[#FAFAFA] ">
          <p className="flex justify-center items-center ">
            Copyright © 2021. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
}
