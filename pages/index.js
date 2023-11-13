import React from "react";
import Keunggulan from "@/components/keunggulan";
import GaleriPrev from "@/components/galeriPreview";
import Artikel from "@/components/artikel";

function index() {
  return (
    <>
      {/* SECTION 1 */}
      <section className=" bg-background flex"
        style={{
          backgroundImage: "url(assets/home/vector.png)",
          backgroundSize: "cover",
          overflowY: "auto",
          height: "133vh",
          maxWidth: "full"
        }}>
        <div className="pt-[224px] px-[80px] flex w-screen">
          <div className="">
            <div className="w-[601px] h-[276px] flex-col justify-start items-start gap-6 inline-flex">
              <div className="self-stretch h-[204px] flex-col justify-start items-start flex">
                <div className="self-stretch text-white text-5xl font-semibold">
                  Tuntut Ilmu Untuk Masa Depan Yang Lebih Baik
                </div>
                <div className="self-stretch lg:text-sm text-white text-xl font-normal mt-4">
                  jelajahi semua pengetahuan dan ilmu yang berguna bersama kami,
                  untuk kehidupan yang lebih bermanfaat
                </div>
              </div>
              <div className="px-6 py-3 bg-white rounded-md justify-center items-center gap-2.5 inline-flex">
                <div className="text-emerald-300 text-base font-semibold">
                  Daftar Sekarang
                </div>
              </div>
            </div>
          </div>

          {/* <div className="lg:ml-40 -mt-20 hidden lg:flex"> 
            <img
              src="./assets/home/home.png"
              className="w-full h-full object-cover"
              alt=""
            />
          </div> */}
          {/* <div className="lg:w-1/2 -mt-20 hidden lg:flex bg-red-200 "> 
            <img
              src="./assets/home/home.png"
              className="min-w-[400px] max-h-[600px] max-w-[600px] mx-auto"
              alt=""
            />
          </div> */}
          </div>
      </section>

      {/* SECTION 2 */}
      <section className="my-[120px] px-[80px]">
        <div className="lg:flex md:justify-center md:items-center gap-[100px]">
          <div className="lg:flex ">
            <img
              src="./assets/home/study.png"
              alt=""
              className="w-full h-full"
            ></img>
          </div>
          <div className="">
            <h4 className="text-black lg:px-0 non-italic font-bold text-[56px] md:px-[100px] md:mt-10">
              Tentang Kami
            </h4>
            <p className="text-justify font-normal text-[24px] max-w-[779px]">
              Sekolah Kami merupakan sekolah informal yang dikelola untuk
              membantu anak mengembangkan bakat dan kemampuannya.
              Dengan memberikan kurikulum terbaik agar anak bisa memilih
              minat nya dan fokus mengembangkan minat tersebut. Sekolah
              ini didirikan sejak tahun 1989 dan terus berkembang hingga saat
              ini.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 3 */}
      <section className=" bg-background flex "
        style={{
          backgroundImage: "url(/assets/home/Vector2.png)",
          backgroundSize: "cover",
          overflowY: "auto",
          height: "122vh",
        }}>
      <div className="px-[80px] mt-[250px]">
        <Keunggulan />
        </div>
        </section>

      {/* SECTION 4 */}
      <section className="mt-[120px] px-[80px] pt-[64px] pb-[85px]">
        <h1 className="text-black lg:px-0 non-italic font-bold text-[56px] md:px-[220px] md:mt-10">Galeri</h1>
        <div className="lg:flex items-center lg:justify-between mb-[40px] ">
          <p className="flex font-normal  text-[#1C2661] text-[24px] sm:px-[140px] lg:px-0">
            Dokumentasi Sekolah kami
          </p>
          <div className="">
          <button className="flex bg-[#3190DC] px-[24px] py-[12px] sm:mt-5 lg:mt-0 sm:mx-[220px] lg:-mx-0 rounded-[12px] text-white">
            Lihat Semua {'>'}
            </button>
            </div>
        </div>
        <div className="flex flex-wrap">
          <GaleriPrev />
        </div>
      </section>

      {/* SECTION 5 */}
      <section className="px-[79px] py-[40px] mt-[120px] mb-[120px]">
        <h1 className="text-[56px] font-bold pb-[12px]">Artikel</h1>
        <div className="flex items-center justify-between mb-[40px]">
          <ul className="flex text-[#404040] font-normal gap-10 text-[24px]">
            <li>
              <a
                href="#"
                className="active:font-bold hover:font-bold active:border-b-2 p-[12px] active:border-black"
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
          <button className="flex bg-[#3190DC] px-[24px] py-[12px] rounded-[12px] text-white gap-2">
            Lihat Semua {">"}
          </button>
        </div>
        <Artikel />
      </section>
    </>
  );
}

export default index;