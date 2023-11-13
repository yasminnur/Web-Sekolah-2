import React, { useState, useEffect } from "react";
import data from "../data/news_detail.json";

function news_detail() {
    const [jsonData, setJsonData] = useState([]);

  useEffect(() => {
    setJsonData(data);
  }, []);
  return (
      <>
      {jsonData.map((item, index) => (
            <div className="items-center justify-center p-[24px]">
            <a key={index} href="#" class="group">
                <div>
            <img src={item.image} alt="" className="w-[1280px] h-[688px] rounded-3xl"/>
            <span className="px-[16px] py-[8px] text-white bg-gradient-to-r from-[#4BA3EB] to-[#5DDAAA] rounded-[24px] mx-auto">
              12 Desember 2021
            </span>
                      <h1 className="mt-[16px] text-[20px] font-bold">{item.title}</h1>
                      <p className="mt-[16px] text-justify text-[16px]">
              {item.writer}</p>
            <p className="mt-[16px] text-justify text-[16px]">
              {item.description}
                    </p>
                    </div>
            </a>
            </div>
        ))}</>
  )
}

export default news_detail