import RegisterModel from "@/components/RegisterModel";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login Page",
};

const Register = () => {
  return (
    <>
      <RegisterModel />
    </>
  );
};

export default Register;
