"use client";
import {  useSelector } from "react-redux/es/hooks/useSelector";
import React from "react";
import { useState, useEffect } from "react";
import { SearchByLocation } from "@/utils/requests";
import { PropertyInterface } from "@/lib";
import { RootState } from "@/app/redux/services/store";
import AddTab from "../Home/FeaturedListing/AddTab";


const SearchedPropertyGrid = () => {
  const location = useSelector((state: RootState) => state.specs.country);
  const [locationData, setLocationData] = useState<PropertyInterface[]>();
  useEffect(() => {
    const fetchData = async () => {
      const data = await SearchByLocation(location);
      setLocationData(data);
    };
    fetchData();
  }, [location]);

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 gap-y-10 max-w-[1200px] m-auto mt-96">
        {locationData?.map((div: PropertyInterface, index: number) => (
          <AddTab div={div} />
        ))}
      </div>
    </div>
  );
};
export default SearchedPropertyGrid;
