import Orders from "@/components/order/Orders";

const page = () => {
  //==================================================================
  return (
    <div className=" lg:px-48 md:px-20 h-auto  w-full ">
      <div className="flex flex-col justify-center items-center pt-10 text-black px-7 pb-10 ">
        <Orders />
      </div>
    </div>
  );
};

export default page;
