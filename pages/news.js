import React from "react";
import News from "@/components/news";
import Link from "next/link";

function news() {
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
                Artikel
              </h1>
              <p className="text-white md:text-xl text-lg mt-4">
                Beberapa berita, informasi kegiatan sekolah dan artikel
                pendidikan lainnya.
              </p>
            </div>
            <div className="w-full lg:w-1/2">
              <div className="lg:flex justify-center hidden ml-14 lg:-mt-20">
                <img className="w-[500px]" src="./assets/news/amico.png" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2 */}
      <section className="px-5 md:px-10 mt-14 md:mt-[120px]">
      <div className="container">
            {/* Nav  */}
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

              <div className="flex flex-wrap p-4 rounded-3xl border-2 border-blue-400">
                <div className="w-full lg:w-1/2 lg:pr-2">
                    <img
                      className="rounded-3xl w-full lg:h-full"
                      src="./assets/news/kelas.png"
                    />
                </div>
                <div className="w-full lg:w-1/2 lg:pl-2">
                  <div className="mt-7 lg:mt-0">
                    <button className="px-5 py-2 lg:px-[20px] lg:py-[8px] text-sm mb-[8px] text-white bg-gradient-to-r from-[#4BA3EB] to-[#5DDAAA] rounded-[24px]">
                      12 Desember 2021
                    </button>
                    <h1 className="text-blue-950 text-xl font-bold mb-[8px]">
                      Gotong Royong di Sekolah, Bantu Anak Segera Kembali ke
                      Sekolah
                    </h1>
                    <p className="text-justify text-neutral-700 md:text-base text-sm mb-[8px]">
                      Jika anak kita ditanya apa mimpinya pasti jawabnya saya
                      ingin kembali belajar di sekolah. Saya ingin bertemu
                      dengan teman-teman sekelas saya. begitupun sebagian besar
                      orang tua, mimpi mereka adalah melihat anaknya kembali ke
                      aktivitas sekolah secara langsung. Orang tua selama ini
                      banyak yang mengaku lelah karena anak-anaknya selama
                      pandemi lebih banyak menghabiskan waktu di. . .
                    </p>
                    <p className="text-justify text-neutral-700 text-sm font-normal mb-[24px]">
                      Penulis : Shinta A.P
                    </p>
                    <Link
                      href="/news_detail"
                      className="text-blue-500 text-lg font-semibold"
                    >
                      Baca selengkapnya
                    </Link>
                  </div>
                </div>
            </div>
        </div>
      </section>
      
      {/* SECTION 3 */}
      <section className="px-5 md:px-10 mt-6 lg:mt-[80px] mb-[120px]">
        <div className="container">
          <div className="flex flex-wrap ">
            <div className="w-full">
              <div className="">
                <News />
              </div>

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
          </div>
        </div>
      </section>
    </>
  );
}

export default news;
