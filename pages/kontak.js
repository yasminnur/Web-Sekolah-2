import React from "react";

function kontak() {
  return (
    <>
      {/* SECTION 1 */}
      <section
        className=" bg-background flex"
        style={{
          backgroundImage: "url(./assets/home/Vector.png)",
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
                <h1 className=" text-white text-5xl font-semibold">
                  Hubungi Kami
                </h1>
                <p className="text-white text-xl font-normal mt-4">
                  Kontak sekolah kami agar anda dapat terhubung dengan kami
                </p>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2 -mt-20 hidden lg:flex">
            <img
              src="./assets/kontak/amico.png"
              className="min-w-[400px] max-h-[600px] max-w-[600px] mx-auto"
              alt=""
            />
          </div>
        </div>
      </section>

      {/* SECTION 2 */}
      {/* mb-[120px] mt-[120px] bg-yellow-200 */}
      <section className="w-full ">
        {/* <div className="flex-col justify-center items-center flex mb-[64px] ">
          <h3 className="text-blue-950 text-2xl font-normal">
            Dapatkan informasi lebih lengkap
          </h3>
          <h1 className="text-black text-[56px] font-bold">Kontak Kami</h1>
        </div> */}
        <div className="lg:flex md:px-10 sm:px-1 lg:px-[80px]">
          {/* MEDSOS */}
          <div className="lg:w-1/2 flex flex-col gap-y-[64px] ">

            <div className="md:flex items-center">
              <div className="flex mr-[24px] border-blue-600 rounded-[80px] border-2 w-20 h-20 p-4 justify-center items-center">
                <img
                  src="./assets/kontak/phone.png"
                  alt="telephone icon"
                  className="md:w-7 md:h-10"
                />
              </div>
              <div className="flex-col md:justify-start  md:items-start inline-flex p-2 sm:justify-center">
                <p className="text-neutral-700 text-xl sm:text-sm font-medium capitalize leading-10 gap-y-5">
                  (+62) 812 698 15172
                </p>
                <p className="text-neutral-700 text-xl sm:text-sm font-medium capitalize leading-10 ">
                  (0341) 545 987
                </p>
              </div>
            </div>

            <div className="md:flex items-center">
              <div className="flex mr-[24px] border-blue-600 rounded-[80px] border-2 w-20 h-20 p-4 justify-center items-center">
                <img
                  src="./assets/kontak/mail.png"
                  alt="telephone icon"
                  className="md:w-7 md:h-10"
                />
              </div>
              <div className="flex-col justify-start items-start inline-flex p-2">
                <p className="text-neutral-700 text-xl sm:text-sm font-medium capitalize leading-10 gap-y-5">
                  contact@sekolahanak.Com
                </p>
                <p className="text-neutral-700 text-xl sm:text-sm font-medium capitalize leading-10 ">
                  info@sekolah.anak.com
                </p>
              </div>
            </div>

            <div className="md:flex items-center">
              <div className="flex mr-[24px] border-blue-600 rounded-[80px] border-2 w-20 h-20 p-4 justify-center items-center">
                <img
                  src="./assets/kontak/loc.png"
                  alt="telephone icon"
                  className="md:w-7 md:h-10"
                />
              </div>
              <div className="flex-col justify-start items-start inline-flex p-2">
                <p className="text-neutral-700 text-xl sm:text-sm font-medium capitalize leading-10 gap-y-5">
                  jL. Soekarno hatta J-12
                </p>
                <p className="text-neutral-700 text-xl sm:text-sm font-medium capitalize leading-10 ">
                  malang
                </p>
              </div>
            </div>
          </div>

          {/* INPUT */}
          <div className="lg:w-1/2 md:mt-[100px] lg:mt-0 justify-center">
            <form action="">
              <div className="space-y-[40px] lg:ml-[24px]">
                <input
                  type="text"
                  placeholder="Nama Anda*"
                  className="border-2 border-blue-200 p-4 w-full rounded-lg"
                />
                <input
                  type="text"
                  placeholder="Email Anda*"
                  className="border-2 border-blue-200 p-4 w-full rounded-lg"
                />
                <input
                  type="text"
                  placeholder="nomor telepon"
                  className="border-2 border-blue-200 p-4 w-full rounded-lg"
                />
                <textarea
                  type="text"
                  placeholder="Pesan Anda*"
                  className="border-2 border-blue-200 p-4 w-full h-[179px] rounded-lg"
                />
                <button className="w-full bg-blue-500 items-center py-[12px] px-[24px] rounded-lg text-white">
                  Kirim
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default kontak;
