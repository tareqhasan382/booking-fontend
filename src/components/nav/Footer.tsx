import React from "react";
import { Typography } from "@material-tailwind/react";
import Link from "next/link";

const SITEMAP = [
  {
    title: "Company",
    links: ["About Us", "Careers", "Our Team", "Projects"],
  },
  {
    title: "Help Center",
    links: ["Discord", "Twitter", "GitHub", "Contact Us"],
  },
  {
    title: "Resources",
    links: ["Blog", "Newsletter", "Free Products", "Affiliate Program"],
  },
  {
    title: "Products",
    links: ["Templates", "UI Kits", "Icons", "Mockups"],
  },
];
const currentYear = new Date().getFullYear();
interface FooterProps {
  SITEMAP: {
    title: string;
    links: string[];
  }[];
  currentYear: number;
}
const Footer: React.FC<FooterProps> = () => {
  return (
    <>
      <footer className="  bg-slate-400 w-full flex items-center justify-center  ">
        <div className=" lg:mx-48 md:mx-20 ">
          <div className="flex w-full flex-row items-center justify-center border-t border-blue-gray-50 py-4 md:flex-row md:justify-between">
            <div className="mb-4 font-normal text-center text-blue-gray-900 md:mb-0">
              &copy; {currentYear} Material Tailwind. All Rights Reserved.
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
