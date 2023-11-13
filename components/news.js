import React, { useState, useEffect } from "react";
import data from "../data/news.json";

function news() {
  const [jsonData, setJsonData] = useState([]);

  useEffect(() => {
    setJsonData(data);
  }, []);

    return (
      <>
        <div className="flex flex-wrap lg:justify-start lg:gap-x-[71px] gap-y-[80px] md:justify-center md:px-2">
      {jsonData.map((item, index) => (
        <div className=" lg:w-[400px] md:w-full md:h-full justify-start p-[24px] border-[2px] border-[#4EAAE4] rounded-[24px]">
          <a key={index} href="#" class="group">
            <div className="relative">
              <img src={item.image} alt="" className="mb-10 md:w-full" />
              <span className="lg:absolute sm:bottom-[175px] sm:left-[170px] lg:bottom-[230px] lg:left-[100px] justify-center items-center lg:px-[16px] lg:py-[8px] sm:px-[16px] sm:text-xl lg:text-sm text-white bg-gradient-to-r from-[#4BA3EB] to-[#5DDAAA] rounded-[24px] mx-auto">
                {item.date}
              </span>
              <h1 className="mt-[16px] text-blue-950 text-xl font-bold">{item.title}</h1>
              <p className="mt-[16px] text-justify text-neutral-700 text-base font-normal">
                {item.description}
              </p>
              <p className="text-blue-500 text-base font-semibold mt-[16px]">Baca selengkapnya</p>
            </div>
          </a>
        </div>
      ))}
    </div>
        {/* {jsonData.map((item, index) => (
            <div className=" w-[350px] items-center justify-center px-[24px] py-[24px] border-[2px] border-[#4EAAE4] rounded-[24px]">
            <a key={index} href="#" class="group">
                <div>
                <img src={item.image} alt="" />
            <h1 className="mt-[16px] text-[20px] font-bold">{item.title}</h1>
            <p className="mt-[16px] text-justify text-[16px]">
              {item.description}
                    </p>
                    </div>
            </a>
            </div>
        ))} */}
        </>
  );
}

export default news;
