import React from "react";
import { Outlet } from "react-router";
import { Navbar } from "./components/Navbar";

const App = () => {
  return (
    <>
      <div className="mx-8">
        <div>
          <Navbar />
        </div>

        <div className="mx-4 sm:mx-10">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export { App };
