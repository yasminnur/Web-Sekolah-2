import data from "../data/galeriPreview.json";
import React, { useState, useEffect } from "react";

function galeriPreview() {
  const [jsonData, setJsonData] = useState([]);

  useEffect(() => {
    setJsonData(data);
  }, []);
  return (
    <>
      <div class="flex flex-wrap gap-16 justify-start md:justify-center">
        {jsonData.map((item, index) => (
          <a key={index} href="#" class="group">
            <div class="justify-center items-center">
              <img
                src={item.image}
                alt=""
                class="self-stretch h-[356px] rounded-3xl w-[290px]"
              />
            </div>
          </a>
        ))}
      </div>
    </>
  );
}

export default galeriPreview;
