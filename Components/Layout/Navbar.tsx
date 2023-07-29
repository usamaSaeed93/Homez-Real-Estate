import React from "react";
import Image from "next/image";
import Link from "next/link";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import { Drawer } from "@mui/material";
const Navbar: React.FC = () => {
  return (
    <div className="flex flex-row bg-darkBlue justify-between items-center px-4 h-20 max-w-[1400px] m-auto">
      <Link href="/">
        <p className="font-bold font-Manrope text-xl text-white pr-4 flex lg:hidden cursor-pointer">
          Homez
        </p>
      </Link>
      <div className="lg:flex flex-row justify-center items-center hidden">
        {/* <Image src="" alt="homez" /> */}
        <p className="font-bold font-Manrope text-xl text-white pr-4">Homez</p>
        <div className="lg:flex flex-row hidden">
          <Link
            href="/"
            className="flex flex-row justify-center items-center gap-2 text-white"
          >
            Home <ArrowDropDownIcon />
          </Link>
          <Link
            href="/"
            className="flex flex-row justify-center items-center gap-2 text-white"
          >
            Layouts <ArrowDropDownIcon />
          </Link>
          <Link
            href="/"
            className="flex flex-row justify-center items-center gap-2 text-white"
          >
            Collections <ArrowDropDownIcon />
          </Link>
          <Link
            href="/"
            className="flex flex-row justify-center items-center gap-2 text-white"
          >
            Property <ArrowDropDownIcon />
          </Link>
          <Link
            href="/"
            className="flex flex-row justify-center items-center gap-2 text-white"
          >
            Blogs <ArrowDropDownIcon />
          </Link>
        </div>
      </div>

      <div className="lg:flex flex-row justify-center items-center gap-x-7 hidden">
        <div className="flex flex-row gap-3 text-white">
          <LocalPhoneIcon />2 901 901 901
        </div>
        <div className="flex flex-row gap-3 text-white">
          <AccountCircleIcon />
          LogIn/SignUp
        </div>
        <Link href="/create-property">
          <button className="flex flex-row justify-center items-center w-max h-14 text-white border border-white border-solid p-4 rounded-[20px]">
            Add Property <ArrowOutwardIcon />
          </button>
        </Link>
      </div>

      <button className="flex flex-row justify-center items-center w-max h-14 text-white border border-white border-solid p-4 rounded-[20px] lg:hidden">
        Add Property <ArrowOutwardIcon />
      </button>
      <Drawer />
    </div>
  );
};
export default Navbar;
