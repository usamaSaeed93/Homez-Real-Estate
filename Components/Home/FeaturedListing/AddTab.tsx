import React from "react";
import room from "../../../public/Images/png/Rosedwood_Hunter_Angle3-1024x503.jpg";
import SingleBedIcon from "@mui/icons-material/SingleBed";
import ShowerIcon from "@mui/icons-material/Shower";
import SquareFootIcon from "@mui/icons-material/SquareFoot";
import Image from "next/image";
import SendIcon from "@mui/icons-material/Send";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
const AddTab: React.FC = () => {
  return (
    <div className="max-w-[300px] sm:max-w-[400px] min-h-fit  flex flex-col justify-start items-start px-4">
      <Image src={room} alt="room" className=" w-full rounded-lg" />

      <p className="text-center text-black font-medium font-Manrope text-lg pb-3">
        Family Home
      </p>
      <p className="text-center text-gray-500 font-normal text-base font-Manrope pb-2">
        California City USA
      </p>
      <div className="flex flex-row justify-start items-center  gap-x-5 border-b border-solid border-black border-opacity-25  w-[95%] pb-3">
        <div className="flex flex-row gap-1 justify-center items-center text-gray-500 text-sm">
          <SingleBedIcon />
          <p>3 Beds</p>
        </div>
        <div className="flex flex-row gap-1 justify-center items-center text-gray-500 text-sm">
          <ShowerIcon />
          <p>3 Beds</p>
        </div>
        <div className="flex flex-row gap-1 justify-center items-center text-gray-500 text-sm">
          <SquareFootIcon />
          <p>3 Beds</p>
        </div>
      </div>
      <div className="flex flex-row justify-between items-center w-full pt-3 pr-3">
        <p className="text-gray-500 text-sm">For Rent</p>
        <div className="flex flex-row gap-x-2 text-gray-500 text-sm">
          <ContentCopyIcon />
          <SendIcon />
          <FavoriteBorderIcon />
        </div>
      </div>
    </div>
  );
};
export default AddTab;
