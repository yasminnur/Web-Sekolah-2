import React, { useState, useEffect } from "react";
import data from "../data/artikel.json";

function artikel() {
  const [jsonData, setJsonData] = useState([]);

  useEffect(() => {
    setJsonData(data);
  }, []);

  return (
    <div className="flex flex-wrap justify-start gap-6">
    {jsonData.map((item, index) => (
      <div key={index} className="lg:w-[290px] md:w-[320px] p-[15px] border-[2px] border-[#4EAAE4] rounded-[24px] relative">
        <a href="#" className="group">
          <div className="relative mb-6">
            <img src={item.image} alt="" className="w-full h-full object-cover rounded-[24px]" />
            <span className="absolute font-normal p-2 text-xs left-1/2 transform -translate-x-1/2 -bottom-4 bg-gradient-to-r from-[#4BA3EB] to-[#5DDAAA] rounded-[24px] text-white" style={{ whiteSpace: 'nowrap' }}>
              {item.date}
            </span>
          </div>
          <h1 className="text-[#1C2661] md:text-xl text-sm font-bold">{item.title}</h1>
          <p className="mt-2 text-justify md:text-sm text-xs">
            {item.description}
          </p>
        </a>
      </div>
    ))}
  </div>
  );
}

export default artikel;
