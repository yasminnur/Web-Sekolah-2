import React, { useState, useEffect } from "react";
import data from "../data/artikel.json";

function artikel() {
  const [jsonData, setJsonData] = useState([]);

  useEffect(() => {
    setJsonData(data); // Menggunakan data dari artikelbaru.json
  }, []);

  return (
    <div className="flex flex-wrap justify-between gap-[40px]">
      {/* CARD 1 */}
      
          {jsonData.map((item, index) => (
            <div className="h-[513px] w-[400px] items-center justify-center p-[24px] border-[2px] border-[#4EAAE4] rounded-[24px]">
            <a key={index} href="#" class="group">
                <div>
            <img src={item.image} alt="" />
            <span className="px-[16px] py-[8px] text-white bg-gradient-to-r from-[#4BA3EB] to-[#5DDAAA] rounded-[24px] mx-auto">
              12 Desember 2021
            </span>
            <h1 className="mt-[16px] text-[20px] font-bold">{item.title}</h1>
            <p className="mt-[16px] text-justify text-[16px]">
              {item.description}
                    </p>
                    </div>
            </a>
            </div>
        ))}
      
    </div>
  );
}

export default artikel;
