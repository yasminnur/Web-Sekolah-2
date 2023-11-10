import React from 'react'
import Keunggulan from '@/components/keunggulan'
import Guru from '@/components/guru'
import Navbar from '@/components/navbar'

function about() {
  return (
      <>
          {/* <div className='mx-auto justify-center items-center'> */}
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
            class="absolute right-20 lg:top-[300px]"
            src="./assets/about/amico.png"
          />

          <div className="w-7/12 flex flex-row items-center mb-20 px-[90px]">
            <div className="w-[601px] h-[276px] flex-col justify-start items-start gap-6 inline-flex">
              <div className="self-stretch h-[204px] flex-col justify-start items-start flex">
              <div className="w-[601px] text-white text-[64px] font-semibold font-['Poppins']">Tentang Kami</div>
              <div className="w-[601px] text-white text-xl font-normal font-['Poppins']">Profil sekolah kami dan beberapa info penting tentang sekolah ini agar anda lebih yakin dan mengerti.</div>
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
          <div className="w-[1440px] h-[574px] px-20 pt-[38.46px] pb-[105.54px] justify-center items-center inline-flex">
    <div className="grow shrink basis-0 self-stretch flex-col justify-start items-start gap-2 inline-flex">
        <div className="text-blue-950 text-2xl font-normal font-['Poppins']">Profil Singkat</div>
        <div className="text-black text-[56px] font-bold font-['Poppins']">Sekolah Informal </div>
        <div className="self-stretch text-neutral-700 text-2xl font-normal font-['Poppins'] leading-[42px]">Sekolah Kami merupakan sekolah informal yang dikelola untuk membantu anak mengembangkan bakat dan kemampuannya. Dengan memberikan kurikulum terbaik agar anak bisa memilih minat nya dan fokus mengembangkan minat tersebut. Sekolah ini didirikan sejak tahun 1989 dan terus berkembang hingga saat ini. berlokasikan di jl. SoekarnoHatta Blok J No. 245, Lowokwaru, Blimbing, Kota Malang. Sejak berdirinya sekolah ini, sudah lebih dari 250.000 siswa lulus dari sekolah kami. Dengan menjunjung tinggi kejujuran, kedisiplinan dan semangat belajar yang tinggi kami berharap bisa terus meghasilkan siswa-siswa lulusan terbaik dari sekolah ini.</div>
    </div>
          </div>
          
          {/* SECTION 3 */}
      <div
        className=" bg-background flex "
        style={{
          backgroundImage: "url(/assets/home/Vector2.png)",
          backgroundSize: "cover",
          overflowY: "auto", // Mengizinkan konten digulir jika melebihi tinggi layar
          height: "122vh",
        }}
      >
        <Keunggulan />
          </div>
          
          {/* SECTION 4 */}
          <div className='px-[81px] pt-[50.86px] pb-[62.14px]'>
          <div className="w-[1278px] h-36 flex-col justify-start items-start inline-flex mb-[40px]">
                  <div className="text-black text-[56px] font-bold font-['Poppins']">Guru {'&'} Staff Sekolah</div>
    <div className="self-stretch justify-between items-center inline-flex">
        <div className="text-blue-950 text-2xl font-normal font-['Poppins']">Perkenalan Anggota Sekolah</div>
        <div className="px-6 py-3 bg-blue-500 rounded-xl justify-center items-center gap-2.5 flex">
            <div className="text-white text-2xl font-normal font-['Poppins']">Lihat Semua</div>
            <div className="text-white text-2xl font-black font-['Font Awesome 5 Free']">chevron-right</div>
        </div>
    </div>
              </div>
              <Guru />
          </div>
          
          {/* SECTION 5 */}
          <section className='px-[120px] pb-[24px]'>
          <div className="w-[1280px] h-[814px] px-10 pb-10 flex-col justify-start items-center gap-6 inline-flex mx-auto">
    <div className="self-stretch h-[120px] flex-col justify-center items-center flex">
        <div className="text-black text-[56px] font-bold font-['Poppins']">Video Profil</div>
        <div className="text-blue-950 text-2xl font-normal font-['Poppins']">Cuplikan Sekolah</div>
    </div>
    <div className="w-[1200px] grow shrink basis-0 p-4 bg-white bg-opacity-60 rounded-3xl border-2 border-blue-400 flex-col justify-start items-start gap-4 flex">
                  <div className="bg-blue-400 bg-opacity-10 rounded-2xl justify-start items-center inline-flex">
                  <img src="./assets/about/vidio.png" alt="" className='w-full h-full'/>
            {/* <div className="w-[120px] h-[120px] relative bg-blue-500 rounded-[100px] shadow flex-col justify-start items-start flex" /> */}
                  </div>
                  
    </div>
              </div>
              </section>
              {/* </div> */}
      </>
  )
}

export default about