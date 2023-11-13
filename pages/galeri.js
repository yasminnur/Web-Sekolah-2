import React from "react";
import Galeri from "@/components/galeri";

function galeri() {
  return (
    <>
      {/* SECTION 1 */}
      <section
        className=" bg-background flex"
        style={{
          backgroundImage: "url(./assets/home/Vector.png)",
          backgroundSize: "cover",
          overflowY: "auto",
          height: "133vh",
          maxWidth: "full",
        }}
      >
        <div className="pt-[224px] px-[80px] flex w-screen">
          <div className="">
            <div className="w-[601px] h-[276px] flex-col justify-start items-start gap-6 inline-flex">
              <div className="h-[204px] flex-col lg:justify-start lg:items-start  flex">
                <h1 className=" text-white text-5xl font-semibold">Galeri</h1>
                <p className="text-white text-xl font-normal mt-4">
                  Beberapa hasil dokumentasi area sekolah dan kegiatan siswa di
                  sekolah
                </p>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 -mt-20 hidden lg:flex">
            <img
              src="./assets/galeri/amico.png"
              className="min-w-[400px] max-h-[600px] max-w-[600px] mx-auto"
              alt=""
            />
          </div>
        </div>
      </section>

      {/* SECTION 5 */}
      <section className="px-[79px] py-[40px] mt-[120px] mb-[120px]">
        <div className="md:flex items-center mb-[40px] justify-center">
          <ul className="md:flex text-[#404040] font-normal gap-[40px] text-[24px]">
            <li>
              <div className="mx-auto hover:border-b-2 hover:border-[#3190DC] px-7 active:border-b-2 active:border-[#3190DC]">
                <a
                  href="#"
                  className="text-neutral-700 text-2xl tracking-wide active:font-semibold hover:font-semibold p-[12px] "
                >
                  Semua
                </a>
              </div>
            </li>
            <li>
              <div className="mx-auto hover:border-b-2 hover:border-[#3190DC] px-7 active:border-b-2 active:border-[#3190DC]">
                <a
                  href="#"
                  className="text-neutral-700 text-2xl tracking-wide active:font-semibold hover:font-semibold p-[12px] "
                >
                  Berita
                </a>
              </div>
            </li>
            <li>
              <div className="mx-auto hover:border-b-2 hover:border-[#3190DC] px-7 active:border-b-2 active:border-[#3190DC]">
                <a
                  href="#"
                  className="text-neutral-700 text-2xl tracking-wide active:font-semibold hover:font-semibold p-[12px] "
                >
                  Kegiatan Sekolah
                </a>
              </div>
            </li>
          </ul>
        </div>

        <Galeri />
      </section>
    </>
  );
}

export default galeri;
