"use client";
import { BiSearch } from "react-icons/bi";
const Search = () => {
  return (
    <div className=" border-[1px] w-full md:w-auto rounded-full shadow-sm hover:shadow-md transition cursor-pointer ">
      <div className=" flex flex-row items-center justify-between ">
        <div className=" text-sm font-semibold px-6 ">
          <input
            type="text"
            className=" text-sm font-semibold rounded h-full outline-none w-full bg-red-300 flex items-center justify-center "
            placeholder="Anywhere"
          />
          Anywhere
        </div>
        <div className=" hidden sm:block text-sm font-semibold px-6 border-x-[1px] flex-1 text-center ">
          <input
            type="text"
            className=" text-sm font-semibold rounded h-full outline-none w-full "
          />
          Any Week
        </div>
        <div className=" text-sm pl-6 pr-2 text-gray-600 flex flex-row items-center gap-3 ">
          <div className=" hidden sm:block  ">
            <input
              type="text"
              className=" text-sm font-semibold rounded h-full outline-none w-full "
            />
            Add Guests
          </div>
          <div className=" p-1 m-1 bg-red-500 rounded-full text-white ">
            <BiSearch size={18} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
