import React, { useState, useEffect } from "react";
import data from "../data/galeri.json";

function galeri() {
  const [jsonData, setJsonData] = useState([]);

  useEffect(() => {
    setJsonData(data);
  }, []);

  return (
    <>
      <div className="flex flex-wrap gap-5 justify-center">
        {jsonData.map((item, index) => (
          <a key={index} href="#" className="group">
            <div className="w-[280px] lg:w-[300px] h-[256px] md:w-[330px] rounded-3xl">
              <div
                className="relative grid md:grid-cols-2 mt-10 my-10 w-full h-full rounded-3xl"
                style={{
                  backgroundImage: `url(${item.image})`,
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "cover",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-end",
                }}
              >
                <div
                  className="rounded-3xl"
                  style={{
                    backgroundImage:
                      "linear-gradient(to top, rgba(57, 113, 208, 0.60) 0%, rgba(0, 0, 0, 0) 100%)",
                    padding: "10px",
                    borderRadius: "24px",
                  }}
                >
                  <div className="text-white ">
                    <h2 className="card-title flex items-center justify-center">
                      {item.title}
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </a>
        ))}
      </div>
    </>
  );
}

export default galeri;
