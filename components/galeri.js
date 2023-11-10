import React, { useState, useEffect } from "react";
import data from "../data/galeri.json";

function galeri() {
  const [jsonData, setJsonData] = useState([]);

  useEffect(() => {
    setJsonData(data); // Menggunakan data dari artikelbaru.json
  }, []);

  return (
    <>
      <div className="flex flex-wrap gap-14">
        {jsonData.map((item, index) => (
          <a key={index} href="#" className="group">
            <div className="relative w-[323px] h-[400px] overflow-hidden rounded-xl my-10">
  <img
    src={item.image}
    alt={item.title}
    className="w-full h-full object-cover object-center"
  />
  <div className="absolute inset-0 bg-gradient-to-t from-blue-500 to-transparent" style={{ height: '10%' }}></div>
  <div className="absolute bottom-0 left-0 p-3 text-white">
    <h2 className="card-title">{item.title}</h2>
    {/* Konten lainnya */}
  </div>
</div>

              
          </a>
        ))}
      </div>
      
    </>
  );
}

export default galeri;
