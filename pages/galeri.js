import React from "react";
import Galeri from "@/components/galeri";

function galeri() {
  return (
    <>
      {/* SECTION 1 */}
      <section className="">
        <div
          className="container bg-background flex"
          style={{
            backgroundImage: "url(./assets/home/Vector.png)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            overflowY: "auto",
            height: "110vh",
            width: "100%",
          }}
        >
          <div className="flex flex-wrap px-5 md:px-10 pt-[200px] md:pt-[260px]">
            <div className="w-full lg:w-1/2 text-center md:text-start">
              <h1 className="text-white text-4xl md:text-5xl font-semibold leading-10">
                Galeri
              </h1>
              <p className="text-white md:text-xl text-lg mt-4">
                Beberapa hasil dokumentasi area sekolah dan kegiatan siswa di
                sekolah
              </p>
            </div>
            <div className="w-full lg:w-1/2">
              <div className="lg:flex justify-center hidden ml-14 lg:-mt-28">
                <img className="w-[500px]" src="./assets/galeri/amico.png" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2 */}
      <section className="px-5 md:px-10 mt-[120px] mb-[120px]">
        <div className="container">
              <div className="flex md:items-center mb-[40px] justify-start md:justify-center">
                <ul className="md:flex text-[#404040] font-normal md:gap-[40px] text-[24px]">
                  <li>
                    <div className="mx-auto hover:border-b-2 hover:border-[#3190DC] md:px-7 active:border-b-2 active:border-[#3190DC]">
                      <a
                        href="#"
                        className="text-neutral-700 text-lg md:text-xl tracking-wide active:font-semibold hover:font-semibold p-[12px] "
                      >
                        Semua
                      </a>
                    </div>
                  </li>
                  <li>
                    <div className="mx-auto hover:border-b-2 hover:border-[#3190DC] md:px-7 active:border-b-2 active:border-[#3190DC]">
                      <a
                        href="#"
                        className="text-neutral-700 text-lg md:text-xl tracking-wide active:font-semibold hover:font-semibold p-[12px] "
                      >
                        Berita
                      </a>
                    </div>
                  </li>
                  <li>
                    <div className="mx-auto hover:border-b-2 hover:border-[#3190DC] md:px-7 active:border-b-2 active:border-[#3190DC]">
                      <a
                        href="#"
                        className="text-neutral-700 text-lg md:text-xl tracking-wide active:font-semibold hover:font-semibold p-[12px] "
                      >
                        Kegiatan Sekolah
                      </a>
                    </div>
                  </li>
                </ul>
              </div>

              <Galeri />
          {/* menampilkan 10 dari */}
        <div className="h-8 justify-start md:justify-between md:items-center flex md:flex-row flex-col mt-10">
          <p className="text-neutral-700 text-base lg:text-xl font-normal">
            Menampilkan 10 Dari 21 Data
          </p>
          <div className="justify-start items-center gap-6 flex">
            <p className="text-neutral-700 text-base lg:text-xl font-normal">
              Halaman
            </p>
            <div className="justify-center items-center gap-2 flex">
              <div className="w-6 h-6" />
              <div className="justify-start items-start gap-2 flex">
                <img src="./assets/news/chevron-left.png" alt="" />
                <div className="px-2 flex-col justify-start items-start gap-2.5 inline-flex">
                  <h1 className="text-blue-500 text-base lg:text-xl font-medium underline">
                    1
                  </h1>
                </div>
                <div className="px-2 flex-col justify-start items-start gap-2.5 inline-flex">
                  <h1 className="text-neutral-700 text-base lg:text-xl font-normal">
                    2
                  </h1>
                </div>
                <div className="px-2 flex-col justify-start items-start gap-2.5 inline-flex">
                  <h1 className="text-neutral-700 text-base lg:text-xl font-normal">
                    3
                  </h1>
                </div>
                <img src="./assets/news/chevron-right.png" alt="" />
              </div>
            </div>
          </div>
        </div>
        </div>
      </section>
    </>
  );
}

export default galeri;
