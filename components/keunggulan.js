import data from "../data/keunggulan.json";
import React, { useState, useEffect } from "react";

function keunggulan() {
  const [jsonData, setJsonData] = useState([]);

  useEffect(() => {
    setJsonData(data);
  }, []);
  return (
    <>
      <div className="flex flex-wrap gap-[40px] justify-center">
        {jsonData.map((item, index) => (
          <a key={index} href="#" class="group">
            <div className="py-[80px] md:px-[24px] rounded-[12px] md:w-[620px] bg-white shadow-xl h-fit">
              <div className="md:flex md:gap-[16px] md:pr-5 ">
                <img src={item.image} alt="" className=""></img>
                <div className="">
                  <h4 className="font-semibold text-[#1C2661] text-[24px]">
                    {item.title}
                  </h4>
                  <p className="text-justify font-normal text-[#3A3B41] text-[20px]">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          </a>
        ))}
      </div>
    </>
  );
}

export default keunggulan;
