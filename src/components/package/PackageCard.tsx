"use client";
import { BiSearch } from "react-icons/bi";
import Image from "next/image";
import Link from "next/link";
import { BsFillHeartFill } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";
import { useGetPackagesQuery } from "@/redux/api/packageApi";
import Loading from "@/app/(user-layout)/loading";
import { addToCart } from "@/redux/cardSlice";
import { useAppDispatch } from "@/redux/hooks";
import { useState } from "react";
import { toast } from "react-toastify";

import { BsSearch } from "react-icons/bs";
const PackageCard = () => {
  const dispatch = useAppDispatch();
  const query: Record<string, any> = {};
  const [limit, setLimit] = useState<number>(4);
  const [page, setPage] = useState<number>(1);

  query["limit"] = limit;
  query["page"] = page;
  //limit , page , total

  const { data, isLoading } = useGetPackagesQuery({ ...query });
  const totalPage = Math.ceil(data?.meta?.total / limit);

  const prevPage = () => {
    if (page > 1) {
      setPage(page - 1);
    } else {
      toast.warning("Page number can't be less than 1");
    }
  };
  const nextPage = () => {
    if (page < totalPage) {
      setPage(page + 1);
    } else {
      toast.warning("Page number can't be more than");
    }
  };
  const handleFavorite = (item: any) => {
    dispatch(addToCart(item));
  };
  return (
    <div className="w-full ">
      {/*====================== searchBar ================================*/}
      <div className=" pt-3 flex items-center justify-center px-5 ">
        <div className=" flex gap-2 border border-gray-300 rounded-full py-2 mt-5 px-4 shadow-md shadow-gray-300">
          <input
            type="text"
            placeholder="Anywhere"
            className="rounded-full font-xl px-1 "
          />
          {/* <div className="border-l border-gray-300"></div>
          <input type="text" placeholder="Any week" />
          <div className="border-l border-gray-300"></div>
          <input type="text" placeholder="Add guests" /> */}
          <button className=" w-8 h-8 flex items-center justify-center bg-red-500 text-white p-1 rounded-full">
            <BsSearch size={18} />
          </button>
        </div>
      </div>
      {/*====================== searchBar ================================*/}
      {/*=========== hero card================== */}
      <div className=" flex flex-col justify-center items-center pt-10 text-black px-7 ">
        <h1 className=" lg:text-4xl sm:text-4xl font-extrabold ">
          Popular Destinations
        </h1>
        <p>
          From historical cities to natural specteculars, come see the best to
          the world!
        </p>
      </div>
      {/*=========== hero card================== */}
      <div className="  flex flex-col items-center justify-center pt-20 text-black ">
        <h1 className=" text-4xl font-extrabold">Special Offers</h1>
        <p className=" lg:px-1 md:px-3 text-center ">
          From historical cities to natural specteculars, come see the best to
          the world!
        </p>
      </div>
      {/*=========== hero card================== */}
      <h1 className=" text-black text-center ">Package Card</h1>
      {/* flex flex-wrap items-center justify-center pt-10 gap-5 */}
      <div className=" flex flex-wrap items-center justify-center py-10 gap-5 ">
        {isLoading && <Loading />}
        {data?.data?.map((item: any) => (
          <div
            key={item.id}
            className=" bg-white h-auto w-[260px] p-2 rounded shadow shadow-slate-400 "
          >
            <div className=" object-cover ">
              <Image
                src="/images/cardimg.jpg"
                height={400}
                width={400}
                alt="img"
                className=" rounded "
              />
            </div>
            <div className=" w-full text-black flex flex-col items-center justify-center ">
              <h3 className=" text-lg font-bold ">Graphic Design </h3>
              <p>
                In publishing and graphic design, Lorem ipsum is a placeholder
                text commonly used to demonstrate the visual form of a document
                or a typeface without relying on meaningful content.
              </p>

              <div className=" py-2 flex flex-row items-center justify-around gap-10 ">
                <p>Price: $20</p>
                <p
                  onClick={() => handleFavorite(item)}
                  className="text-rose-500 cursor-pointer active:text-violet-700 "
                >
                  <BsFillHeartFill size={22} />
                </p>
              </div>
              <Link
                href={`package/${item.id}`}
                className=" w-full bg-black rounded "
              >
                <button className=" w-[100%]   text-white h-10 rounded text-lg ">
                  Details
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
      <div className=" flex bg-gray-300 rounded-lg p-6 mx-4 ">
        <button
          onClick={prevPage}
          className=" h-12 border-2 border-gray-600 px-4 rounded-l-lg hover:bg-gray-600 hover:text-white mr-2  "
        >
          <h3 className=" text-xl font-medium ">Prev</h3>
        </button>
        <button className=" h-12  px-4 rounded-lg  mr-2  ">
          <h3 className=" text-xl font-medium ">
            {page}/{totalPage}
          </h3>
        </button>
        <button
          onClick={nextPage}
          className=" h-12 border-2 border-gray-600 px-4 rounded-r-lg hover:bg-gray-600 hover:text-white mr-2  "
        >
          <h3 className=" text-xl font-medium ">Next</h3>
        </button>
      </div>
    </div>
  );
};

export default PackageCard;
