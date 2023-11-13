import React from "react";
import News from "@/components/news";

function news() {
  return (
    <>
      {/* SECTION 1 */}
      <section
        className=" bg-background flex "
        style={{
          backgroundImage: "url(assets/home/vector.png)",
          backgroundSize: "cover",
          overflowY: "auto",
          height: "133vh",
        }}
      >
        {/* Bagian Tulisan */}
        <div className="w-[601px] h-[276px] pt-[224px] px-[80px] flex">
          <div className="h-[156px] left-[80px] top-[219px] absolute flex-col justify-start items-start gap-6 inline-flex">
            <div className="self-stretch h-[156px] flex-col justify-start items-start flex">
              <div className="self-stretch text-white text-[64px] font-semibold">
                Artikel
              </div>
              <div className="self-stretch text-white text-xl font-normal">
                Beberapa berita, informasi kegiatan sekolah dan artikel
                pendidikan lainnya.
              </div>
            </div>
          </div>
          {/* Bagian Ilustrasi */}
          <div className="absolute right-[152px]">
            <img
              src="./assets/news/amico.png"
              className="w-[496px] h-[472px]"
              alt=""
            />
          </div>
        </div>
      </section>


      {/* SECTION 2 */}
      <section className="px-[80px] py-[40px] mt-[120px] mb-[120px]">
        {/* Bagian nav */}
        <div className="flex items-center mb-[40px] justify-center">
          <ul className="flex text-[#404040] font-normal gap-[40px] text-[24px]">
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

        {/* Bagian news utama */}
        <div className="flex p-[24px] gap-x-[24px] w-full h-[526px] rounded-3xl border-2 border-blue-400 ">
          <div className="flex">
            <img
              className="rounded-3xl w-[604px] h-[478px]"
              src="./assets/home/kelas.png"
            />
          </div>
          <div className="w-1/2 gap-y-[8px]">
            <p className="w-[172px] px-[20px] py-[8px] sm:text-xl lg:text-sm text-white bg-gradient-to-r from-[#4BA3EB] to-[#5DDAAA] rounded-[24px]">
              12 Desember 2021
            </p>
            <h1 className="text-blue-950 text-[32px] font-bold">
              Gotong Royong di Sekolah, Bantu Anak Segera Kembali ke Sekolah
            </h1>
            <p className="text-justify text-neutral-700 text-xl font-normal">
              Jika anak kita ditanya apa mimpinya pasti jawabnya saya ingin
              kembali belajar di sekolah. Saya ingin bertemu dengan teman-teman
              sekelas saya. begitupun sebagian besar orang tua, mimpi mereka
              adalah melihat anaknya kembali ke aktivitas sekolah secara
              langsung. Orang tua selama ini banyak yang mengaku lelah karena
              anak-anaknya selama pandemi lebih banyak menghabiskan waktu di. .
              .{" "}
            </p>
            <p className="text-justify text-neutral-700 text-base font-normal mt-2">
              Penulis : Shinta A.P
            </p>
            <a href="/news_detail" className="text-blue-500 text-xl font-semibold mt-24">
              Baca selengkapnya
            </a>
          </div>
        </div>

        {/* menampilkan data news */}
        <div className="mt-[40px]">
          <News />
        </div>

        {/* menampilkan 10 dari */}
        <div className="w-[1282px] h-8 justify-between items-center inline-flex mt-10">
          <div className="text-neutral-700 text-[21px] font-normal">
            Menampilkan 10 Dari 21 Data
          </div>
          <div className="justify-start items-center gap-6 flex">
            <div className="text-neutral-700 text-[21px] font-normal">
              Halaman
            </div>
            <div className="justify-center items-center gap-2 flex">
              <div className="w-6 h-6 relative" />
              <div className="justify-start items-start gap-2 flex">
                <img src="./assets/news/chevron-left.png" alt="" />
                <div className="px-2 flex-col justify-start items-start gap-2.5 inline-flex">
                  <div className="text-blue-500 text-[21px] font-medium underline">
                    1
                  </div>
                </div>
                <div className="px-2 flex-col justify-start items-start gap-2.5 inline-flex">
                  <div className="text-neutral-700 text-[21px] font-normal">
                    2
                  </div>
                </div>
                <div className="px-2 flex-col justify-start items-start gap-2.5 inline-flex">
                  <div className="text-neutral-700 text-[21px] font-normal">
                    3
                  </div>
                </div>
                <img src="./assets/news/chevron-right.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  );
}

export default news;
