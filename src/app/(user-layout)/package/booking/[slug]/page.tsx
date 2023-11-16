"use client";

import { useGetSinglePackageQuery } from "@/redux/api/packageApi";
import { useForm, SubmitHandler } from "react-hook-form";
import { differenceInDays } from "date-fns";
import { getUserInfo, isLoggedIn } from "@/utils/auth.service";
import { useOrderMutation } from "@/redux/api/order";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
//
type Inputs = {
  name: string;
  guest: string;
  phone: string;
  startDay: string;
  endDay: string;
  totalPrice: string;
  userId: string;
  tripsId: string;
};
const DetailsPage = ({ params }: any) => {
  // =================isLoggedIn=======================
  const router = useRouter();
  const userLoggedIn = isLoggedIn();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    if (!userLoggedIn) {
      router.push("/login");
    }
    setIsLoading(true);
  }, [router, isLoading, userLoggedIn]);
  //========================isLoggedIn===================
  const { slug: id } = params;
  const userInfo: any = getUserInfo();

  const { data: tips } = useGetSinglePackageQuery(id);
  const [order] = useOrderMutation();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const startDay = new Date(data.startDay);
    const endDate = new Date(data.endDay);
    const differenceDate = differenceInDays(endDate, startDay);

    const updatedPrice = tips.price * (differenceDate + 1);
    const info = {
      name: data.name,
      guest: Number(data.guest),
      phone: Number(data.phone),
      startDay: data.startDay,
      endDay: data.endDay,
      totalPrice: updatedPrice,
      userId: userInfo.id,
      tripsId: tips.id,
    };
    const res: any = await order(info);
    if (res?.data) {
      toast.success("Order Successfully!", {
        position: toast.POSITION.TOP_RIGHT,
      });
      reset();
      router.push("/orders");
    } else {
      toast.error(res?.message, {
        position: toast.POSITION.TOP_RIGHT,
      });
    }
  };
  return (
    <div className=" lg:px-48 md:px-20 w-full flex flex-col items-center justify-center py-10">
      <div className=" w-full flex flex-col items-center justify-between gap-5 ">
        <h1>Booking Information</h1>
        <div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div>
              <label htmlFor="name">Full Name</label>
              <input
                required
                {...register("name")}
                type="text"
                className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder="full name"
              />
            </div>
            <div>
              <label htmlFor="phone">Phone</label>
              <input
                required
                {...register("phone")}
                type="number"
                className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                placeholder="contact number"
              />
            </div>
            <div>
              <label htmlFor="guest">Guest</label>
              <input
                required
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
                  required
                  {...register("startDay")}
                  type="date"
                  className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholder="date"
                />
              </div>
              <div className=" w-full ">
                <label htmlFor="date">End Date</label>
                <input
                  required
                  {...register("endDay")}
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
      </div>
    </div>
  );
};

export default DetailsPage;

/*
 
"use client";
import { getBaseUrl } from "@/helpers/config/envConfig";
import { addToCart } from "@/redux/cardSlice";
import { useAppDispatch } from "@/redux/hooks";
import { ITrips } from "@/types";
import Image from "next/image";

const DetailsPage = async ({ params }: { params: { slug: string } }) => {
  const dispatch = useAppDispatch();
  const res = await fetch(`${getBaseUrl()}/api/v1/trips/${params.slug}`, {
    cache: "no-store",
  });

  const { data } = await res.json();
  // src="/images/cardimg.jpg"
  const handleAddPackage = (data: ITrips) => {
    dispatch(addToCart(data));
  };
  return (
    <div className=" lg:px-48 md:px-20 w-full flex flex-col items-center justify-center py-10">
      <div className=" w-full flex flex-wrap items-center justify-between gap-5 ">
        <div className=" lg:w-[30%] md:w-full h-[350px] ">
          <Image
            src={data?.imageSrc}
            height={1000}
            width={1000}
            alt="img"
            className=" w-full h-full p-3 object-cover "
          />
        </div>
        <div className=" lg:w-[65%] md:w-full ">
          <h3 className=" text-2xl font-bold font-sans ">{data?.title}</h3>
          <p className=" text-xl font-bold ">${data?.price}</p>

          <p className=" text-lg font-semibold ">Room : {data?.roomCount}</p>
          <p className=" text-lg font-semibold ">
            Washroom : {data?.bathroomCount}
          </p>
          <p className=" text-lg font-semibold ">Guest : {data?.guestCount}</p>
          <p className=" text-lg font-semibold ">
            Location : {data?.locationValue}
          </p>
          <button
            onClick={() => handleAddPackage(data)}
            className=" lg:w-[20%] md:w-[8%] bg-black text-white py-2 rounded lg:text-xl md:text-base font-bold "
          >
            Add To Card
          </button>
          <p className=" text-lg font-semibold ">Category : {data?.category}</p>
          <p className=" text-lg flex justify-center ">{data?.description}</p>
        </div>
      </div>
      <div className=" pt-8 h-auto ">
        <h1 className=" text-right text-xl font-bold "> Reviews </h1>
        <div className=" h-32 "></div>
      </div>
    </div>
  );
};

export default DetailsPage;
         
*/
