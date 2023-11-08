"use client";

import Link from "next/link";
import { BsSearch } from "react-icons/bs";
const HeroSearch = () => {
  return (
    <div>
      <header>
        <div className=" pt-3 flex items-center justify-center px-5 ">
          <div className="flex gap-2 border border-gray-300 rounded-full py-2 mt-5 px-4 shadow-md shadow-gray-300">
            <div>Anywhere</div>
            <div className="border-l border-gray-300"></div>
            <div>Any week</div>
            <div className="border-l border-gray-300"></div>
            <div>Add guests</div>
            <button className=" w-8 h-8 flex items-center justify-center bg-red-500 text-white p-1 rounded-full">
              <BsSearch size={18} />
            </button>
          </div>
        </div>
      </header>
    </div>
  );
};

export default HeroSearch;
