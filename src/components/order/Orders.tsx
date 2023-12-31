"use client";
import { useDeleteOrderMutation, useOrdersQuery } from "@/redux/api/order";
import { usePaymentRequestMutation } from "@/redux/api/payment";
import { getUserInfo, isLoggedIn } from "@/utils/auth.service";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

const Orders = () => {
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

  if (!loading) {
    <div>
      <h1>Loading..........</h1>
    </div>;
  }
  //=======================Get data=================================
  const id = userInfo?.id;

  const { data, isLoading } = useOrdersQuery(id);
  const [paymentRequest, { isLoading: paymentLoading }] =
    usePaymentRequestMutation();
  //console.log("Order:", data);
  //==========================delete data=============================
  const [deleteOrder, { isLoading: deleteLoading }] = useDeleteOrderMutation();

  const handleDelete = async (id: string) => {
    try {
      await deleteOrder(id).unwrap();
      toast.success("Order deleted successfully!", {
        position: toast.POSITION.BOTTOM_CENTER,
      });
    } catch (error) {
      console.error("Error deleting data:", error);
    }
  };
  const handlePayment = async (payload: any) => {
    const info = {
      reservedBookId: payload?.id,
      name: payload?.name,
      phone: payload?.phone,
      price: payload?.totalPrice,
      package: payload?.trips?.title,
      packageId: payload?.trips?.id,
      packageLocation: payload?.trips?.locationValue,
    };
    //console.log("paload:", info);
    try {
      const res: any = await paymentRequest(info);
      if (res?.data) {
        window.location.replace(res?.data);
      }
      console.log("Res:", res);
    } catch (error) {}
  };
  return (
    <div className="h-auto  w-full mb-20">
      {isLoading && (
        <div className=" h-screen items-center justify-center bg-slate-300 ">
          <h1 className=" text-center text-xl font-bold text-black ">
            Loading.......
          </h1>
        </div>
      )}

      <div className="flex flex-wrap gap-4 items-center justify-center">
        <div>
          {data?.map(
            (item: any) =>
              item?.status !== "confirmed" && (
                <div
                  key={item.id}
                  className=" border border-gray-300 shadow-md shadow-slate-500 rounded gap-3 w-80  flex items-center justify-center p-4 "
                >
                  <div className=" ">
                    <h1>Name:{item.name} </h1>
                    <h1>Phone:{item.phone} </h1>
                    <h1>Start Date:{item.startDay} </h1>
                    <h1>End Date:{item.endDay} </h1>
                    <h1>Total Price:${item.totalPrice} </h1>

                    <h1 className=" text-xl font-bold ">
                      Status :{item?.status}
                    </h1>
                    <h1>Title:{item?.trips?.title}</h1>
                    <h1>Category:{item?.trips?.category}</h1>
                    <h1>Location:{item?.trips?.locationValue}</h1>
                    <h1>BathRoom:{item?.trips?.bathroomCount}</h1>
                    <h1>Room Count:{item?.trips?.roomCount}</h1>
                    {item?.status !== "confirmed" && (
                      <div>
                        <button
                          onClick={() => handleDelete(item?.id)}
                          disabled={deleteLoading}
                          className=" w-full py-2 bg-rose-400 rounded text-xl font-bold "
                        >
                          Cancel
                        </button>
                        <button
                          onClick={() => handlePayment(item)}
                          disabled={paymentLoading}
                          className=" mt-2 w-full py-2 bg-green-400 rounded text-xl font-bold "
                        >
                          Payment
                        </button>
                      </div>
                    )}
                  </div>
                  {/* <hr /> */}
                </div>
              )
          )}
        </div>
      </div>
    </div>
  );
};

export default Orders;
