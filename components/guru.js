import data from '../data/guru.json'
import React, { useState, useEffect } from "react";

function guru() {
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
        
//     <div class="flex flex-wrap gap-[40px]">
//     {jsonData.map((item, index) => (
//       <a key={index} href="#" class="group">
//         <div class="">
//           <img
//             src={item.image}
//             alt=""
//             class="h-full w-full object-cover object-center group-hover:opacity-75"
//                 />
//                 <h1>{item.name}</h1>
//                 <p>{item.position}</p>
//         </div>
//       </a>
//     ))}
//   </div>
  )
}

export default guru