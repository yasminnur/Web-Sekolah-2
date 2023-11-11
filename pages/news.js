import React from "react";
import News from "@/components/news";

function news() {
  return (
    <>
      {/* SECTION 1 */}
      <div className="bg-white">
        <main
          className=" bg-background flex "
          style={{
            backgroundImage: "url(/assets/home/Vector.png)",
            backgroundSize: "cover",
            overflowY: "auto", // Mengizinkan konten digulir jika melebihi tinggi layar
            height: "122vh",
          }}
        >
          <img
            class="absolute right-20 lg:top-[300px] w-16 h-16"
            src="./assets/news/amico.png"
          />

          <div className="w-7/12 flex flex-row items-center mb-20 px-[90px]">
            <div className="w-[510px] h-[156px] flex-col justify-start items-start gap-6 inline-flex">
              <div className="self-stretch h-[156px] flex-col justify-start items-start flex">
                <div className="self-stretch text-white text-[64px] font-semibold font-['Poppins']">
                  Artikel
                </div>
                <div className="self-stretch text-white text-xl font-normal font-['Poppins']">
                  Beberapa berita, informasi kegiatan sekolah dan artikel
                  pendidikan lainnya.
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>

      {/* SECTION 5 */}
      <section className="px-[79px] py-[40px] mt-[120px]">
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
              
              {/* <div className="w-[1280px] h-[526px] p-6 rounded-3xl border-2 border-blue-400 justify-start items-start gap-6 inline-flex">
    <img className="grow shrink basis-0 self-stretch rounded-3xl" src="./assets/home/kelas.png" />
    <div className="grow shrink basis-0 flex-col justify-center items-start gap-6 inline-flex">
        <div className="self-stretch h-[424px] flex-col justify-start items-start gap-2 flex">
            <div className="px-4 py-2 bg-gradient-to-r from-blue-400 to-emerald-300 rounded-3xl justify-start items-start gap-2.5 inline-flex">
                <div className="text-white text-base font-normal font-['Poppins']">12 Desember 2021</div>
            </div>
            <div className="self-stretch text-blue-950 text-[32px] font-bold font-['Poppins']">Gotong Royong di Sekolah, Bantu Anak Segera Kembali ke Sekolah</div>
            <div className="self-stretch text-justify text-neutral-700 text-xl font-normal font-['Poppins']">Jika anak kita ditanya apa mimpinya pasti jawabnya saya ingin kembali belajar di sekolah. Saya ingin bertemu dengan teman-teman sekelas saya. begitupun sebagian besar orang tua, mimpi mereka adalah melihat anaknya kembali ke aktivitas sekolah secara langsung. Orang tua selama ini banyak yang mengaku lelah karena anak-anaknya selama pandemi lebih banyak menghabiskan waktu di. . . </div>
            <div className="self-stretch text-justify text-neutral-700 text-base font-normal font-['Poppins']">Penulis : Shinta A.P</div>
        </div>
        <div className="self-stretch text-blue-500 text-xl font-semibold font-['Poppins']">Baca selengkapnya</div>
    </div>
              </div> */}

              <div className="flex flex-wrap justify-between gap-y-[80px] gap-x-[40px]">
              <div className="w-[1280px] h-[526px] p-6 rounded-3xl border-2 border-blue-400 justify-start items-start gap-6 inline-flex">
    <img className="grow shrink basis-0 self-stretch rounded-3xl" src="./assets/home/kelas.png" />
    <div className="grow shrink basis-0 flex-col justify-center items-start gap-6 inline-flex">
        <div className="self-stretch h-[424px] flex-col justify-start items-start gap-2 flex">
            <div className="px-4 py-2 bg-gradient-to-r from-blue-400 to-emerald-300 rounded-3xl justify-start items-start gap-2.5 inline-flex">
                <div className="text-white text-base font-normal font-['Poppins']">12 Desember 2021</div>
            </div>
            <div className="self-stretch text-blue-950 text-[32px] font-bold font-['Poppins']">Gotong Royong di Sekolah, Bantu Anak Segera Kembali ke Sekolah</div>
            <div className="self-stretch text-justify text-neutral-700 text-xl font-normal font-['Poppins']">Jika anak kita ditanya apa mimpinya pasti jawabnya saya ingin kembali belajar di sekolah. Saya ingin bertemu dengan teman-teman sekelas saya. begitupun sebagian besar orang tua, mimpi mereka adalah melihat anaknya kembali ke aktivitas sekolah secara langsung. Orang tua selama ini banyak yang mengaku lelah karena anak-anaknya selama pandemi lebih banyak menghabiskan waktu di. . . </div>
            <div className="self-stretch text-justify text-neutral-700 text-base font-normal font-['Poppins']">Penulis : Shinta A.P</div>
        </div>
        <div className="self-stretch text-blue-500 text-xl font-semibold font-['Poppins']">Baca selengkapnya</div>
    </div>
          </div>
          <div className="gap-[30px] flex flex-wrap">
            <News />
            </div>

                  <div className="w-[1282px] h-8 justify-between items-center inline-flex">
    <div className="text-neutral-700 text-[21px] font-normal font-['Poppins']">Menampilkan 10 Dari 21 Data</div>
    <div className="justify-start items-center gap-6 flex">
        <div className="text-neutral-700 text-[21px] font-normal font-['Poppins']">Halaman</div>
        <div className="justify-center items-center gap-2 flex">
            <div className="w-6 h-6 relative" />
                              <div className="justify-start items-start gap-2 flex">
                                  <img src="./assets/news/chevron-left.png" alt="" />
                <div className="px-2 flex-col justify-start items-start gap-2.5 inline-flex">
                    <div className="text-blue-500 text-[21px] font-medium font-['Poppins'] underline">1</div>
                </div>
                <div className="px-2 flex-col justify-start items-start gap-2.5 inline-flex">
                    <div className="text-neutral-700 text-[21px] font-normal font-['Poppins']">2</div>
                </div>
                <div className="px-2 flex-col justify-start items-start gap-2.5 inline-flex">
                    <div className="text-neutral-700 text-[21px] font-normal font-['Poppins']">3</div>
                                  </div>
                                  <img src="./assets/news/chevron-right.png" alt="" />
            </div>
            <div className="w-6 h-6 relative" />
        </div>
    </div>
</div>
                  </div>
          </section>
    </>
  );
}

export default news;
