import React from "react";

function kontak() {
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
          <div className="flex flex-wrap px-5 md:px-10 pt-[200px]">
            <div className="w-full lg:w-1/2 text-center md:text-start">
              <h1 className="text-white text-3xl md:text-4xl font-semibold leading-10">
                Hubungi Kami
              </h1>
              <p className="text-white md:text-base text-sm mt-4">
                Kontak sekolah kami agar anda dapat terhubung dengan kami
              </p>
            </div>
            <div className="w-full lg:w-1/2">
              <div className="lg:flex justify-center hidden ml-14 lg:-mt-20">
                <img className="w-[500px]" src="./assets/kontak/amico.png" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 2 */}
      <section className="px-5 md:px-10 mt-[120px]">
        <div className="container">
          <div className="mb-14">
            <h3 className="flex justify-center text-blue-950 text-sm md:text-xl font-normal">
              Dapatkan informasi lebih lengkap
            </h3>
            <h1 className="flex justify-center text-black text-3xl md:text-4xl font-bold">
              Kontak Kami
            </h1>
          </div>
          <div className="lg:flex">
            <div className="w-full lg:w-1/2">
              {/* 1 */}
              <div className="flex items-center mb-10">
                <div className="flex items-center justify-center mr-4 w-[60px] h-[60px] p-4 rounded-full border border-blue-600">
                  <img
                    src="./assets/kontak/phone.png"
                    alt="telephone icon"
                    className=""
                  />
                </div>
                <div className="">
                  <p className="text-neutral-700 md:text-xl text-sm font-medium capitalize">
                    (+62) 812 698 15172
                  </p>
                  <p className="text-neutral-700 md:text-xl text-sm font-medium capitalize">
                    (0341) 545 987
                  </p>
                </div>
              </div>
              {/* 2 */}
              <div className="flex items-center mb-10">
                <div className="flex items-center justify-center mr-4 w-[60px] h-[60px] p-4 rounded-full border border-blue-600">
                  <img
                    src="./assets/kontak/mail.png"
                    alt="mail icon"
                    className=""
                  />
                </div>
                <div className="">
                  <p className="text-neutral-700 md:text-xl text-sm font-medium capitalize">
                    contact@sekolahanak.Com
                  </p>
                  <p className="text-neutral-700 md:text-xl text-sm font-medium capitalize">
                    info@sekolah.anak.com
                  </p>
                </div>
              </div>
              {/* 3 */}
              <div className="flex items-center mb-10">
                <div className="flex items-center justify-center mr-4 w-[60px] h-[60px] p-5 rounded-full border border-blue-600">
                  <img
                    src="./assets/kontak/loc.png"
                    alt="location icon"
                    className=""
                  />
                </div>
                <div className="">
                  <p className="text-neutral-700 md:text-xl text-sm font-medium capitalize">
                    jL. Soekarno hatta J-12
                  </p>
                  <p className="text-neutral-700 md:text-xl text-sm font-medium capitalize">
                    malang
                  </p>
                </div>
              </div>
            </div>

            <div className="w-full lg:w-1/2">
              <div className="">
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
          </div>
        </div>
      </section>
    </>
  );
}

export default kontak;
