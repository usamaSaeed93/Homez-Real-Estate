"use client"
import React from "react";
import Image from "next/image";
import Link from "next/link";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import { Drawer } from "@mui/material";
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useRouter } from "next/navigation";

const Navbar: React.FC = () => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const router=useRouter();
  const handleClose = () => {
    localStorage.removeItem("token");
    setAnchorEl(null);
    router.push('/log-in');
  };
  return (
    <div className="flex max-w-[1400px] flex-row bg-darkBlue justify-between items-center  h-20  w-full m-auto">
      <Link href="/" className="cursor-pointer">
        <p className="font-bold font-Manrope text-xl text-white pr-4 flex lg:hidden cursor-pointer ">
          Homez
        </p>
      </Link>
      <div className="lg:flex flex-row justify-center items-center hidden">
        {/* <Image src="" alt="homez" /> */}
        <p className="font-bold font-Manrope text-xl text-white pr-4">Homez</p>
        <div className="lg:flex flex-row hidden">
          <Link
            href="/"
            className="flex flex-row justify-center items-center gap-2 text-white"
          >
            Home <ArrowDropDownIcon />
          </Link>
          <Link
            href="/"
            className="flex flex-row justify-center items-center gap-2 text-white"
          >
            Layouts <ArrowDropDownIcon />
          </Link>
          <Link
            href="/"
            className="flex flex-row justify-center items-center gap-2 text-white"
          >
            Collections <ArrowDropDownIcon />
          </Link>
          <Link
            href="/"
            className="flex flex-row justify-center items-center gap-2 text-white"
          >
            Property <ArrowDropDownIcon />
          </Link>
          <Link
            href="/"
            className="flex flex-row justify-center items-center gap-2 text-white"
          >
            Blogs <ArrowDropDownIcon />
          </Link>
        </div>
      </div>

      <div className="lg:flex flex-row justify-center items-center gap-x-7 hidden">
        <div className="flex flex-row gap-3 text-white">
          <LocalPhoneIcon />2 901 901 901
        </div>
        <div className="flex flex-row gap-3 text-white">
        
          <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
      <AccountCircleIcon />
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}>LogOut</MenuItem>
      </Menu>
        </div>
        <Link href="/create-property">
          <button className="flex flex-row justify-center items-center w-max h-14 text-white border border-white border-solid p-4 rounded-[20px]">
            Add Property <ArrowOutwardIcon />
          </button>
        </Link>
      </div>

      <button className="flex flex-row justify-center items-center w-max h-14 text-white border border-white border-solid p-4 rounded-[20px] lg:hidden">
        Add Property <ArrowOutwardIcon />
      </button>
      <Drawer />
    </div>
  );
};
export default Navbar;
