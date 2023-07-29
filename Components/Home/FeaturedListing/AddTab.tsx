import React from "react";
import room from "../../../public/Images/png/Rosedwood_Hunter_Angle3-1024x503.jpg";
import SingleBedIcon from "@mui/icons-material/SingleBed";
import ShowerIcon from "@mui/icons-material/Shower";
import SquareFootIcon from "@mui/icons-material/SquareFoot";
import Image from "next/image";
import SendIcon from "@mui/icons-material/Send";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { PropertyInterface } from "@/lib";
import Link from "next/link";
interface AddTabInterface {
  div: PropertyInterface;
}
const AddTab: React.FC<AddTabInterface> = ({ div }) => {
  const { name, location, country, specifications, option, liked, id } = div;
  return (
    <div className="max-w-[300px] sm:max-w-[400px] min-h-fit  flex flex-col justify-start items-start px-4">
      <Link href={`/properties/${id}`}>
        <Image src={room} alt="room" className=" w-full rounded-lg" />
      </Link>
      <p className="text-center text-black font-medium font-Manrope text-lg pb-3">
        {name}
      </p>
      <p className="text-center text-gray-500 font-normal text-base font-Manrope pb-2">
        {location}
      </p>
      <div className="flex flex-row justify-start items-center  gap-x-5 border-b border-solid border-black border-opacity-25  w-[95%] pb-3">
        <div className="flex flex-row gap-1 justify-center items-center text-gray-500 text-sm">
          <SingleBedIcon />
          <p>{specifications.room}</p>
        </div>
        <div className="flex flex-row gap-1 justify-center items-center text-gray-500 text-sm">
          <ShowerIcon />
          <p>{specifications.bathRoom}</p>
        </div>
        <div className="flex flex-row gap-1 justify-center items-center text-gray-500 text-sm">
          <SquareFootIcon />
          <p>{specifications.area} Sqft</p>
        </div>
      </div>
      <div className="flex flex-row justify-between items-center w-full pt-3 pr-3">
        <p className="text-gray-500 text-sm">{option}</p>
        <div className="flex flex-row gap-x-2 text-gray-500 text-sm">
          <ContentCopyIcon />
          <SendIcon />
          {liked ? (
            <FavoriteIcon className="text-red-800" />
          ) : (
            <FavoriteBorderIcon />
          )}
        </div>
      </div>
    </div>
  );
};
export default AddTab;
