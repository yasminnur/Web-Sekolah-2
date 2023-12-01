import data from "../data/keunggulan.json";
import React, { useState, useEffect } from "react";

function keunggulan() {
  const [jsonData, setJsonData] = useState([]);

  useEffect(() => {
    setJsonData(data);
  }, []);
  return (
    <>
      <div className="justify-center flex flex-wrap px-[24px] lg:gap-[40px]">
        <div className="lg:flex lg:gap-[40px]">
          <div className="w-full lg:w-1/2 bg-white px-[24px] py-[50px] rounded-xl shadow-lg mb-7 lg:mb-0">
            <div className="inline-flex items-center">
              <div className="hidden md:flex lg:mr-[16px] lg:w-[200px] mr-7">
                <img
                  src="../assets/home/frame 18.png"
                  alt=""
                  className="w-full h-full"
                />
              </div>
              <div>
                <h1 className="text-blue-950 text-lg md:text-2xl font-semibold mb-[8px]">
                  Kurikulum Terbaru
                </h1>
                <p className="text-neutral-700 text-sm md:text-xl font-normal">
                  Menerapkan kurikulum terbaru agar siswa mendapatkan materi
                  terbaru
                </p>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2 bg-white px-[24px] py-[50px] rounded-xl shadow-lg mb-7 lg:mb-0">
            <div className="inline-flex items-center">
              <div className="hidden md:flex lg:mr-[16px] lg:w-[200px] mr-7">
                <img
                  src="../assets/home/frame 16.png"
                  alt=""
                  className="w-full h-full"
                />
              </div>
              <div>
                <h1 className="text-blue-950 text-lg md:text-2xl font-semibold mb-[8px]">
                  Efektifitas Waktu Belajar
                </h1>
                <p className="text-neutral-700 text-sm md:text-xl font-normal">
                  Waktu belajar yang dirancang agar para siswa tidak jenuh dan
                  menerima pelajaran
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/2 bg-white px-[24px] py-[50px] rounded-xl shadow-lg mb-7 lg:mb-0">
          <div className="inline-flex items-center">
            <div className="hidden md:flex lg:mr-[16px] lg:w-[200px] mr-7">
              <img
                src="../assets/home/Frame 15.png"
                alt=""
                className="w-full h-full"
              />
            </div>
            <div>
              <h1 className="text-blue-950 text-lg md:text-2xl font-semibold mb-[8px]">
                Penyaluran Bakat dan Minat
              </h1>
              <p className="text-neutral-700 text-sm md:text-xl font-normal">
                Berbagai macam kegitan akademik maupun non akademik untuk
                mendukung bakat minat
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default keunggulan;
