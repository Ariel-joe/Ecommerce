import React from "react";
import { assets } from "../assets/assets";
const Navbar = () => {
  return (
    <div className="flex items-center py-2 px-[4%] justify-between">
      <img className="w-[80px] sm:w-[6%]" src={assets.primaryLogo} alt="" />
      <button className="bg-black text-white py-2 px-4 sm:px-8 sm:py-2 text-sm sm:text-base">Log Out</button>
    </div>
  );
};

export default Navbar; 
