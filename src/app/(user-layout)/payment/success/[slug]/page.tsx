"use client";
import { useGetPaymentQuery } from "@/redux/api/payment";
import { getUserInfo, isLoggedIn } from "@/utils/auth.service";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Confetti from "react-confetti";
const DetailsPage = ({ params }: any) => {
  //=======================================================
  const userInfo: any = getUserInfo();
  const router = useRouter();
  const userLoggedIn = isLoggedIn();
  const [loading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    if (!userLoggedIn) {
      router.push("/login");
    }
    setIsLoading(true);
  }, [router, loading, userLoggedIn]);

  if (loading) {
    <div>
      <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
        Loading .....
      </h1>
    </div>;
  }

  const { slug: id } = params;
  const { data, isLoading } = useGetPaymentQuery(id);
  // console.log(data);
  return (
    <div className=" lg:px-48 md:px-20 w-full flex flex-col items-center justify-center py-10">
      <Confetti width={2024} height={900} tweenDuration={300}></Confetti>
      <div className=" flex flex-col h-screen ">
        {isLoading && (
          <div>
            <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
              Loading .....
            </h1>
          </div>
        )}
        {!isLoading && (
          <div>
            <h1>payment Successfully </h1>
            <h1> TransactionId : {id} </h1>
            <h1> Name: {data?.paymentGatewayData?.name} </h1>
            <h1>Phone:{data?.paymentGatewayData?.phone} </h1>
            <h1>Title:{data?.paymentGatewayData?.package} </h1>
            <h1>Destination:{data?.paymentGatewayData?.packageLocation} </h1>
            <h1>Cost:{data?.amount} </h1>
            <h1>Payment Status:{data?.status} </h1>
          </div>
        )}
      </div>
    </div>
  );
};

export default DetailsPage;
