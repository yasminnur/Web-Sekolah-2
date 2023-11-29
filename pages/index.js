import React from "react";
import Keunggulan from "@/components/keunggulan";
import GaleriPrev from "@/components/galeriPreview";
import Artikel from "@/components/artikel";
import Link from "next/link";

function index() {
  return (
    <>
      {/* SECTION 1 */}
      <section>
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
          <div className="flex flex-wrap px-14 pt-[100px]">
            <div className="w-full lg:w-1/2 text-center md:text-start">
              <h1 className="text-white text-3xl md:text-4xl font-semibold leading-10">
                Tuntut Ilmu Untuk Masa Depan Yang Lebih Baik
              </h1>
              <p className="text-white md:text-base text-sm mt-4">
                jelajahi semua pengetahuan dan ilmu yang berguna bersama kami,
                untuk kehidupan yang lebih bermanfaat
              </p>
              <button className="block bg-white text-emerald-300 px-5 py-3 mt-5 rounded-xl text-primary font font-semibold lg:text-sm">
                Daftar Sekarang
              </button>
            </div>
            <div className="w-full lg:w-1/2 ">
              <div className="lg:flex justify-center hidden ml-14">
                <img className="w-[500px]" src="./assets/home/home.png" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2 */}
      <section className="mt-28 md:mt-32 md:my-8 lg:mt-28 lg:my-0">
        <div className="container md:mb-14 lg:mb-0">
          <div className="flex flex-wrap px-14">
            <div className="w-full lg:w-1/2">
              <div className="lg:flex justify-center hidden self-start mr-[80px] lg:-mt-14">
                <img
                  src="./assets/home/study.png"
                  alt=""
                  className="w-[300px]"
                ></img>
              </div>
            </div>
            <div className="w-full lg:w-1/2">
              <h1
                className="text-black non-italic text-3xl md:text-4xl font-semibold mb-[16px]"
                style={{ whiteSpace: "nowrap" }}
              >
                Tentang Kami
              </h1>
              <p className="text-justify font-normal md:text-base text-sm max-w-[779px]">
                Sekolah Kami merupakan sekolah informal yang dikelola untuk
                membantu anak mengembangkan bakat dan kemampuannya. Dengan
                memberikan kurikulum terbaik agar anak bisa memilih minat nya
                dan fokus mengembangkan minat tersebut. Sekolah ini didirikan
                sejak tahun 1989 dan terus berkembang hingga saat ini.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3 */}
      <section className="">
        <div className="container ">
          <div
            className="bg-background flex"
            style={{
              backgroundImage: "url(./assets/home/Vector2.png)",
              backgroundSize: "cover",
              backgroundPosition: "center",
              overflowY: "auto",
              height: "110vh",
              width: "100%",
            }}
          >
            <div className="pt-[80px] md:pt-16 lg:pt-[200px] overflow-hidden">
              <Keunggulan />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4 */}
      <section className="px-10 md:px-[50px] py-[40px] mt-[120px] mb-[120px]">
        <div className="container">
          <div className="flex flex-col">
            <div className="">
              <h1 className="text-black text-3xl md:text-4xl font-semibold mb-4 flex justify-center md:justify-start non-italic">
                Galeri
              </h1>
              <div className="flex flex-col md:flex-row items-center md:items-center justify-between mb-4">
                <p className="flex font-normal text-[#1C2661] md:text-base text-sm mb-3 md:mb-0">
                  Dokumentasi Sekolah kami
                </p>
                <button className="flex bg-[#3190DC] text-sm px-[24px] py-[9px] md:mx-0 md:ml-auto rounded-[12px] text-white">
                  Lihat Semua {">"}
                </button>
              </div>
            </div>
            <div className="">
              <GaleriPrev />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5 */}
      <section className="px-10 md:px-[50px] py-[40px] mt-[120px] mb-[120px]">
        <h1 className="flex justify-center md:justify-start text-3xl md:text-4xl font-semibold pb-[12px]">
          Artikel
        </h1>
        <div className="md:flex justify-between mb-[40px]">
          <div className="mb-2 md:mb-0">
            <ul className="md:flex text-[#404040] font-normal text-[24px] gap-6">
              <li>
                <div className="mx-auto hover:border-b-2 hover:border-[#3190DC] active:border-b-2 active:border-[#3190DC]">
                  <a
                    href="#"
                    className="text-neutral-700 text-lg md:text-xl tracking-wide active:font-semibold hover:font-semibold"
                  >
                    Semua
                  </a>
                </div>
              </li>
              <li>
                <div className="mx-auto hover:border-b-2 hover:border-[#3190DC] active:border-b-2 active:border-[#3190DC]">
                  <a
                    href="#"
                    className="text-neutral-700 text-lg md:text-xl tracking-wide active:font-semibold hover:font-semibold"
                  >
                    Berita
                  </a>
                </div>
              </li>
              <li>
                <div className="mx-auto hover:border-b-2 hover:border-[#3190DC] active:border-b-2 active:border-[#3190DC]">
                  <a
                    href="#"
                    className="text-neutral-700 text-lg md:text-xl tracking-wide active:font-semibold hover:font-semibold"
                    style={{ whiteSpace: "nowrap" }}
                  >
                    Kegiatan Sekolah
                  </a>
                </div>
              </li>
              <li></li>
            </ul>
          </div>
          <div>
            <Link href="/news" className="text-blue-500 text-lg">
              Lihat Semua {">"}
            </Link>
          </div>
        </div>
        <Artikel />
      </section>
    </>
  );
}

export default index;
