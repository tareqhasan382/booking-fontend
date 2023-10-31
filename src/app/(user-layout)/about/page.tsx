import Package from "@/components/view/Package";

const page = () => {
  return (
    <div className=" bg-red-200 flex-col items-center justify-center">
      <div>
        <h1>Package page</h1>
      </div>
      <div className=" bg-green-200 flex flex-wrap items-center justify-center pt-10 gap-2 ">
        <Package />
      </div>
    </div>
  );
};

export default page;
