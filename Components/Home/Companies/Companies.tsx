import React from "react";
import Image from "next/image";
import icon from "../../../public/Images/svg/logoispam.svg";
import logo2 from "../../../public/Images/svg/Logo2.svg"
import logo3 from "../../../public/Images/svg/Logo 3.svg"
import logo4 from "../../../public/Images/svg/Logo 4.svg"
import logo5 from "../../../public/Images/svg/Logo 5.svg"
const Companies: React.FC = () => {
  return (
    <>
   <p className="text-center text-2xl font-Manrope font-bold px-3 py-10">Trusted by Componies which are best</p>
    <div className="flex flex-col sm:flex-row gap-5 max-w-[1200px] w-full gap-y-10  justify-evenly items-center ">
      <Image
        src={icon}
        alt="icon"
        className=" sm:max-w-[100px] max-w-[150px] "
      />
      <Image
        src={logo2}
        alt="icon"
        className=" sm:max-w-[100px] max-w-[150px] "
      />
      <Image
        src={logo3}
        alt="icon"
        className=" sm:max-w-[100px] max-w-[150px] "
      />
      <Image
        src={logo4}
        alt="icon"
        className=" sm:max-w-[100px] max-w-[150px] "
      />
      <Image
        src={logo5}
        alt="icon"
        className=" sm:max-w-[100px] max-w-[150px] "
      />
    </div>
    </>
  );
};
export default Companies;