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
      {/* <div className=" flex items-center justify-between h-full px-4 w-full bg-black text-whites ">
        
      </div> */}
      <footer className=" lg:px-48 md:px-20 w-full flex items-center justify-around  ">
        <div className=" w-full bg-slate-400 ">
          {/* grid items-center  grid-cols-2 gap-8 py-12 md:grid-cols-3 lg:grid-cols-4 */}
          <div className=" flex flex-row  items-center justify-center ">
            {SITEMAP.map(({ title, links }, key) => (
              <div key={key} className=" w-full ">
                <div className="mb-4 font-bold uppercase">{title}</div>
                <ul className="space-y-1">
                  {links.map((link, key) => (
                    <div key={key} className="font-normal">
                      <Link
                        href="/"
                        className="inline-block py-1 pr-2 transition-transform hover:scale-105"
                      >
                        {link}
                      </Link>
                    </div>
                  ))}
                </ul>
              </div>
            ))}
          </div>
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
