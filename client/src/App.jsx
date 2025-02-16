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

        <div>
          <Outlet />
        </div>
      </div>
    </>
  );
};

export { App };
