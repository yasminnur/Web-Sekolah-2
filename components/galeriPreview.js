import data from '../data/galeriPreview.json'
import React, { useState, useEffect } from "react";

function galeriPreview() {
    const [jsonData, setJsonData] = useState([]);

  useEffect(() => {
    setJsonData(data); // Menggunakan data dari artikelbaru.json
  }, []);
  return (
    <div class="w-[1278px] justify-start items-start gap-10 inline-flex">
    {jsonData.map((item, index) => (
      <a key={index} href="#" class="group">
        <div class="grow shrink basis-0 flex-col justify-center items-center gap-2 inline-flex">
          <img
            src={item.image}
            alt=""
            class="self-stretch h-[356px] rounded-3xl"
                />
                <div className="self-stretch h-[60px] flex-col justify-start items-center flex">
            <div className="text-blue-950 text-2xl font-semibold font-['Poppins']">{item.name}</div>
            <div className="text-slate-700 text-base font-normal font-['Poppins']">{item.position}</div>
        </div>
        </div>
      </a>
    ))}
    </div>
  )
}

export default galeriPreview