"use client";
const page = ({ params }: any) => {
  const { slug: id } = params;

  return (
    <div className=" lg:px-48 md:px-20 w-full flex flex-col items-center justify-center py-10">
      <h1>Payment Fielt</h1>
      <h1>TransactionId:{id} </h1>
    </div>
  );
};

export default page;
