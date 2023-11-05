"use client";

import { removeItemToCart } from "@/redux/cardSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { ITrips } from "@/types";
import { getUserInfo, isLoggedIn } from "@/utils/auth.service";
import { useForm, SubmitHandler } from "react-hook-form";
import { differenceInDays } from "date-fns";
// startDate,endDate,totalPrice,userId,tripsId
type Inputs = {
  name: string;
  guest: string;
  phone: string;
  startDate: string;
  endDate: string;
  totalPrice: string;
  userId: string;
  tripsId: string;
};
const CartPage = () => {
  //const loggedInUser = isLoggedIn();
  const userInfo: any = getUserInfo();
  // console.log("getUserInfo:", userInfo.id);
  const { packages, total } = useAppSelector((state) => state.cart);
  const dispatch = useAppDispatch();
  //
  const id: any = packages.map((item: ITrips) => item.id);

  // console.log("id=", id);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    const startDate = new Date(data.startDate); // Convert startDate to a Date object
    const endDate = new Date(data.endDate); // Convert endDate to a Date object
    const differenceDate = differenceInDays(endDate, startDate);
    console.log("differenceDate:", differenceDate + 1);
    // Calculate the updated totalPrice by multiplying it by the difference in days
    // if (!isNaN(total)) {
    //   const updatedTotalPrice = total * differenceDate;
    // }
    const updatedTotalPrice: number = total * differenceDate; // Number(data.totalPrice) * differenceDate;

    const info = {
      name: data.name,
      guest: data.guest,
      phone: data.phone,
      startDate: data.startDate,
      endDate: data.endDate,
      totalPrice: updatedTotalPrice,
      userId: userInfo.id,
      tripsId: id,
    };
    console.log("info:", info);
  };

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
              <h3>Cost : ${item.price} / per night </h3>
              {/* <h3>Quantity : {item.quantity} </h3> */}
              {/* <button
                onClick={() => dispatch(addToCart(item))}
                className=" px-2 rounded bg-green-600 text-xl font-bold "
              >
                +
              </button> */}
              {/* <button
                onClick={() => dispatch(decrementItemToCart(item))}
                className=" w-[28px] h-[28px] rounded bg-green-600 text-xl font-bold "
              >
                -
              </button> */}
              <button
                onClick={() => dispatch(removeItemToCart(item))}
                className=" w-[28px] h-[28px] rounded bg-green-600 text-xl font-bold "
              >
                x
              </button>
            </div>
          ))}
          <div className=" text-xl font-bold py-5 "> Total Cost :$ {total}</div>
          {/*===================== Information ============================*/}

          <div>
            <h1 className=" text-xl font-bold ">Information</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div>
                <label htmlFor="name">Full Name</label>
                <input
                  {...register("name")}
                  type="text"
                  className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder="full name"
                />
              </div>
              <div>
                <label htmlFor="phone">Phone</label>
                <input
                  {...register("phone")}
                  type="number"
                  className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder="contact number"
                />
              </div>
              <div>
                <label htmlFor="guest">Guest</label>
                <input
                  {...register("guest")}
                  type="number"
                  className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder="guest number"
                />
              </div>
              <div className=" w-full flex flex-wrap justify-around gap-3 ">
                <div className=" w-full ">
                  <label htmlFor="date">Start Date</label>
                  <input
                    {...register("startDate")}
                    type="date"
                    className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    placeholder="date"
                  />
                </div>
                <div className=" w-full ">
                  <label htmlFor="date">End Date</label>
                  <input
                    {...register("endDate")}
                    type="date"
                    className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    placeholder="date"
                  />
                  {/* <DateRange /> */}
                </div>
              </div>
              <div className=" py-3 ">
                <button
                  type="submit"
                  className=" w-full py-3 bg-black text-white rounded  "
                >
                  Book Now
                </button>
              </div>
            </form>
          </div>

          {/*===================== Information ============================*/}
          {/* <div className=" text-xl font-bold py-3 w-[200px] text-center rounded bg-green-700 ">
            Book Now
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default CartPage;
