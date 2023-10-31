// "use client";
import { getBaseUrl } from "@/helpers/config/envConfig";
import Image from "next/image";

const PackageCard = async () => {
  const query: Record<string, any> = {};
  const res = await fetch(`${getBaseUrl()}/trips`, {
    cache: "no-store",
  });
  const { data } = await res.json();

  // console.log("data all:", data);
  return (
    <div>
      <div className=" px-5 flex flex-col items-center justify-center ">
        <div className=" bg-blue-500 h-auto w-[260px] p-2 rounded-t ">
          <div className=" object-cover ">
            <Image
              src="/images/cardimg.jpg"
              height={400}
              width={400}
              alt="img"
              className=" rounded "
            />
          </div>
          <div className=" text-white flex flex-col items-center justify-center ">
            <h3 className=" text-lg font-bold ">Graphic Design </h3>
            <p>
              In publishing and graphic design, Lorem ipsum is a placeholder
              text commonly used to demonstrate the visual form of a document or
              a typeface without relying on meaningful content.
            </p>
            <p>Price: $20</p>
            <button className=" w-full  bg-white text-black h-10 rounded text-lg ">
              Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PackageCard;
