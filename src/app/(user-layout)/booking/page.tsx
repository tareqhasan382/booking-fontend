import Booking from "@/components/Booking";
import React from "react";

const page = ({ data }: any) => {
  console.log("Data:", data);
  return (
    <div>
      <h1>Booking Now</h1>
      <Booking />
    </div>
  );
};

export default page;
