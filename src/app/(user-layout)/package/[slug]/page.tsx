"use client";
import Booking from "@/components/Booking";
import ClientOnly from "@/components/ClientOnly";
import DateRangePickerComponent from "@/components/cart/DateRange";
import Rating from "@/components/review/Rating";
import Review from "@/components/review/Review";
import { useGetSinglePackageQuery } from "@/redux/api/packageApi";
import { useGetReviewQuery } from "@/redux/api/reviewApi";
import { addToCart } from "@/redux/cardSlice";
import { useAppDispatch } from "@/redux/hooks";
import { ITrips } from "@/types";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
//
const DetailsPage = ({ params }: any) => {
  const router = useRouter();
  const { slug: id } = params;
  const dispatch = useAppDispatch();
  const { data: reviews } = useGetReviewQuery(id);
  const rating = reviews?.rating;
  const stars = Array.from({ length: rating }, (_, index) => index);

  console.log(rating);
  // console.log("Reviews:", reviews);
  const { data, isLoading } = useGetSinglePackageQuery(id);
  // console.log("redux:", data);
  const handleAddPackage = (data: ITrips) => {
    router.push(`booking/${data.id}`);
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
            loading="lazy"
            className=" w-full h-full p-3 object-cover "
          />
        </div>
        <div className=" lg:w-[65%] md:px-3 ">
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
            className=" w-[200px] bg-black text-white py-2 rounded lg:text-xl md:text-base font-bold "
          >
            Book Now
          </button>
          <p className=" text-lg font-semibold ">Category : {data?.category}</p>
          <p className=" text-lg flex items-center justify-center ">
            {data?.description}
          </p>
        </div>
      </div>
      <div className=" pt-8 h-auto flex flex-col items-center justify-center ">
        <h1 className=" text-xl font-bold text-center "> Reviews </h1>
        <div className=" h-32 w-full  ">
          <ClientOnly>
            <Review id={data?.id} />
          </ClientOnly>
        </div>
        <div>
          {reviews?.map((item: any) => (
            <div key={item.id} className=" flex gap-2 ">
              <div>
                <Image
                  src="/images/logo.png"
                  height={20}
                  width={20}
                  alt="icon"
                />
              </div>
              <div>
                <p>{item?.comment} </p>
                {/* <p> {rating} </p> */}
                <Rating rating={item?.rating} />
              </div>
            </div>
          ))}
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
