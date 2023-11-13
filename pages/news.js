import React from "react";
import News from "@/components/news";
import Link from "next/link";

function news() {
  return (
    <>
      {/* SECTION 1 */}
      <section
        className=" bg-background flex"
        style={{
          backgroundImage: "url(./assets/home/vector.png)",
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
                <h1 className=" text-white text-5xl font-semibold">Artikel</h1>
                <p className="text-white text-xl font-normal mt-4">
                  Beberapa berita, informasi kegiatan sekolah dan artikel
                  pendidikan lainnya.
                </p>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 -mt-20 hidden lg:flex">
            <img
              src="./assets/news/amico.png"
              className="min-w-[400px] max-h-[600px] max-w-[600px] mx-auto"
              alt=""
            />
          </div>
        </div>
      </section>

      {/* SECTION 2 */}
      <section className="px-[80px] py-[40px] mt-[120px] mb-[120px]">
        {/* Bagian nav */}
        <div className="lg:flex items-center mb-[40px] justify-center">
          <ul className="lg:flex text-[#404040] font-normal gap-[40px] text-[24px]">
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
        <div className="flex justify-center items-center ">
          <div className="lg:flex p-[24px] gap-x-[24px] rounded-3xl border-2 border-blue-400 ">
            <div className="lg:flex">
              <img
                className="rounded-3xl lg:w-[604px] lg:h-[478px]"
                src="./assets/home/kelas.png"
              />
            </div>
            <div className="lg:w-1/2">
              <button className="mt-[24px] px-[20px] py-[8px] sm:text-xl lg:text-sm text-white bg-gradient-to-r from-[#4BA3EB] to-[#5DDAAA] rounded-[24px]">
                12 Desember 2021
              </button>
              <h1 className="text-blue-950 text-[32px] font-bold">
                Gotong Royong di Sekolah, Bantu Anak Segera Kembali ke Sekolah
              </h1>
              <p className="text-justify text-neutral-700 text-xl font-normal">
                Jika anak kita ditanya apa mimpinya pasti jawabnya saya ingin
                kembali belajar di sekolah. Saya ingin bertemu dengan
                teman-teman sekelas saya. begitupun sebagian besar orang tua,
                mimpi mereka adalah melihat anaknya kembali ke aktivitas sekolah
                secara langsung. Orang tua selama ini banyak yang mengaku lelah
                karena anak-anaknya selama pandemi lebih banyak menghabiskan
                waktu di. . .
              </p>
              <p className="text-justify text-neutral-700 text-base font-normal mt-2 mb-[80px]">
                Penulis : Shinta A.P
              </p>
              <Link
                href="/news_detail"
                className="text-blue-500 text-xl font-semibold"
              >
                Baca selengkapnya
              </Link>
            </div>
          </div>
        </div>

        {/* menampilkan data news */}
        <div className="mt-[80px]">
          <News />
        </div>

        {/* menampilkan 10 dari */}
        <div className="h-8 justify-between items-center lg:flex mt-10">
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
