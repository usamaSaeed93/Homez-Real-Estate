"use client";
import React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { useDispatch } from "react-redux";
import {
  changeCountry,
  changeRange,
  changeCategory,
  sortingOption,
} from "@/app/redux/features/slice";
function SideBar() {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setChange(parseInt(value));
    dispatch(changeRange(parseInt(value)));
  };
  const dispatch = useDispatch();
  const [selectedCategory, setCategory] = useState<string>();
  const handleChange3 = (event: SelectChangeEvent) => {
    setCategory(event.target.value as string);
    dispatch(changeCategory(event.target.value));
  };
  const handleChange4 = (event: SelectChangeEvent) => {
    setLocation(event.target.value as string);
    dispatch(changeCountry(event.target.value));
  };
  const [location, setLocation] = useState<string>("location");
  const category: string[] = [
    "Villa",
    "Appartment",
    "Home",
    "TownHome",
    "FarmHouse",
  ];
  const locations: string[] = [
    "Lahore",
    "Gujranwala",
    "Rawalpindi",
    "Islamabad",
    "Kasur",
  ];
  const [change, setChange] = useState<number>(20);
  return (
    <>
      <div className="flex flex-col justify-start items-center w-full max-w-[250px]">
        <Box sx={{ minWidth: 220 }} className="border-none">
          <FormControl fullWidth className="border-none hover:border-none">
            <InputLabel id="demo-simple-select-label">Cities</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={location}
              label="Location"
              onChange={handleChange4}
              className="border-none"
            >
              {locations?.map((item, index) => {
                return (
                  <MenuItem key={index} value={item}>
                    {item}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>
        </Box>
        <div className="flex flex-col"></div>

        <Box sx={{ minWidth: 220, marginTop: "30px" }}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Category</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={selectedCategory}
              label="Catefory"
              onChange={handleChange3}
            >
              {category?.map((item, index) => {
                return (
                  <MenuItem key={index} value={item}>
                    {item}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>
        </Box>
        <div>
          <label htmlFor="input"> Range : </label>
          <input
            type="range"
            className="w-1/2 m-auto"
            min={1000}
            max={10000}
            value={change}
            onChange={handleChange}
          />
          <span className="text-black pb-5">{change + "$"}</span>
        </div>
      </div>
    </>
  );
}
export default SideBar;
