import data from "../data/guru.json";
import React, { useState, useEffect } from "react";

function guru() {
  const [jsonData, setJsonData] = useState([]);

  useEffect(() => {
    setJsonData(data);
  }, []);

  return (
    <div class="justify-center md:justify-start md:items-start lg:gap-7 md:gap-5 flex flex-wrap">
      {jsonData.map((item, index) => (
        <a key={index} href="#" class="group">
          <div class="grow shrink basis-0 flex-col justify-center items-center mb-6 md:mb-0 inline-flex">
            <div className="w-[215px]">
            <img
              src={item.image}
              alt=""
              className="rounded-3xl h-full w-full object-cover"
              />
              </div>
            <div className="h-[60px] flex-col justify-start items-center flex">
              <div className="text-blue-950 text-lg lg:text-2xl font-semibold">
                {item.name}
              </div>
              <div className="text-slate-700 text-base font-normal font-['Poppins']">
                {item.position}
              </div>
            </div>
          </div>
        </a>
      ))}
    </div>
  );
}

export default guru;
