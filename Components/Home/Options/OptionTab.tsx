import React from "react";
import HomeIcon from "@mui/icons-material/Home";
const OptionTile= () => {
  return (
    <div className="max-w-[150px] w-full h-40 rounded-3xl bg-white shadow-lg  justify-center items-start flex flex-col" >
      <div className="flex flex-col justify-center items-start ml-7">
        <div className="w-14 h-14 rounded-full bg-[#ee7665] justify-center items-center flex">
          <HomeIcon className="text-white text-center" />
        </div>
        <p className="text-sm font-Manrope font-semibold text-black pb-1 pt-5 ">Houses</p>
        <p className="text-sm font-Manrope font-medium text-black ">839 Properties</p>
      </div>
    </div>
  );
};
export default OptionTile;