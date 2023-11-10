import React from 'react'

function keunggulan() {
  return (
      <>
      <div className="px-[80px] mt-[250px]">
            <div
              className="grid lg:grid-cols-2 container mx-auto gap-[40px]"
              style={{ placeItems: "center" }}
            >
              <div className="py-[80px] px-[24px] rounded-[12px] max-w-[620px] bg-white border-black border">
                <div className="flex gap-[16px]">
                  <img src="./photo/frame 18.png" alt="" className=""></img>
                  <div className="">
                    <h4 className="font-semibold text-[#1C2661] text-[24px]">
                      Kurikulum Terbaru
                    </h4>
                    <p className="text-justify font-normal text-[#3A3B41] text-[20px]">
                      Menerapkan kurikulum terbaru agar siswa mendapatkan materi
                      terbaru
                    </p>
                  </div>
                </div>
              </div>

              <div className="w-full lg:flex py-[80px] px-[24px] items-center rounded-[12px] max-w-[620px] bg-white border-black border">
                <div className="flex gap-[16px]">
                  <img src="./photo/frame 16.png" alt="" className=""></img>
                  <div>
                    <h4 className="font-semibold text-[#1C2661] text-[24px]">
                      Efektifitas Waktu Belajar
                    </h4>
                    <p className="text-justify font-normal text-[#3A3B41] text-[20px]">
                      Waktu belajar yang dirancang agar para siswa tidak jenuh
                      dan menerima pelajaran
                    </p>
                  </div>
                </div>
              </div>

              <div className="w-full lg:flex py-[80px] px-[24px] items-center rounded-[12px] max-w-[620px] bg-white border-black border">
                <div className="flex gap-[16px]">
                  <img src="./photo/frame 15.png" alt="" className=""></img>
                  <div>
                    <h4 className="font-semibold text-[#1C2661] text-[24px]">
                      Penyaluran Bakat dan Minat
                    </h4>
                    <p className="text-justify font-normal text-[#3A3B41] text-[20px]">
                      Berbagai macam kegitan akademik maupun non akademik untuk
                      mendukung bakat minat
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </>
  )
}

export default keunggulan