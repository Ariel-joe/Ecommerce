import React from "react";
import { assets } from "../assets/assets";
import { Link } from "react-router";
import { CiSearch, CiUser } from "react-icons/ci";

const Navbar = () => {
  return (
    <>
      <div className="flex items-center justify-between py-5 font-medium">
        <img src={assets.primaryLogo} className="w-20" alt="kladi outfit logo" />

        <ul className="hidden sm:flex gap-5 text-sm text-gray-700">

            <Link to={"/"} className="flex flex-col items-center gap-1">
              <p>HOME</p>
              <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
            </Link>

            <Link to={"/collection"} className="flex flex-col items-center gap-1">
              <p>COLLECTION</p>
              <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
            </Link>

            <Link to={"/about"} className="flex flex-col items-center gap-1">
              <p>ABOUT</p>
              <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
            </Link>

            <Link to={"/contact"} className="flex flex-col items-center gap-1">
              <p>CONTACT</p>
              <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
            </Link>

        </ul>


        <div className="flex items-center gap-6">
          <CiSearch size={28} className="cursor-pointer" />

          <div className="group relative">
            <CiUser size={28} className="cursor-pointer" />
            <div className="group-hover:block hidden absolute dropdown-menu right-0 pt-4">
              <div className="flex flex-col gap-2">

              </div>
            </div> 

          </div>

        </div>

      </div>
    </>
  );
};

export { Navbar };
