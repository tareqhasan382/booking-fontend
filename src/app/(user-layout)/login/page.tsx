import LoginModel from "@/components/LoginModel";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login Page",
};

const Login = () => {
  return (
    <>
      <LoginModel />
    </>
  );
};

export default Login;
