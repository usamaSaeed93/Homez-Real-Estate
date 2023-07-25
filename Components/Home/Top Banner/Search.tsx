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
interface SearchItems {
  location: string;
  selectedCategory: string;
  change: number;
  sort: string;
}
const Search: React.FC = () => {
  const locations: string[] = [
    "USA",
    "Japan",
    "Canada",
    "Belgium",
    "Finland",
    "Pakistan",
    "India",
    "Italy",
  ];
  const category: string[] = ["villa", "hotel", "plaza", "restaurant"];
  const sortingOptions: string[] = [
    "Sort by Newly Added",
    "Sort by Old",
    "Sort Most Popular",
  ];
  const [open, setOpen] = useState<boolean>(false);
  const [open2, setOpen2] = useState<boolean>(false);
  const [location, setLocation] = useState<string>("Locations");
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
      selectedCategory:selectedCategory || "",
      change:change || Math.random(),
      sort:sort || ""
    }));
  };
  const handleOpen=(location:string)=>{
   setOpen((open) => !open);
   setLocation(location)
  }
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setChange(parseInt(value));
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
        <div className={`flex flex-col ${open ? "pt-20" : "pt-0"} `}>
          <div
            className=" items-start border-l border-r border-solid border-black border-opacity-25 flex flex-row justify-between gap-x-10 px-5 transition-all cursor-pointer "
            onClick={() => setOpen((open) => !open)}
          >
            <p className="text-gray-700 font-Inter text-base font-semibold leading-normal cursor-pointer">
          {location}
            </p>
            <ArrowDropDownIcon />
          </div>
          <div
            className={`w-auto ${
              open ? "flex" : " hidden"
            } h-20 overflow-y-auto flex flex-col justify-center items-center pt-3 bg-white rounded-lg shadow-lg } `}
          >
            {locations?.map((location) => {
              return (
                <p
                  className="text-bold font-Manrope text-lg py-3 cursor-pointer "
                  onClick={() => handleOpen(location)}
                >
                  {location}
                </p>
              );
            })}
          </div>
        </div>

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
                    min={0}
                    max={100}
                    value={change}
                    onChange={handleChange}
                  />
                  <span className="text-black pb-5">{change}</span>
                  <Box sx={{ minWidth: 120 ,marginTop:"30px"}}>
                    <FormControl fullWidth>
                      <InputLabel id="demo-simple-select-label">
                        Category
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        label="Category"
                      >
                        {category?.map((item, index) => {
                          return (
                            <MenuItem
                              key={index}
                              value={10}
                              onClick={() => setCategory(item)}
                            >
                              {item}
                            </MenuItem>
                          );
                        })}
                      </Select>
                    </FormControl>
                  </Box>
                  <Box sx={{ minWidth: 120,marginTop:"30px" }}>
                    <FormControl fullWidth>
                      <InputLabel id="demo-simple-select-label">
                        Sort By
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        label="Sort By"
                      >
                        {sortingOptions?.map((item, index) => {
                          return (
                            <MenuItem
                              key={index}
                              value={10}
                              onClick={() => setSort(item)}
                            >
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
