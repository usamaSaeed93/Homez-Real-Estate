import React from "react";
import Image from "next/image";
import profile1 from "../../../public/Images/png/image1.jpg";
import profile2 from "../../../public/Images/png/image2.jpg";
import SingleBedIcon from "@mui/icons-material/SingleBed";
import ShowerIcon from "@mui/icons-material/Shower";
import PlayCircleOutlineIcon from "@mui/icons-material/PlayCircleOutline";
import SquareFootIcon from "@mui/icons-material/SquareFoot";
const ProfileImages: React.FC = () => {
  return (
    <div className="relative max-w-[300px] md:max-w-[400px] max-h-[600px] w-full h-full ">
      <Image src={profile1} alt="profile" className="rounded-xl" />
      <Image
        src={profile2}
        alt="profile"
        className="absolute w-1/2 h-1/2 top-[65%] right-[-10%] border-4 rounded-xl border-white border-solid shadow-xl "
      />
      <div className="flex flex-col justify-center items-start bg-white rounded-lg p-5 absolute top-[80%] right-[20%] shadow-xl">
        <p className="text-center text-black font-medium font-Manrope text-lg ">
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
      </div>
      <div className="w-48 h-20 flex justify-between items-center flex-row bg-white absolute top-[30%] right-[-10%] rounded-lg p-5 shadow-xl">
        <div className="flex flex-row bg-black rounded-full justify-center items-center align-middle mt-1 ">
          <PlayCircleOutlineIcon className="text-white text-2xl" />
        </div>
        <p className="font-Manrope text-center font-medium text-lg">
          Watch Video
        </p>
      </div>
    </div>
  );
};
export default ProfileImages;
