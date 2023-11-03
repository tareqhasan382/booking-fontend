import Image from "next/image";
import React from "react";

const Feature = () => {
  return (
    <div>
      <div className=" flex flex-col items-center gap-2 justify-center lg:w-[375px] sm:w-[350px] ">
        <div className=" rounded-full ">
          <Image
            src="/images/cardimg.jpg"
            height={50}
            width={50}
            alt="logo"
            className=" rounded-full object-cover w-20 h-20 "
          />
        </div>
        <h1 className=" text-lg font-bold ">100+ Mountains</h1>
        <p className=" justify-center text-center ">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate
          dolorem natus iure autem eum ipsum, at mollitia architecto ad voluptas
          provident laboriosam quidem, suscipit magni quo dicta quae quod iste!
        </p>
      </div>
    </div>
  );
};

export default Feature;
