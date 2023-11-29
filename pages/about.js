import React from "react";
import Keunggulan from "@/components/keunggulan";
import Guru from "@/components/guru";

function about() {
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
          <div className="flex flex-wrap px-10 md:px-[50px] pt-[200px]">
            <div className="w-full lg:w-1/2 text-center md:text-start">
              <h1 className="text-white text-4xl md:text-5xl font-semibold leading-10">
                Tentang Kami
              </h1>
              <p className="text-white md:text-xl text-lg mt-4">
                Profil sekolah kami dan beberapa info penting tentang sekolah
                ini agar anda lebih yakin dan mengerti.
              </p>
            </div>
            <div className="w-full lg:w-1/2 ">
              <div className="lg:flex justify-center hidden ml-14 lg:-mt-24">
                <img className="w-[600px]" src="./assets/about/amico.png" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2 */}
      <section className="px-10 md:px-[50px] py-[40px] mb-[120px] mt-20 lg:mt-16">
        <div className="container md:mb-14 lg:mb-0">
          <div className="flex flex-wrap">
            <div className="w-full">
              <h3 className="flex text-blue-950 text-2xl font-normal">
                Profil Singkat
              </h3>
              <h1 className="text-black non-italic text-3xl md:text-4xl font-semibold mb-[16px]">
                Sekolah Informal
              </h1>
              <p className="text-justify font-normal md:text-base text-sm">
                Sekolah Kami merupakan sekolah informal yang dikelola untuk
                membantu anak mengembangkan bakat dan kemampuannya. Dengan
                memberikan kurikulum terbaik agar anak bisa memilih minat nya
                dan fokus mengembangkan minat tersebut. Sekolah ini didirikan
                sejak tahun 1989 dan terus berkembang hingga saat ini.
                berlokasikan di jl. SoekarnoHatta Blok J No. 245, Lowokwaru,
                Blimbing, Kota Malang. Sejak berdirinya sekolah ini, sudah lebih
                dari 250.000 siswa lulus dari sekolah kami. Dengan menjunjung
                tinggi kejujuran, kedisiplinan dan semangat belajar yang tinggi
                kami berharap bisa terus meghasilkan siswa-siswa lulusan terbaik
                dari sekolah ini.
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
            <div className="pt-[80px] md:pt-0 lg:pt-[170px] overflow-hidden">
              <h1
                className="flex items-center justify-center text-[#4BA3EB] lg:text-white text-xl md:text-4xl font-bold mb-[10px]"
                style={{ whiteSpace: "nowrap" }}
              >
                Keunggulan Sekolah Kami
              </h1>
              <Keunggulan />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4 */}
      <section className="px-5 md:px-10 mt-[120px] mb-[120px]">
        <div className="flex flex-col">
          <h1 className="text-black text-3xl md:text-4xl font-semibold mb-2 md:mb-4 flex justify-center md:justify-start non-italic">
            Galeri
          </h1>
          <div className="flex flex-col md:flex-row items-center md:items-center justify-between mb-10 md:mb-4">
            <p className="flex font-normal text-[#1C2661] md:text-base text-sm mb-3 md:mb-0">
              Perkenalan Anggota Sekolah
            </p>
            <button className="flex bg-[#3190DC] text-sm px-[24px] py-[9px] md:mx-0 md:ml-auto rounded-[12px] text-white">
              Lihat Semua {">"}
            </button>
          </div>
          <div className="">
            <Guru />
          </div>
        </div>
      </section>

      {/* SECTION 5 */}
      <section className="px-5 md:px-10 mt-[120px] mb-[120px]">
        <div className="container">
          <div className="flex flex-wrap justify-center">
            <div className="w-full">
              <div className="mb-2 md:mb-5">
                <h1 className="flex justify-center text-black text-3xl md:text-4xl font-bold">
                  Video Profil
                </h1>
                <p className="flex justify-center text-blue-950 text-2xl font-normal">
                  Cuplikan Sekolah
                </p>
              </div>

              <div className="md:p-4 bg-white bg-opacity-60 rounded-3xl md:border-2 border-blue-400 flex h-[200px] md:h-[400px] lg:h-[500px]">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/9xofia597HI"
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default about;
