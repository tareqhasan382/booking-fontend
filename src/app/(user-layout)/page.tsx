import Container from "@/components/Container";
import Feature from "@/components/Feature";
import Hero from "@/components/Hero";
import Search from "@/components/Search";
import HeroSearch from "@/components/models/HeroSearch";
import PackageCard from "@/components/package/PackageCard";

const Homepage = () => {
  return (
    <div className="lg:px-48 md:px-20  w-full text-blue-500 sm:px-3 ">
      {/* <div>
        <div className=" flex flex-row ">
          <Hero />
        </div>
      </div> */}
      {/*=========== Packages card================== */}

      <div className=" w-full ">
        <PackageCard />
      </div>
      <div className=" flex flex-col items-center justify-center text-black py-20 lg:px-20 ">
        <h1 className=" text-4xl font-extrabold mb-10 ">Why Hikings?</h1>
        <div className=" flex flex-wrap gap-5 items-center justify-around w-full sm:px-3 lg:px-2 ">
          <Feature />
          <Feature />
          <Feature />
        </div>
      </div>
    </div>
  );
};

export default Homepage;
// className=" flex flex-row items-center justify-between gap-3 md:gap-0 "
// flex flex-wrap gap-3 items-center justify-center
{
  /* <div>
          <h3>Popular Destinations</h3>
          <p>
            From historical cities to natural specteculars, come see the best to
            the world!
          </p>
        </div> */
}
