import { isLoggedIn } from "@/utils/auth.service";

const DashBoardPage = () => {
  console.log(isLoggedIn());

  return (
    <div>
      <h3 className=" text-centers "> This is DashBoard</h3>
    </div>
  );
};
export default DashBoardPage;
