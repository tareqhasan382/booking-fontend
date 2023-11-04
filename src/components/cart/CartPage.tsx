"use client";

import {
  addToCart,
  decrementItemToCart,
  removeItemToCart,
} from "@/redux/cardSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";

const CartPage = () => {
  const { packages } = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();
  return (
    <div className="w-full h-screen shadow-xl bg-white ">
      <div className="lg:px-48 md:px-20  w-full flex items-center justify-between px-10">
        <div className=" flex flex-col w-full ">
          <h1 className=" pt-10 text-xl font-bold ">Cart Page</h1>
          {packages.map((item: any) => (
            <div
              key={item.id}
              className=" flex flex-wrap gap-5 border p-3 rounded w-full border-1 border-black "
            >
              <h3>{item.title} </h3>
              <h3>Total Cost : ${item.price} </h3>
              <h3>Quantity : {item.quantity} </h3>
              <button
                onClick={() => dispatch(addToCart(item))}
                className=" px-2 rounded bg-green-600 text-xl font-bold "
              >
                +
              </button>
              <button
                onClick={() => dispatch(decrementItemToCart(item))}
                className=" w-[28px] h-[28px] rounded bg-green-600 text-xl font-bold "
              >
                -
              </button>
              <button
                onClick={() => dispatch(removeItemToCart(item))}
                className=" w-[28px] h-[28px] rounded bg-green-600 text-xl font-bold "
              >
                x
              </button>
            </div>
          ))}
          <div className=" text-xl font-bold py-5 "> Total Cost : $ </div>
          <div className=" text-xl font-bold py-3 w-[200px] text-center rounded bg-green-700 ">
            Book Now
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
