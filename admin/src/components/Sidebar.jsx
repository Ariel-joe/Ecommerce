import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileArrowUp } from "@fortawesome/free-solid-svg-icons";
import { faList } from "@fortawesome/free-solid-svg-icons";
import { faMoneyCheck } from "@fortawesome/free-solid-svg-icons";

const Sidebar = () => {
  return (
    <div className="w-[14%] sm:w-[16%] min-h-screen border-r-2">
      <div className="flex flex-col gap-1 pt-6 text-[15px]">
        <NavLink
          className="flex items-center gap-3 px-3 py-2 sm:py-4"
          to="/add"
        >
          <FontAwesomeIcon icon={faFileArrowUp} size="xl" />
          <p className="hidden md:block">Add Items</p>
        </NavLink>

        <NavLink
          className="flex items-center gap-3 px-3 py-2 sm:py-4"
          to="/list"
        >
            <FontAwesomeIcon icon={faList} size="xl" />
          <p className="hidden md:block">List Items</p>
        </NavLink>

        <NavLink
          className="flex items-center gap-3 px-3 py-2 sm:py-4"
          to="/orders"
        >
            <FontAwesomeIcon icon={faMoneyCheck} size="xl" />
          <p className="hidden md:block">Orders</p>
        </NavLink>
      </div>
    </div>
  );
};

export default Sidebar;
