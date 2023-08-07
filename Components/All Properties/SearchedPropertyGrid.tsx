"use client";
import { useSelector } from "react-redux/es/hooks/useSelector";
import React from "react";
import { useState, useEffect } from "react";
import { SearchByLocation ,SearchByCategory,SearchByRange } from "@/utils/requests";
import { PropertyInterface } from "@/lib";
import { RootState } from "@/app/redux/services/store";
import AddTab from "../Home/FeaturedListing/AddTab";

const SearchedPropertyGrid = () => {
  const location = useSelector((state: RootState) => state.specs.country);
  const range = useSelector((state: RootState) => state.specs.range);
  const category = useSelector((state: RootState) => state.specs.category);
  const [locationData, setLocationData] = useState<PropertyInterface[]>();
  const [option,selectedOption]=useState<string>("Best Deals in Pakistan");
  useEffect(() => {
    const fetchData = async () => {
      const data:any = await SearchByLocation(location);
      setLocationData(data);
      selectedOption(`Best Property in ${location}`)
    };
    fetchData();
  }, [location]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await SearchByRange(range);
        setLocationData(data);
        selectedOption(`Best Property in Range of ${range}$`)
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [range]);
  useEffect(() => {
    const fetchData = async () => {
      const data = await SearchByCategory(category);
      setLocationData(data);
      selectedOption(`Best ${category} at Affordable Rates`)
    };
    fetchData();
  }, [category]);
console.log(locationData);
  return (
    <div className=" max-w-[1200px] m-auto">
      <p className="text-3xl py-3 text-black font-bold ">
      {option}
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 gap-y-10 max-w-[1200px] m-auto ">
      {locationData?.length !== undefined && locationData.length > 0 ? (
  locationData?.map((div: PropertyInterface, index: number) => (
    <AddTab div={div} key={index} />
  ))
) : (
  <p>The Requested Option is not currently Available. Try Searching Different.</p> 
)}

      </div>
    </div>
  );
};
export default SearchedPropertyGrid;
