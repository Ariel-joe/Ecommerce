import React from "react";
import { Outlet } from "react-router";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";

const App = () => {
  return (
    <>
      <div className="mx-2 sm:mx-8">
        <div>
          <Navbar />
        </div>

        <div className="mx-4 sm:mx-10">
          <Outlet />

          <Footer />
        </div>
      </div>
    </>
  );
};

export { App };
