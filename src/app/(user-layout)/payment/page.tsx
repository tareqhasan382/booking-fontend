"use client";
import { getUserInfo, isLoggedIn } from "@/utils/auth.service";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const PaymentPage = () => {
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

  if (!loading) {
    <div>
      <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
        Loading .....
      </h1>
    </div>;
  }
  return (
    <>
      {loading && (
        <div className=" lg:px-48 md:px-20 w-full flex flex-col items-center justify-center py-10">
          <h1>Payment Page</h1>
        </div>
      )}
    </>
  );
};

export default PaymentPage;
