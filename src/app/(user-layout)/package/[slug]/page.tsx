import { getBaseUrl } from "@/helpers/config/envConfig";
import Image from "next/image";

const DetailsPage = async ({ params }: { params: { slug: string } }) => {
  const res = await fetch(`${getBaseUrl()}/trips/${params.slug}`, {
    cache: "no-store",
  });
  const { data } = await res.json();
  // src="/images/cardimg.jpg"
  return (
    <div className=" lg:px-48 md:px-20 w-full flex items-center justify-center py-10">
      <div className=" bg-red-200 w-full flex flex-wrap items-center justify-between gap-5 ">
        <div className=" lg:w-[30%] md:w-full bg-slate-500 h-[350px] ">
          <Image
            src={data?.imageSrc}
            height={1000}
            width={1000}
            alt="img"
            className=" w-full h-full p-3 object-cover "
          />
        </div>
        <div className=" lg:w-[65%] md:w-full bg-teal-400 ">
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
          <button className=" lg:w-[20%] md:w-[8%] px-3 bg-white h-10 m-2 rounded lg:text-xl md:text-base font-bold ">
            Add To Card
          </button>
          <p className=" text-lg font-semibold ">Category : {data?.category}</p>
          <p className=" text-lg flex justify-center ">{data?.description}</p>
        </div>
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
