import React from "react";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import Carousel from "./Carousel";
import AddTab from "./AddTab";
const FeaturedListing: React.FC = () => {
  const carouselItems: React.FC<{}>[] = [AddTab, AddTab, AddTab];

  return (
    <div className="flex flex-col overflow-hidden ">
      <div className="flex flex-row justify-between items-center max-w-[1000px] m-auto w-full">
        <div className="pb-10">
          <p className="font-bold font-Manrope text-xl md:text-3xl text-black">
            Discover our Featured Listing
          </p>
          <p className="font-medium font-Manrope text-base md:text-xl text-black">
            list f all the new featured listing products are available
          </p>
        </div>
        <button className="flex flex-row justify-center items-center w-max h-14 text-black border border-white border-solid p-4 rounded-[20px]">
          See All Properties <ArrowOutwardIcon />
        </button>
      </div>
      <Carousel />
    </div>
  );
};
export default FeaturedListing;
