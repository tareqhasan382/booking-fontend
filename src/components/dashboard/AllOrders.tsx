"use client";
import { useAllOrdersQuery } from "@/redux/api/order";
import { useAppDispatch } from "@/redux/hooks";
import { useState } from "react";
import { AiTwotoneDelete } from "react-icons/ai";
import { BiEdit } from "react-icons/bi";
import { BsSearch } from "react-icons/bs";
import { toast } from "react-toastify";
//AiTwotoneDelete
const AllOrders = () => {
  const dispatch = useAppDispatch();
  const query: Record<string, any> = {};
  const [limit, setLimit] = useState<number>(10);
  const [page, setPage] = useState<number>(1);
  const [searchTerm, setSearchTerm] = useState<string>("");
  query["limit"] = limit;
  query["page"] = page;
  query["searchTerm"] = searchTerm;

  const { data, isLoading } = useAllOrdersQuery({ ...query });
  // console.log("Data:", data);
  const totalPage = Math.ceil(data?.meta?.total / limit);

  if (isLoading) {
    return (
      <div className=" h-screen bg-gray-200 ">
        <h1 className=" text-xl font-bold text-center ">Loding.........</h1>
      </div>
    );
  }
  const packages = data?.data;
  // console.log(packages);
  const meta = data?.meta;
  //=================pagination============

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
  const tablebg = "hover:bg-gray-200 text-black";
  return (
    <div className="lg:w-full">
      <div className=" bg-slate-300 flex items-center justify-between  ">
        <h1 className=" text-xl font-bold ">All Orders List</h1>
        <div className=" flex items-center justify-center px-5 ">
          <div className=" flex gap-2 border border-gray-300 rounded-full py-2 px-4 shadow-md shadow-gray-300">
            <input
              onChange={(e) => setSearchTerm(e.target.value)}
              type="text"
              placeholder="Anywhere"
              className="rounded-full font-xl px-1 "
            />
            <button className=" w-8 h-8 flex items-center justify-center bg-red-500 text-white p-1 rounded-full">
              <BsSearch size={18} />
            </button>
          </div>
        </div>
      </div>
      <div className=" bg-black flex flex-col h-auto ">
        <table className=" overflow-hidden shadow-2xl border-2 border-black w-full ">
          <thead className=" w-screen  text-white ">
            <tr className=" ">
              <th className=" py-3 bg-cyan-800 ">S.NO</th>
              <th className=" py-3 bg-cyan-800 ">Name</th>
              <th className=" py-3 bg-cyan-800 ">Contact No</th>
              <th className=" py-3 bg-cyan-800 ">Price</th>
              <th className=" py-3 bg-cyan-800 ">Location</th>
              <th className=" py-3 bg-cyan-800 ">Action</th>
            </tr>
          </thead>
          <tbody className=" text-black text-center  ">
            {packages?.map((item: any, index: number) => (
              <tr
                key={item.id}
                className={`${tablebg} bg-gray-300 text-black cursor-pointer duration-300 `}
              >
                {/* hover:scale-105 */}
                <td>{index + 1}</td>
                <td>{item.name}</td>
                <td>{item.phone} </td>
                <td>{item.totalPrice}$ </td>
                <td>locationValue </td>
                <td className=" gap-3 ">
                  <button className=" px-2 hover:text-green-500  ">
                    <BiEdit size={30} />
                  </button>
                  <button className=" px-2 hover:text-rose-700 ">
                    <AiTwotoneDelete size={30} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className=" bg-gray-300 py-3 border-black text-black items-center text-center ">
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
      </div>
    </div>
  );
};

export default AllOrders;
