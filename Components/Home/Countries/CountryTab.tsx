import React from "react";
import Image from "next/image";
import map from "../../../public/Images/png/map.webp";
import GpsFixedIcon from '@mui/icons-material/GpsFixed';
export default function CountryTab() {
  return (
    <div className="max-w-[300px] sm:max-w-[300px] max-h-fit  flex flex-col justify-start items-start px-4 ">
      <div className="relative">
      <Image src={map} alt="map"  className="max-h-[200px] rounded-3xl"/>
  <div className="absolute inset-0 bg-white opacity-25"></div>
  <div className="absolute  top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
<GpsFixedIcon className="text-3xl"/>
  </div>
</div>
      <p className="text-center text-black font-medium font-Manrope text-lg pt-3">
       Los Angeles
      </p>
      <p className="text-center text-gray-500 font-normal text-base font-Manrope pb-2">
        12 Properties
      </p>
    </div>
  );
}
