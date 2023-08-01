"use client";
import SearchIcon from "@mui/icons-material/Search";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import PowerInputIcon from "@mui/icons-material/PowerInput";
import TuneIcon from "@mui/icons-material/Tune";
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

interface SearchItems {
  location: string;
  selectedCategory: string;
  change: number;
  sort: string;
}

const Search: React.FC = () => {
  const dispatch = useDispatch();
  const locations: string[] = [
    "Belgium",
    "Finland",
    "Pakistan",
    "India",
    "Italy",
    "United States",
    "Japan",
    "Canada",
  ];
  const category: string[] = ["Villa", "Appartment", "Home", "TownHome","FarmHouse"];
  const sortingOptions: string[] = [
    "Sort by Newly Added",
    "Sort by Old",
    "Sort Most Popular",
  ];
  const [open, setOpen] = useState<boolean>(false);
  const [open2, setOpen2] = useState<boolean>(false);
  const [location, setLocation] = useState<string>("location");
  const [change, setChange] = useState<number>(20);
  const [selectedCategory, setCategory] = useState<string>();
  const [sort, setSort] = useState<string>();
  const [searchOptions, setSearchoptions] = useState<SearchItems>({
    location: "",
    selectedCategory: "",
    change: 1,
    sort: "",
  });

  const handleSearch = () => {
    setSearchoptions((prev) => ({
      ...prev,
      location: location || "",
      selectedCategory: selectedCategory || "",
      change: change || Math.random(),
      sort: sort || "",
    }));
  };
  const handleOpen = (location: string) => {
    setOpen((open) => !open);
    setLocation(location);
  };
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setChange(parseInt(value));
    dispatch(changeRange(parseInt(value)));
  };
  const handleChange2 = (event: SelectChangeEvent) => {
    setSort(event.target.value as string);
    dispatch(sortingOption(event.target.value));
  };
  const handleChange3 = (event: SelectChangeEvent) => {
    setCategory(event.target.value as string);
    dispatch(changeCategory(event.target.value));
  };
  const handleChange4 = (event: SelectChangeEvent) => {
    setLocation(event.target.value as string);
    dispatch(changeCountry(event.target.value));
  };
  return (
    <div className="max-w-[1000px] absolute z-10 top-[-1%] left-1/2  transform -translate-x-1/2 -translate-y-1/2 w-full h-20 lg:flex flex-col md:flex-row justify-center border-r border-solid border-white shadow-[0px_25px_50px_0px_rgba(0, 0, 0, 0.05)] items-center m-auto bg-white shadow-lg rounded-[30px] gap-x-5 hidden">
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
      <div className="flex flex-row justify-center items-center">
        <Box sx={{ minWidth: 120 }} className="border-none">
          <FormControl fullWidth className="border-none hover:border-none">
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

        <div>
          <div className=" flex flex-row justify-center items-center font-white font-normal text-base gap-x-10 ">
            <div className="flex flex-col items-baseline relative">
              <TuneIcon
                onClick={() => setOpen2((open2) => !open2)}
                className="cursor-pointer"
              />
              <div
                className={`w-72 h-max bg-white absolute top-[250%] rounded-xl shadow-xl p-5  ${
                  open2 ? "flex" : "hidden"
                }`}
              >
                <div className="gap-4">
                  <label htmlFor="input"> Range : </label>
                  <input
                    type="range"
                    className="w-1/2 m-auto"
                    min={1000}
                    max={10000}
                    value={change}
                    onChange={handleChange}
                  />
                  <span className="text-black pb-5">{change}</span>
                  <Box sx={{ minWidth: 120, marginTop: "30px" }}>
                    <FormControl fullWidth>
                      <InputLabel id="demo-simple-select-label">
                        Category
                      </InputLabel>
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
                </div>
              </div>
            </div>
            <p>Advanced</p>
            <button
              className="flex justify-center items-center bg-carrot rounded-full w-10 h-10 p-2"
              onClick={handleSearch}
            >
              <SearchIcon sx={{ color: "#fff", fontSize: "25px" }} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Search;
