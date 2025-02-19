import React from "react";
import { Title } from "../components/Title";

const PlaceOrder = () => {
  return (
    <>
      <div className="flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[80vh] border-t ">
        {/* ---------left side----------- */}
        <div className="flex flex-col gap-4 w-full sm:max-w-[480px]">
          <div className="text-xl sm:text-2xl my-3">
            <Title text1={"DELIVERY"} text2={"INFORMATION"} />

            <div className="flex gap-3 mb-4">
              <input
                className="border border-gray-300 rounded py-1.5 px-3.5 w-full text-sm"
                type="text"
                placeholder="First name"
              />
              <input
                className="border border-gray-300 rounded py-1.5 px-3.5 w-full text-sm"
                type="text"
                placeholder="Last name"
              />
            </div>

            <input
              className="border border-gray-300 rounded py-1.5 px-3.5 w-full text-sm"
              type="email"
              placeholder="email"
            />
            <input
              className="border border-gray-300 rounded py-1.5 px-3.5 w-full text-sm"
              type="text"
              placeholder="street"
            />

            <div className="flex gap-3 mb-4">
              <input
                className="border border-gray-300 rounded py-1.5 px-3.5 w-full text-sm"
                type="text"
                placeholder="City"
              />
              <input
                className="border border-gray-300 rounded py-1.5 px-3.5 w-full text-sm"
                type="text"
                placeholder="State"
              />
            </div>

            <div className="flex gap-3 mb-4">
              <input
                className="border border-gray-300 rounded py-1.5 px-3.5 w-full text-sm"
                type="number"
                placeholder="zip code"
              />
              <input
                className="border border-gray-300 rounded py-1.5 px-3.5 w-full text-sm"
                type="text"
                placeholder="Last name"
              />
            </div>
          </div>
        </div>

        {/* --------right side--------- */}
      </div>
    </>
  );
};

export { PlaceOrder };
