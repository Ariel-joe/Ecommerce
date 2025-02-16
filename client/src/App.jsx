import React from "react";
import { Outlet } from "react-router";
import { Navbar } from "./components/Navbar";

const App = () => {
  return (
    <>
      <div>
        <Navbar />
      </div>

      <div>
        <Outlet />
      </div>
    </>
  );
};

export { App };
