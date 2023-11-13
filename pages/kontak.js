import React from 'react'

function kontak() {
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
            <div className="self-stretch text-white text-[64px] font-semibold">Hubungi Kami</div>
            <div className="self-stretch text-white text-xl font-normal">Kontak sekolah kami agar anda dapat terhubung dengan kami</div>
        </div>
    </div> 

          <div className="absolute right-[152px]">
          <img src="./assets/news/amico.png" className="w-[496px] h-[472px]" alt="" />
          </div>
        </div>
      </section>
          
          {/* SECTION 2 */}
          <section className=' px-[120px] mt-16'>
          <div className="w-[1280px] h-[775px] flex-col justify-center items-center gap-16 inline-flex mb-[151px]">
    <div className="flex-col justify-center items-center flex">
        <div className="text-blue-950 text-2xl font-normal">Dapatkan informasi lebih lengkap</div>
        <div className="text-black text-[56px] font-bold">Kontak Kami</div>
    </div>
    <div className="self-stretch justify-start items-start gap-[120px] inline-flex ">
        <div className="flex-col justify-start items-start gap-16 inline-flex">
            <div className="justify-start items-center gap-6 inline-flex">
                              <div className="p-[20px] rounded-[80px] border-2 border-blue-400 justify-center items-start gap-2.5 flex">
                                  <img src="./assets/kontak/telepon1.png" alt="telephone icon" className='w-12 h-12'/>
                </div>
                <div className="flex-col justify-start items-start gap-2 inline-flex">
                    <p className="text-neutral-700 text-2xl font-medium capitalize leading-10">(+62) 812 698 15172</p>
                    <p className="text-neutral-700 text-2xl font-medium capitalize leading-10">(0341) 545 987</p>
                </div>
            </div>
            <div className="justify-start items-center gap-6 inline-flex">
                              <div className="p-5 rounded-[80px] border-2 border-blue-400 justify-center items-start gap-2.5 flex">
                              <img src="./assets/kontak/email1.png" alt="email icon" className='w-12 h-12'/>
                </div>
                <div className="flex-col justify-start items-start gap-2 inline-flex">
                    <p className="text-neutral-700 text-2xl font-medium lowercase leading-10">contact@sekolahanak.Com</p>
                    <p className="text-neutral-700 text-2xl font-medium lowercase leading-10">info@sekolah.anak.com</p>
                </div>
            </div>
            <div className="justify-start items-center gap-6 inline-flex">
                              <div className="p-5 rounded-[80px] border-2 border-blue-400 justify-center items-start gap-2.5 flex">
                              <img src="./assets/kontak/telepon1.png" alt="location icon" className='w-12 h-12'/>
                </div>
                <div className="flex-col justify-start items-start gap-2 inline-flex">
                    <p className="text-neutral-700 text-2xl font-medium capitalize leading-10">jL. Soekarno hatta J-12</p>
                    <p className="text-neutral-700 text-2xl font-medium capitalize leading-10">malang</p>
                </div>
            </div>
        </div>
        <div className="grow shrink basis-0 flex-col justify-center items-end gap-10 inline-flex">
            <div className="self-stretch px-6 py-3 rounded-lg border-2 border-blue-400 justify-start items-start gap-2.5 inline-flex">
                <p className="text-neutral-700 text-opacity-70 text-xl font-normal capitalize leading-10">Nama Anda*</p>
            </div>
            <div className="self-stretch px-6 py-3 rounded-lg border-2 border-blue-400 justify-start items-start gap-2.5 inline-flex">
                <p className="text-neutral-700 text-opacity-70 text-xl font-normal capitalize leading-10">Email Anda*</p>
            </div>
            <div className="self-stretch px-6 py-3 rounded-lg border-2 border-blue-400 justify-start items-start gap-2.5 inline-flex">
                <p className="text-neutral-700 text-opacity-70 text-xl font-normal capitalize leading-10">nomor telepon</p>
            </div>
            <div className="self-stretch h-[179px] px-6 py-3 rounded-lg border-2 border-blue-400 justify-start items-start gap-2.5 inline-flex">
                <p className="text-neutral-700 text-opacity-70 text-xl font-normal capitalize leading-10">Pesan Anda*</p>
            </div>
            <div className="self-stretch px-6 py-3 bg-blue-500 rounded-xl justify-center items-center gap-2.5 inline-flex">
                <button className="text-white text-2xl font-medium">Kirim Pesan</button>
            </div>
        </div>
    </div>
              </div>
              </section>
      </>
  )
}

export default kontak