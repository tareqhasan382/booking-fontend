"use client";

import { useAppSelector } from "@/redux/hooks";

const CartPage = () => {
  const { packages } = useAppSelector((state) => state.cart);

  return (
    <div className="w-full h-screen shadow-xl bg-white ">
      <div className="lg:px-48 md:px-20  w-full flex items-center justify-between px-10">
        <div className=" flex flex-col ">
          <h1 className=" pt-10 text-xl font-bold ">Cart Page</h1>
          {packages.map((item: any) => (
            <div key={item.id} className=" flex gap-5  ">
              <h3>{item.title} </h3>
              <h3>${item.price} </h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CartPage;
