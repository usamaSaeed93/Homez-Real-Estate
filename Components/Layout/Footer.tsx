"use client";
import React from "react";
import AppleIcon from "@mui/icons-material/Apple";
import ShopIcon from "@mui/icons-material/Shop";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";

export default function Footer() {
  return (
    <div className=" bg-black w-full flex justify-center items-center mt-20 pb-10">
      <div className="max-w-[1000px] text-white flex flex-col md:flex-row justify-between items-center md:gap-x-10 lg:gap-x-40 px-5">
        <div>
          <div className="">
            <p className="font-bold font-Manrope text-lg py-10">Homez</p>
            <div className="flex flex-row gap-x-9">
              <div>
                <p className="text-gray-500">Total Free Customer Care</p>
                <p>+03 236 483539</p>
              </div>
              <div>
                <p className="text-gray-500">Live Free Customer Support</p>
                <p>@example.com</p>
              </div>
            </div>
          </div>
          <div className="my-7">
            <p className="font-bold">Apps</p>
            <div className="flex flex-row gap-x-10 mt-4">
              <div className="max-w-[200px] min-h-[70px] bg-[#222328] rounded-xl flex flex-row justify-between items-center p-3 gap-2">
                <AppleIcon />
                <p>Get it on AppStore</p>
              </div>
              <div className="max-w-[200px] min-h-[70px] bg-[#222328] rounded-xl flex flex-row justify-between items-center p-3 gap-2">
                <ShopIcon />
                <p>Get it on PlayStore</p>
              </div>
            </div>
          </div>
          <div>
            <p className="text-gray-500 pt-10 pb-5">
              Follow u on our Social Media Platforms
            </p>
            <div className="flex flex-row gap-x-4">
              <FacebookOutlinedIcon />
              <LinkedInIcon />
              <InstagramIcon />
              <TwitterIcon />
            </div>
          </div>
        </div>
        <div>
          <div className="flex flex-col gap-y-5 my-5">
            <p>Keep Yourself Up To Date</p>
            <div>
              <input
                type="text"
                placeholder="Enter Email"
                className="bg-[#222328] w-[45%] text-white h-14  rounded-ss-lg px-4 outline-none"
              />
              <button className="bg-[#222328] justify-center items-center w-28 h-14 rounded-ee-lg ">
                Subscribe
              </button>
            </div>
          </div>
          <div className="flex flex-row w-full justify-between items-start">
            <div className=" hidden md:flex flex-col gap-5 ">
              <p className="text-white dark:text-light  font-medium font-roboto">
                Company
              </p>
              <p className="text-gray-500 dark:text-light   font-normal font-roboto ">
                Home
              </p>
              <p className="text-gray-500 dark:text-light   font-normal font-roboto ">
                Connect
              </p>
              <p className="text-gray-500 dark:text-light   font-normal font-roboto ">
                Pricing
              </p>
            </div>
            <div className="hidden md:flex flex-col gap-5">
              <p className="text-white dark:text-light  font-medium font-roboto">
                Connect
              </p>
              <p className="text-gray-500 dark:text-light   font-normal font-roboto ">
                Home
              </p>
              <p className="text-gray-500 dark:text-light   font-normal font-roboto ">
                Pricing
              </p>
              <p className="text-gray-500 dark:text-light   font-normal font-roboto ">
                About
              </p>
              <p className="text-gray-500 dark:text-light   font-normal font-roboto ">
                Aliquet et.
              </p>
            </div>
            <div className="hidden md:flex flex-col gap-5">
              <p className="text-white dark:text-light  font-medium font-roboto">
                Experts
              </p>
              <p className="text-gray-500 dark:text-light   font-normal font-roboto ">
                Our Community
              </p>
              <p className="text-gray-500 dark:text-light   font-normal font-roboto ">
                Facebook
              </p>
              <p className="text-gray-500 dark:text-light   font-normal font-roboto ">
                Blog
              </p>
              <p className="text-gray-500 dark:text-light   font-normal font-roboto ">
                Contact us
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
