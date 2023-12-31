// "use client";
import PackageCard from "@/components/package/PackageCard";
import { getBaseUrl } from "@/helpers/config/envConfig";
import Image from "next/image";
import Link from "next/link";
import React from "react";
//?limit=8
const page = async () => {
  const res = await fetch(`${getBaseUrl()}/api/v1/trips`, {
    cache: "no-store",
  });
  const { data } = await res.json();
  // console.log(data);
  // const { data: tips, isLoading } = useGetPackagesQuery({ undefined });
  // console.log("data:", tips);
  // const data = tips?.data;
  // const meta = tips?.packages.meta;
  // console.log("tips:", data);
  // console.log("meta:", meta);
  return (
    <div className=" lg:px-48 md:px-20 h-auto  w-full ">
      <div className=" flex flex-col justify-center items-center pt-10 text-black px-7 ">
        <h1 className=" lg:text-4xl sm:text-4xl font-extrabold ">
          Popular Destinations
        </h1>
        <p>
          From historical cities to natural specteculars, come see the best to
          the world!
        </p>
      </div>
      {/* flex flex-wrap items-center justify-center pt-10 gap-5 ======map */}
      <div className=" flex flex-wrap items-center justify-center py-10 gap-5 ">
        <PackageCard />
      </div>
    </div>
  );
};

export default page;

/*
<div className=" flex flex-wrap items-center justify-center py-10 gap-5 ">
        {data?.data?.map((item: any) => (
          <div
            key={item.id}
            className=" bg-blue-500 h-auto w-[260px] p-2 rounded "
          >
            <div className=" object-cover ">
              <Image
                src="/images/cardimg.jpg"
                height={400}
                width={400}
                alt="img"
                className=" rounded"
              />
            </div>
            <div className=" w-full text-white flex flex-col items-center justify-center ">
              <h3 className=" text-lg font-bold ">Graphic Design </h3>
              <p>
                In publishing and graphic design, Lorem ipsum is a placeholder
                text commonly used to demonstrate the visual form of a document
                or a typeface without relying on meaningful content.
              </p>
              <p>Price: $20</p>
              <Link
                href={`package/${item.id}`}
                className=" w-full bg-white rounded "
              >
                <button className=" w-[100%]   text-black h-10 rounded text-lg ">
                  Details
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>

*/
