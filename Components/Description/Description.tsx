"use client";
import React, { useState } from "react";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import Carousel from "./Carousel";
import SingleBedIcon from "@mui/icons-material/SingleBed";
import ShowerIcon from "@mui/icons-material/Shower";
import SquareFootIcon from "@mui/icons-material/SquareFoot";
import { PropertyInterface } from "@/lib";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { RootState } from "@/app/redux/services/store";
import { useEffect } from "react";
import { SearchUser } from "@/utils/requests";
import { useRouter } from "next/navigation";
interface DesINterface {
  data: PropertyInterface;
}
const Description: React.FC<DesINterface> = ({ data }) => {
  var { name, specifications, location, description } = data;
  const createdBy = useSelector((state: RootState) => state.specs.createdBy);
  const token = localStorage.getItem("token");
  const [show, setShow] = useState<boolean>(false);
  const [firstName, setFirstName] = useState<string >("user");
  const [contactNo, setContactNo] = useState<string >("0324462835");
  const router = useRouter();
  useEffect(() => {
    async function fetchData() {
      const data = await SearchUser(createdBy);
      if (data) {
        var { firstName, email, contactNo } = data[0];
        setFirstName(firstName);
        setContactNo(contactNo);
      }
    }
    fetchData();
  }, []);
  const handleClick = async () => {
    if (token) {
      setShow(true);
    } else {
      router.push("/log-in");
    }
  };
  return (
    <div className="flex flex-col md:flex-row m-auto justify-evenly items-start md:justify-center md:items-center max-w-[1200px] my-5">
      <div className="w-1/2 mt-auto m-auto">
        <p>Property Description</p>
        <div>
          <Carousel />
        </div>
        <p className="text-3xl text-black opacity-50 pt-6">{name}</p>
        <p className="text-2xl text-black opacity-50 pt-6 pb-3">{location}</p>
        <p className="max-w-full pr-4 text-start text-sm text-normal">
          {description}
        </p>
        <div className="flex flex-row justify-start items-center  gap-x-5 border-b border-solid border-black border-opacity-25  w-[95%] pb-3 mt-10">
          <div className="flex flex-row gap-1 justify-center items-center text-gray-500 text-2xl border border-black border-opacity-25 p-3 rounded-lg">
            <SingleBedIcon
              sx={{
                fontSize: "40px",
              }}
            />
            <p> {specifications.room} Beds</p>
          </div>
          <div className="flex flex-row gap-1 justify-center items-center text-gray-500 text-2xl border border-black border-opacity-25 p-3 rounded-lg">
            <ShowerIcon
              sx={{
                fontSize: "40px",
              }}
            />
            <p> {specifications.bathRoom} Bathroom</p>
          </div>
          <div className="flex flex-row gap-1 justify-center items-center text-gray-500 text-2xl border border-black border-opacity-25 p-3 rounded-lg">
            <SquareFootIcon
              sx={{
                fontSize: "40px",
              }}
            />
            <p>{specifications.area} Sqft</p>
          </div>
        </div>
      </div>
      <div className="w-max flex flex-col justify-center items-start gap-y-5 bg-gray-100 h-max py-5 rounded-lg px-5 m-auto">
        <div className="flex flex-row justify-between items-start max-w-[350px] gap-x-10">
          <div className="flex flex-row gap-5 justify-center items-center">
            <PermIdentityIcon
              sx={{
                fontSize: "60px",
              }}
            />
            <div>
              <p>Created by : {firstName} </p>
              <p>Member Since : 2022</p>
              <button
                className="w-full px-4 py-2 text-white bg-indigo-500  hover:bg-indigo-600"
                onClick={handleClick}
              >
                {show ? contactNo : "Show Contact"}
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-y-5 bg-gray-100">
          <input
            type="text"
            placeholder="Enter Email"
            className="bg-white max-w-[250px] text-white h-14  rounded-ss-lg px-4 border border-solid border-gray-500 outline-none"
          />
          <button className="flex flex-row text-center justify-center items-center bg-carrot w-[250px] h-7 rounded-lg p-7 text-white py-5">
            Contact Us
          </button>
          <div className="flex flex-row justify-center items-center w-full h-8 border border-black border-opacity-25 p-5 rounded-lg">
            Office Timing : 9am - 9pm
          </div>
          <div className="flex flex-row justify-center items-center w-full h-8 border border-black border-opacity-25 p-5 rounded-lg">
            Sunday Timing : 9am - 9pm
          </div>
          <div className="flex flex-row justify-center items-center w-full h-8 border border-black border-opacity-25 p-5 rounded-lg">
            Weekday Timing : 9am - 9pm
          </div>
        </div>
      </div>
    </div>
  );
};

export default Description;
