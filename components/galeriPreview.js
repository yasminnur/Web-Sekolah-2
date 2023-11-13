import data from '../data/galeriPreview.json'
import React, { useState, useEffect } from "react";

function galeriPreview() {
    const [jsonData, setJsonData] = useState([]);

  useEffect(() => {
    setJsonData(data);
  }, []);
  return (
    <>
      {/* <div class="flex flex-wrap grid lg:grid-cols-2 container mx-auto gap-16 "> */}
      <div class="flex flex-wrap gap-16 justify-start md:justify-center">
    {jsonData.map((item, index) => (
      <a key={index} href="#" class="group">
        <div class="justify-center items-center">
          <img
            src={item.image}
            alt=""
            class="self-stretch h-[356px] rounded-3xl w-[290px]"
                />
                {/* <div className="self-stretch h-[60px] flex-col justify-start items-center flex">
            <div className="text-blue-950 text-2xl font-semibold font-['Poppins']">{item.name}</div>
            <div className="text-slate-700 text-base font-normal font-['Poppins']">{item.position}</div>
        </div> */}
        </div>
      </a>
    ))}
      </div>
      </>
  )
}

export default galeriPreview