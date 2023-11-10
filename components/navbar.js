import Link from "next/link";
import React from "react";

export default function navbar() {
  return (
    <>
      <nav className="flex h-[72px] justify-between items-center mx-auto px-[80px] text-[16px] text-black bg-transparent">
          <div className="my-[16px] w-[80px] h-[40px]">
            <img src="./photo/inagata.png" alt="" />
          </div>
            <ul className="flex space-x-7 my-[24px] ">
          <li>
            <Link className="active:font-semibold hover:font-semibold" href="/">Beranda</Link>
          </li>
          <li>
            <Link className="active:font-semibold hover:font-semibold" href="/about">About</Link>
          </li>
          <li>
            <Link className="active:font-semibold hover:font-semibold" href="/galeri">Galeri</Link>
          </li>
          <li>
            <Link className="active:font-semibold hover:font-semibold" href="/news">Artikel</Link>
          </li>
          <li>
            <Link className="active:font-semibold hover:font-semibold" href="/kontak">Kontak</Link>
          </li>
            </ul>
            <button className=" px-[24px] my-[20px] py-[4px] bg-white bg-opacity-25 flex justify-end items-end rounded-[4px] font-semibold">
              PPDB</button>
      </nav>
    </>
  );
}
