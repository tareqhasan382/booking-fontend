import AllPackages from "@/components/dashboard/AllPackages";
// import { isLoggedIn } from "@/utils/auth.service";

const DashBoardPage = () => {
  // console.log(isLoggedIn());

  return (
    <div>
      {/* <h3 className=" text-centers "> This is DashBoard</h3> */}
      <AllPackages />
    </div>
  );
};
export default DashBoardPage;
