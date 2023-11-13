import React from 'react'
import Galeri from '@/components/galeri'


function galeri() {
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
          
        <div className="w-[601px] h-[276px] pt-[224px] px-[80px] flex">
        <div className="h-[156px] left-[80px] top-[219px] absolute flex-col justify-start items-start gap-6 inline-flex">
        <div className="self-stretch h-[156px] flex-col justify-start items-start flex">
            <div className="self-stretch text-white text-[64px] font-semibold">Galeri</div>
            <div className="self-stretch text-white text-xl font-normal">Beberapa hasil dokumentasi area sekolah dan kegiatan siswa di sekolah</div>
        </div>
    </div> 

          <div className="absolute right-[152px]">
          <img src="./assets/galeri/amico.png" className="w-[496px] h-[472px]" alt="" />
          </div>
        </div>
        </section>
            
            {/* SECTION 5 */}
      <section className="px-[79px] py-[40px] mt-[120px] mb-[120px]">
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

                <Galeri />
                </section>
        </>
  )
}

export default galeri