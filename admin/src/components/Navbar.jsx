import React from "react";
import { assets } from "../assets/assets";
const Navbar = ({setToken}) => {
  return (
    <div className="flex items-center py-2 px-[4%] justify-between">
      <img className="w-[80px] sm:w-[4%]" src={assets.primaryLogo} alt="" />
      <button onClick={()=>setToken('')} className="bg-black text-white py-2 px-4 sm:px-8 sm:py-2 text-sm sm:text-xs">Log Out</button>
    </div>
  );
};

export default Navbar; 
