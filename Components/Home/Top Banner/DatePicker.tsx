"use client";
import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import TuneIcon from "@mui/icons-material/Tune";
import PowerInputIcon from "@mui/icons-material/PowerInput";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
const AirbnbCalendar = () => {
  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);

  return (
    <div className=" flex m-auto justify-center lg:hidden">
      <div className="airbnb-calendar bg-white gap-x-10 gap-y-10 max-w-[300px] w-full px-10 py-10 rounded-xl shadow-2xl m-auto mt-5 overflow-hidden ">
        <div className="flex flex-row gap-x-3  justify-start items-start w-1/2 ">
          <p className="text-gray-700 font-Inter text-xs font-semibold leading-normal">
            <PowerInputIcon />
          </p>
          <input
            type="text"
            placeholder="Enter Keywords"
            className="text-gray-400 font-Inter text-base font-normal leading-normal w-[200px] border-none outline-none justify-center items-center"
          />
        </div>

        <div className="flex flex-row  justify-center items-center gap-5 pl-10 pt-10 pb-5">
        <div className=" items-start  flex flex-row justify-between gap-x-10 px-5">
          <p className="text-gray-700 font-Inter text-base font-semibold leading-normal">
            Appartments
          </p>
          <ArrowDropDownIcon />
        </div>
        </div>

        <div className=" flex flex-row justify-center items-center font-white font-normal text-base gap-x-10 mt-4">
          <TuneIcon />
          <p>Advanced</p>
          <button className="flex justify-center items-center bg-carrot rounded-full w-10 h-10 p-2">
            <SearchIcon sx={{ color: "#fff", fontSize: "25px" }} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default AirbnbCalendar;
