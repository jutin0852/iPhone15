import React from "react";
import { appleImg, bagImg, searchImg } from "../utils";
import { navLists } from "../constants";

export default function Navbar() {
  return (
    <header className="px-10 py-7 flex justify-between">
      <img src={appleImg} alt="apple" height={18} width={18}/>
      <nav className="flex ">
        {navLists.map((nav) => (
          <li
            className=" list-none mx-6 max-md:hidden text-gray-300 text-sm hover:text-white transition-all cursor-pointer"
            key={nav}
          >
            {nav}
          </li>
        ))}
      </nav>
      <div className=" flex gap-5">
        <img src={searchImg} alt="search" height={18} width={18} />
        <img src={bagImg} alt="bag" height={18} width={18} />
      </div>
    </header>
  );
}
