import React from "react";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import CountryTab from "./CountryTab";
import DivCarousel from "./Carousel";
const Countries: React.FC = () => {
  return (
    <div className="flex flex-col max-w-[1000px] m-auto overflow-x-hidden mt-10">
      <div className="flex flex-row justify-between items-center max-w-[1000px] m-auto w-full">
        <div>
          <p className="font-bold font-Manrope text-3xl text-black">
            Explore Cities
          </p>
          <p className="font-medium font-Manrope text-xl text-black">
            Lorem ipsum dolor sit amet.
          </p>
        </div>
      </div>
<div className="flex flex-col gap-10 sm:flex-row mt-10 m-auto overflow-x-hidden">
<DivCarousel />

</div>

    </div>
  );
};
export default Countries;