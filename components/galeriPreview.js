import data from "../data/galeriPreview.json";
import React, { useState, useEffect } from "react";

function galeriPreview() {
  const [jsonData, setJsonData] = useState([]);

  useEffect(() => {
    setJsonData(data);
  }, []);
  return (
    <>
      <div className="flex flex-wrap gap-5 lg:gap-10 justify-center lg:justify-center lg:items-center md:justify-start">
        {jsonData.map((item, index) => (
          <a key={index} href="#" className="group">
            <div className="h-[300px] rounded-3xl w-full md:w-[209px] lg:w-[200px] ">
              <img
                src={item.image}
                alt=""
                className="w-full h-full object-cover rounded-3xl"
              />
            </div>
          </a>
        ))}
      </div>
    </>
  );
}

export default galeriPreview;
