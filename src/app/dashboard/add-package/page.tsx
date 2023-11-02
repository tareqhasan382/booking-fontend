import AddPackage from "@/components/dashboard/AddPackage";
import React from "react";

const page = () => {
  return (
    <div className=" flex flex-col justify-center items-center ">
      <h1 className=" text-2xl font-bold ">Add Package</h1>
      <AddPackage />
    </div>
  );
};

export default page;
