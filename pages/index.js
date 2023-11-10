import React from "react";
import Keunggulan from "@/components/keunggulan";
import Galeri from "@/components/galeri";
import Artikel from "@/components/artikel";
import Navbar from '@/components/navbar'

function index() {
  return (
    <>
      {/* SECTION 1 */}
      <div className="bg-white">
        <main
          className=" bg-background flex "
          style={{
            backgroundImage: "url(/assets/home/Vector.png)",
            backgroundSize: "cover",
            overflowY: "auto",
            height: "122vh",
          }}
        >
          <img
            class="absolute right-20 lg:top-[300px]"
            src="./assets/home/amico1.png"
          />

          <div className="w-7/12 flex flex-row items-center mb-20 px-[90px]">
            <div className="w-[601px] h-[276px] flex-col justify-start items-start gap-6 inline-flex">
              <div className="self-stretch h-[204px] flex-col justify-start items-start flex">
                <div className="self-stretch text-white text-5xl font-semibold font-['Poppins']">
                  Tuntut Ilmu Untuk Masa Depan Yang Lebih Baik
                </div>
                <div className="self-stretch text-white text-xl font-normal font-['Poppins']">
                  jelajahi semua pengetahuan dan ilmu yang berguna bersama kami,
                  untuk kehidupan yang lebih bermanfaat
                </div>
              </div>
              <div className="px-6 py-3 bg-white rounded-md justify-center items-center gap-2.5 inline-flex">
                <div className="text-emerald-300 text-base font-semibold font-['Poppins']">
                  Daftar Sekarang
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>

      {/* SECTION 2 */}
      <section className="my-[120px]">
        <div className="lg:flex justify-center items-center gap-[100px]">
          <div className="">
            <img
              src="./assets/home/study.png"
              alt=""
              className="w-full h-full"
            ></img>
          </div>
          <div className="">
            <h4 className="text-black non-italic font-bold text-[56px] justify-center items-center">
              Tentang Kami
            </h4>
            <p className="text-justify font-normal text-[24px]">
              Sekolah Kami merupakan sekolah informal yang dikelola untuk
              <br />
              membantu anak mengembangkan bakat dan kemampuannya.
              <br />
              Dengan memberikan kurikulum terbaik agar anak bisa memilih
              <br />
              minat nya dan fokus mengembangkan minat tersebut. Sekolah
              <br />
              ini didirikan sejak tahun 1989 dan terus berkembang hingga saat
              <br />
              ini.
            </p>
          </div>
        </div>
      </section>

      {/* SECTION 3 */}
      <div
        className=" bg-background flex "
        style={{
          backgroundImage: "url(/assets/home/Vector2.png)",
          backgroundSize: "cover",
          overflowY: "auto", 
          height: "122vh",
        }}
      >
        <Keunggulan />
      </div>

      {/* SECTION 4 */}
      <section className="mt-[120px] px-[81px] pt-[64px] pb-[85px]">
        <h1 className="text-[56px] font-bold pb-[12px]">Galeri</h1>
        <div className="flex items-center justify-between mb-[40px]">
          <p className="font-normal text-[#1C2661] text-[24px]">
            Dokumentasi Sekolah kami
          </p>
          <button className="flex bg-[#3190DC] px-[24px] py-[12px] rounded-[12px] text-white gap-2">
            Lihat Semua{" "}
            <img
              src="./assets/home/chevron-right.png"
              alt=""
              className="items-center justify-center w-[14px] h-[14px]"
            />
          </button>
        </div>
        <div className="flex items-center justify-between mb-[40px]">
          <Galeri />
        </div>
      </section>

      {/* SECTION 5 */}
      <section className="px-[79px] py-[40px] mt-[120px]">
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
            Lihat Semua{" "}
            <img
              src="./photo/chevron-right.png"
              alt=""
              className="items-center justify-center w-[14px] h-[14px]"
            />
          </button>
        </div>
        <Artikel />
      </section>
    </>
  );
}

export default index;
