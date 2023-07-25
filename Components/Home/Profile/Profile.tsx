import React from "react";
import ProfileImages from "./ProfileImages";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
const Profile: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row max-w-[1000px] m-auto w-full justify-between items-center mx-3 mt-5">
      <ProfileImages />
      <div className="flex flex-col lg:max-w-[300px] md:max-w-[250px] max-w-[300px] gap-y-6 md:mt-0 mt-40">
        <p className="font-Manrope font-bold text-4xl">
          With us help you find your dream home.
        </p>
        <p className="font-Manrope font-medium text-base">
          As the complexity of building to increase, the field of architecture.
        </p>
        <div className="flex flex-col gap-y-2">
          <p className="font-Manrope font-bold text-4xl">400</p>
          <p className="font-Manrope font-medium text-sm">
            Award Winning Buildings
          </p>
        </div>
        <div className="flex flex-col gap-y-2">
          <p className="font-Manrope font-bold text-4xl">250+</p>
          <p className="font-Manrope font-medium text-sm"> Buildings</p>
        </div>
        <div className="flex flex-col gap-y-2">
          <p className="font-Manrope font-bold text-4xl">1K+</p>
          <p className="font-Manrope font-medium text-sm">Happy Customers</p>
        </div>
        <button className="w-40 h-12 rounded-xl bg-carrot text-white">
          See More <ArrowOutwardIcon />
        </button>
      </div>
    </div>
  );
};
export default Profile;
