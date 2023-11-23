import React from "react";
import Keunggulan from "@/components/keunggulan";
import GaleriPrev from "@/components/galeriPreview";
import Artikel from "@/components/artikel";

function index() {
  return (
    <>
      {/* SECTION 1 */}
      <section
        className="bg-background flex"
        style={{
          backgroundImage: "url(./assets/home/Vector.png)",
          backgroundSize: "cover",
          overflowY: "auto",
          height: "133vh",
          maxWidth: "full",
        }}
      >
        <div className="pt-[224px] px-[80px] lg:flex ">
          <div className="lg:w-1/2">
            <div className="justify-start items-start gap-6 ">
              <div className="lg:justify-start lg:items-start ">
                <h1 className="text-white text-5xl font-semibold">
                  Tuntut Ilmu Untuk Masa Depan Yang Lebih Baik
                </h1>
                <p className="text-white md:text-xl sm:text-3xl mt-4">
                  jelajahi semua pengetahuan dan ilmu yang berguna bersama kami,
                  untuk kehidupan yang lebih bermanfaat
                </p>
              </div>
              <button className="mt-6 text-emerald-300 text-base font-semibold px-6 py-3 bg-white rounded-md justify-center items-center">
                Daftar Sekarang
              </button>
            </div>
          </div>
          <div className="lg:w-1/2 -mt-20 hidden lg:flex">
            <img
              className="md:w-[500px] md:h-[350px] z-10"
              src="./assets/home/home.png"
            />
          </div>
        </div>
      </section>

      {/* SECTION 2 */}
      <section className="md:-mt-[290px] md:mb-[80px] lg:mt-0 lg:mb-0 px-[80px] ">
        <div className="lg:flex">
          <div className="lg:flex ">
            <div className="flex justify-center items-center">
              <img
                src="./assets/home/study.png"
                alt=""
                className="lg:w-full lg:h-full md:w-[300px] md:h-[300px] "
              ></img>
            </div>
          </div>
          <div className="md:mt-10">
            <h4 className="text-black lg:px-0 non-italic font-bold text-[56px] md:px-[100px] ">
              Tentang Kami
            </h4>
            <p className="text-justify font-normal text-[24px] max-w-[779px]">
              Sekolah Kami merupakan sekolah informal yang dikelola untuk
              membantu anak mengembangkan bakat dan kemampuannya. Dengan
              memberikan kurikulum terbaik agar anak bisa memilih minat nya dan
              fokus mengembangkan minat tersebut. Sekolah ini didirikan sejak
              tahun 1989 dan terus berkembang hingga saat ini.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 3 */}
      <section className="lg:py-32 md:py-0 sm:py-56">
      <div
        className=" bg-background flex "
        style={{
          backgroundImage: "url(./assets/home/Vector2.png)",
          backgroundSize: "cover",
          overflowY: "auto",
          height: "122vh",
        }}
      >
        <div className="lg:mt-56 md:mt-[550px] sm:mt-96">
          <Keunggulan />
        </div>
        </div>
        </section>

      {/* SECTION 4 */}
      <section className="mt-[120px] px-[80px] pt-[64px] pb-[85px]">
        <h1 className="text-black lg:justify-start lg:px-0 non-italic font-bold text-[56px] flex sm:justify-center  md:px-[220px] md:mt-10">
          Galeri
        </h1>
        <div className="lg:flex items-center lg:justify-between mb-[40px]">
          <p className="flex font-normal text-[#1C2661] text-[24px] sm:px-[140px] lg:px-0 ">
            Dokumentasi Sekolah kami
          </p>
            <button className="flex lg:mt-0 bg-[#3190DC] px-[24px] py-[12px] sm:mt-11 sm:mx-[220px] lg:-mx-0 rounded-[12px] text-white">
              Lihat Semua {">"}
            </button>
        </div>
        <div className="flex flex-wrap">
          <GaleriPrev />
        </div>
      </section>

      {/* SECTION 5 */}
      <section className="px-[79px] py-[40px] mt-[120px] mb-[120px]">
        <h1 className="text-[56px] font-bold pb-[12px]">Artikel</h1>
        <div className="md:flex items-center justify-between mb-[40px]">
          <ul className="md:flex text-[#404040] font-normal gap-10 text-[24px] justify-start">
            <li>
              <a
                href="#"
                className="active:font-bold hover:font-bold hover:border-b-2 active:border-b-2 p-[12px] active:border-black"
              >
                Semua
              </a>
            </li>
            <li>
              <a
                href="#"
                className="active:font-bold hover:font-bold active:border-b-2 p-[12px] active:border-black"
              >
                Berita
              </a>
            </li>
            <li>
              <a
                href="#"
                className="active:font-bold hover:font-bold active:border-b-2 p-[12px] active:border-black"
              >
                Kegiatan Sekolah
              </a>
            </li>
          </ul>
          <button className="md:flex bg-[#3190DC] px-[24px] py-[12px] rounded-[12px] text-white gap-2">
            Lihat Semua {">"}
          </button>
        </div>
        <Artikel />
      </section>
    </>
  );
}

export default index;
