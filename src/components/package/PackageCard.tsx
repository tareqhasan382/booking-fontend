"use client";
import { getBaseUrl } from "@/helpers/config/envConfig";
import Image from "next/image";
import Link from "next/link";
import { BsFillHeartFill } from "react-icons/bs";
import { AiOutlineHeart } from "react-icons/ai";
import { useGetPackagesQuery } from "@/redux/api/packageApi";
import Loading from "@/app/(user-layout)/loading";

const PackageCard = () => {
  const { data, isLoading } = useGetPackagesQuery({ undefined });
  const handleFavorite = (item: any) => {
    console.log(item);
  };
  return (
    <div className="w-full ">
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
                {/* <p className=" text-rose-500 ">
                  <BsFillHeartFill size={22} />
                </p> */}
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
    </div>
  );
};

export default PackageCard;
