import { getBaseUrl } from "@/helpers/config/envConfig";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const page = async () => {
  // const query: Record<string, any> = {};

  // const [page, setPage] = useState<number>(1);
  // const [size, setSize] = useState<number>(10);
  // const [sortBy, setSortBy] = useState<string>("");
  // const [sortOrder, setSortOrder] = useState<string>("");

  // query["limit"] = size;
  // query["page"] = page;
  // query["sortBy"] = sortBy;
  // query["sortOrder"] = sortOrder;

  // const { data, isLoading } = useMyCoursesQuery({ ...query });

  // const myCourses = data?.myCourses;
  // const meta = data?.meta;

  const res = await fetch(`${getBaseUrl()}/trips?limit=8`, {
    cache: "no-store",
  });
  const { data } = await res.json();
  return (
    <div className=" lg:px-48 md:px-20  w-full ">
      {/* flex flex-wrap items-center justify-center pt-10 gap-5 */}
      <div className=" flex flex-wrap items-center justify-center py-10 gap-5 ">
        {data?.data?.map((item: any) => (
          <div
            key={item.id}
            className=" bg-blue-500 h-auto w-[260px] p-2 rounded  "
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
    </div>
  );
};

export default page;
