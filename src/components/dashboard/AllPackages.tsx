"use client";
import { useGetPackagesQuery } from "@/redux/api/packageApi";
import { ITrips } from "@/types";
import Link from "next/link";
import { useState } from "react";

const AllPackages = () => {
  const query: Record<string, any> = {};

  const [page, setPage] = useState<number>(1);
  const [size, setSize] = useState<number>(10);
  const [sortBy, setSortBy] = useState<string>("");
  const [sortOrder, setSortOrder] = useState<string>("");

  query["limit"] = size;
  query["page"] = page;
  //   query["sortBy"] = sortBy;
  //   query["sortOrder"] = sortOrder;

  const { data, isLoading } = useGetPackagesQuery({ ...query });

  const packages = data?.packages?.data;
  const meta = data?.packages?.meta;
  return (
    <div className="lg:w-full">
      <div className="bg-gray-200">
        <table className="table-fixed">
          <thead>
            <tr>
              <th>Song</th>
              <th>Artist</th>
              <th>Year</th>
            </tr>
          </thead>
          <tbody>
            {packages?.map((item: any) => (
              <tr key={item.id}>
                <td>The Sliding Mr. Bones</td>
                <td>Malcolm Lockyer</td>
                <td>1961</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllPackages;
//@ts-ignore

/*
  <table className="table table-compact lg:ml-20 xs:mx-2">
            <tr className="bg-teal-400 ">
              
              <th>Full Name</th>
              <th>Email</th>
              <th>Phone</th>
            </tr>
            {packages?.map((item: any) => (
              <tr key={item.id}>
                <td>{item.title} </td>
                <td>{item.category} </td>
                <td>{item.price} </td>

                <td></td>
              </tr>
            ))}
          </table>
*/
