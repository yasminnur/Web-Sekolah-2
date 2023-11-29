import React, { useState, useEffect } from "react";
import data from "../data/news.json";

function news() {
  const [jsonData, setJsonData] = useState([]);

  useEffect(() => {
    setJsonData(data);
  }, []);

  return (
    <>
      <div className="flex flex-wrap justify-start gap-6">
        {jsonData.map((item, index) => (
          <div
            key={index}
            className="lg:w-[298px] md:w-[331px] p-[15px] border-[2px] border-[#4EAAE4] rounded-[24px] relative"
          >
            <a href="#" className="group">
              <div className="relative mb-6">
                <img
                  src={item.image}
                  alt=""
                  className="w-full h-full object-cover rounded-[24px]"
                />
                <span
                  className="absolute font-normal px-6 lg:px-4 py-2 text-sm lg:text-xs left-1/2 transform -translate-x-1/2 -bottom-4 bg-gradient-to-r from-[#4BA3EB] to-[#5DDAAA] rounded-[24px] text-white"
                  style={{ whiteSpace: "nowrap" }}
                >
                  {item.date}
                </span>
              </div>
              <h1 className="text-blue-950 md:text-xl text-sm font-bold">
                {item.title}
              </h1>
              <p className="mt-2 text-justify md:text-sm text-xs">
                {item.description}
              </p>
              <p className="text-blue-500 text-base font-semibold mt-[16px]">
                Baca selengkapnya
              </p>
            </a>
          </div>
        ))}
      </div>
    </>
  );
}

export default news;
