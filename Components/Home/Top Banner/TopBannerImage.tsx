import React from "react";
import Search from "./Search";
import DatePicker from "./DatePicker";
import OptionTile from "../Options/OptionTile";
import Options from "../Options/Options";
import Carousel from './Carousel'
const TopBannerImage: React.FC = () => {
  return (
    <div className="relative mb-20 ">
      <Search />
      <DatePicker />
      <div className="w-[85%] m-auto min-h-[550px] h-full  bg-banner bg-no-repeat bg-cover border border-solid border-white relative">
        <div className="absolute left-1/2 top-1/4 transform -translate-x-1/2 -translate-y-1/2 ">
          <p className="font-Manrope font-bold text-white text-6xlxl sm:text-3xl px-3 text-center">
            Find Your Dream Home
          </p>
          <p className="font-Manrope font-medium text-lg  text-white text-center pt-5">
            Lets Find a home that's Perfect for you
          </p>
        </div>
        <div className="absolute top-[85%] w-full md:flex hidden">
          <div className="w-full">
            <Options />
          </div>
        </div>
        <div className="absolute top-[85%] w-full flex md:hidden">
          <div className="w-full">
           <Carousel />
          </div>
        </div>
      </div>
    </div>
  );
};
export default TopBannerImage;
