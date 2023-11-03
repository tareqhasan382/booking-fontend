/* eslint-disable @next/next/no-async-client-component */
"use client";
import { getBaseUrl } from "@/helpers/config/envConfig";
import { addToCart } from "@/redux/cardSlice";
import { useAppDispatch } from "@/redux/hooks";
import { ITrips } from "@/types";
import Image from "next/image";

const DetailsPage = async ({ params }: { params: { slug: string } }) => {
  const dispatch = useAppDispatch();
  const res = await fetch(`${getBaseUrl()}/api/v1/trips/${params.slug}`, {
    cache: "no-store",
  });

  const { data } = await res.json();
  // src="/images/cardimg.jpg"
  const handleAddPackage = (data: ITrips) => {
    dispatch(addToCart(data));
  };
  return (
    <div className=" lg:px-48 md:px-20 w-full flex flex-col items-center justify-center py-10">
      <div className=" w-full flex flex-wrap items-center justify-between gap-5 ">
        <div className=" lg:w-[30%] md:w-full h-[350px] ">
          <Image
            src={data?.imageSrc}
            height={1000}
            width={1000}
            alt="img"
            className=" w-full h-full p-3 object-cover "
          />
        </div>
        <div className=" lg:w-[65%] md:w-full ">
          <h3 className=" text-2xl font-bold font-sans ">{data?.title}</h3>
          <p className=" text-xl font-bold ">${data?.price}</p>

          <p className=" text-lg font-semibold ">Room : {data?.roomCount}</p>
          <p className=" text-lg font-semibold ">
            Washroom : {data?.bathroomCount}
          </p>
          <p className=" text-lg font-semibold ">Guest : {data?.guestCount}</p>
          <p className=" text-lg font-semibold ">
            Location : {data?.locationValue}
          </p>
          <button
            onClick={() => handleAddPackage(data)}
            className=" lg:w-[20%] md:w-[8%] bg-black text-white py-2 rounded lg:text-xl md:text-base font-bold "
          >
            Add To Card
          </button>
          <p className=" text-lg font-semibold ">Category : {data?.category}</p>
          <p className=" text-lg flex justify-center ">{data?.description}</p>
        </div>
      </div>
      <div className=" pt-8 h-auto ">
        <h1 className=" text-right text-xl font-bold "> Reviews </h1>
        <div className=" h-32 "></div>
      </div>
    </div>
  );
};

export default DetailsPage;
/*
  <div>
          <p>Title : {data?.title}</p>
          <p>Title : {data?.description}</p>
          <p>Category : {data?.category}</p>
          <p>Room : {data?.roomCount}</p>
          <p>Washroom : {data?.bathroomCount}</p>
          <p>Guest : {data?.guestCount}</p>
          <p>Location : {data?.locationValue}</p>
          <p>Cost : {data?.price}</p>
          <button>Add To Card</button>
        </div>

         
*/
