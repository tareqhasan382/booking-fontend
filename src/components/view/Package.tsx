import { getBaseUrl } from "@/helpers/config/envConfig";
import Image from "next/image";
import Link from "next/link";

const Package = async () => {
  const res = await fetch(`${getBaseUrl()}/trips`, {
    cache: "no-store",
  });
  const { data } = await res.json();
  return (
    <>
      {data?.data?.map((item: any) => (
        <div
          key={item.id}
          className=" px-5 flex flex-col items-center justify-center "
        >
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
              <h3 className=" text-lg font-bold ">{item?.title} </h3>
              <p>{item?.description}</p>
              <p>Price:{item?.price}</p>
              <Link href={`/package/${item.id}`}>
                <button className=" w-full  bg-white text-black h-10 rounded text-lg ">
                  Details
                </button>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Package;

