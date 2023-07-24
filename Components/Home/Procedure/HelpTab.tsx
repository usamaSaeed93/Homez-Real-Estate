import React from "react";
import img from "../../../public/Images/png/treehouse-removebg-preview.png";
import Image from "next/image";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
export default function HelpTab() {
  return (
    <div className="flex flex-col justify-center items-center max-w-[350px] h-[380px] shadow-lg w-full gap-y-6 bg-white">
      <Image src={img} alt="image" className="w-40 h-auto" />
      <p className="max-w-[250px] text-center text-sm font-Manrope ">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo, veritatis.
      </p>
      <button className="flex flex-row justify-center items-center w-max h-10 text-carrot border border-carrot border-solid p-4 rounded-lg">
        Find a Home <ArrowOutwardIcon />
      </button>
    </div>
  );
}
