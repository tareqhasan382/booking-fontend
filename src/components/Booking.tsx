import { ITrips } from "@/types";
import React from "react";

const Booking = ({ data }: any) => {
  console.log("data:", data);
  return (
    <div>
      <h1>Booking Page ..............</h1>
      <p>{data?.name} </p>
    </div>
  );
};

export default Booking;
