import ClientOnly from "@/components/ClientOnly";
import AllOrders from "@/components/dashboard/AllOrders";

const page = () => {
  return (
    <div>
      <h1>Order List</h1>
      <div>
        <ClientOnly>
          <AllOrders />
        </ClientOnly>
      </div>
    </div>
  );
};

export default page;
