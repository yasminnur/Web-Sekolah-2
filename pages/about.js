import React from "react";
import Keunggulan from "@/components/keunggulan";
import Guru from "@/components/guru";

function about() {
  return (
    <>
      {/* SECTION 1 */}
      <section
        className=" bg-background flex overflow-x-hidden"
        style={{
          backgroundImage: "url(./assets/home/Vector2.png)",
          backgroundSize: "cover",
          overflowY: "auto",
          height: "133vh",
          maxWidth: "full",
        }}
      >
        <div className="pt-[224px] px-[80px] flex w-screen">
          <div className="">
            <div className="w-[601px] h-[276px] flex-col justify-start items-start gap-6 inline-flex">
              <div className="self-stretch h-[204px] flex-col justify-start items-start flex">
                <div className="self-stretch text-white text-5xl font-semibold">
                  Tentang Kami
                </div>
                <div className="text-white text-xl font-normal mt-4">
                  Profil sekolah kami dan beberapa info penting tentang sekolah
                  ini agar anda lebih yakin dan mengerti.
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 -mt-20 hidden lg:flex">
            <img
              src="./assets/about/amico.png"
              className="min-w-[400px] max-h-[600px] max-w-[600px] mx-auto"
              alt=""
            />
          </div>
        </div>
      </section>

      {/* SECTION 2 */}
      <div className="px-20 pt-[39px] pb-[105px] overflow-x-hidden">
        <h3 className="flex text-blue-950 text-2xl font-normal">
          Profil Singkat
        </h3>
        <h1 className="flex text-black text-[56px] font-bold">
          Sekolah Informal{" "}
        </h1>
        <p className="flex text-neutral-700 text-2xl font-normal leading-[42px] text-justify">
          Sekolah Kami merupakan sekolah informal yang dikelola untuk membantu
          anak mengembangkan bakat dan kemampuannya. Dengan memberikan kurikulum
          terbaik agar anak bisa memilih minat nya dan fokus mengembangkan minat
          tersebut. Sekolah ini didirikan sejak tahun 1989 dan terus berkembang
          hingga saat ini. berlokasikan di jl. SoekarnoHatta Blok J No. 245,
          Lowokwaru, Blimbing, Kota Malang. Sejak berdirinya sekolah ini, sudah
          lebih dari 250.000 siswa lulus dari sekolah kami. Dengan menjunjung
          tinggi kejujuran, kedisiplinan dan semangat belajar yang tinggi kami
          berharap bisa terus meghasilkan siswa-siswa lulusan terbaik dari
          sekolah ini.
        </p>
      </div>

      {/* SECTION 3 */}
      <section
        className=" bg-background flex overflow-x-hidden"
        style={{
          backgroundImage: "url(./assets/home/Vector2.png)",
          backgroundSize: "cover",
          overflowY: "auto",
          height: "122vh",
        }}
      >
        <div className="px-[80px] mt-[210px]">
          <h1 className="flex items-center justify-center text-white text-[64px] font-bold mb-[20px]">
            Keunggulan Kami
          </h1>
          <Keunggulan />
        </div>
      </section>

      {/* SECTION 4 */}
      <div className="px-[80px] pt-[51px] pb-[62px] mt-[120px] overflow-x-hidden">
        <div className="w-[1278px] h-36 flex-col justify-start items-start inline-flex mb-[40px]">
          <div className="text-black text-[56px] font-bold">
            Guru {"&"} Staff Sekolah
          </div>
          <div className="self-stretch justify-between items-center inline-flex">
            <div className="text-blue-950 text-2xl font-normal">
              Perkenalan Anggota Sekolah
            </div>
            <div className="px-6 py-3 bg-blue-500 rounded-xl justify-center items-center gap-2.5 flex">
              <div className="text-white text-2xl font-normal">
                Lihat Semua {">"}
              </div>
            </div>
          </div>
        </div>
        <Guru />
      </div>

      {/* SECTION 5 */}
      <section className="flex justify-center pb-[24px] mt-[120px] mb-[120px] overflow-x-hidden">
        <div className="pb-10 flex-col justify-start items-center gap-6 inline-flex mx-auto">
          <div className="self-stretch h-[120px] flex-col justify-center items-center flex">
            <div className="text-black text-[56px] font-bold">Video Profil</div>
            <div className="text-blue-950 text-2xl font-normal">
              Cuplikan Sekolah
            </div>
          </div>
          <div className="p-4 bg-white bg-opacity-60 rounded-3xl border-2 border-blue-400 flex">
            <div className="bg-blue-400 bg-opacity-10 rounded-2xl items-center inline-flex">
              <img src="./assets/about/vidio.png" alt="" className="" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default about;
