import { getBaseUrl } from "@/helpers/config/envConfig";

const DetailsPage = async ({ params }: { params: { slug: string } }) => {
  const res = await fetch(`${getBaseUrl()}/trips/${params.slug}`, {
    cache: "no-store",
  });
  const { data } = await res.json();
  return (
    <div className=" flex items-center justify-center ">
      <div>
        <h1> Details page={params.slug} </h1>
        <div>
          <p>Title : {data?.title}</p>
          <p>Title : {data?.description}</p>
          <p>Category : {data?.category}</p>
          <p>Room : {data?.roomCount}</p>
          <p>Washroom : {data?.bathroomCount}</p>
          <p>Guest : {data?.guestCount}</p>
          <p>Location : {data?.locationValue}</p>
          <p>Cost : {data?.price}</p>
          <button>Add To Card</button>
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;
