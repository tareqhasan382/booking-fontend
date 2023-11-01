import Link from "next/link";
import React from "react";

const SideBar = () => {
  return (
    <div className=" px-5 pt-5 ">
      <div className=" flex flex-col gap-3 ">
        <Link href="/dashboard">
          <h3>DashBoard</h3>
        </Link>
        <Link href="/dashboard/add-package">
          <button> Add Package </button>
        </Link>
        <Link href="/dashboard/package">
          <button> All Packages </button>
        </Link>
        <Link href="/dashboard/orders">
          <button> All Orders </button>
        </Link>
      </div>
      <button className=" bg-white text-black px-5 py-2 rounded text-lg font-bold mt-3 ">
        {" "}
        Log out{" "}
      </button>
    </div>
  );
};

export default SideBar;
