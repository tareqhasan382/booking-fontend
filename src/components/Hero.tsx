import React from "react";
import PackageCard from "./package/PackageCard";

const Hero = () => {
  return (
    <div
      className="
    pt-4
    flex 
    flex-row 
    items-center 
    justify-between
    overflow-x-auto
    scrollbar-hidden
  "
    >
      <PackageCard />
      <PackageCard />
      <PackageCard />
      <PackageCard />
      <PackageCard />
      <PackageCard />
      <PackageCard />
      <PackageCard />
    </div>
  );
};

export default Hero;
