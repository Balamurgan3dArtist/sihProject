import React from "react";
import SearchAndLocation from "./SearchAndLocation ";
import { Card } from "./Card";
import { Topbar } from "./Topbar";

export const Search = () => {
  return (
    <>
    <Topbar/>
    <div className="text-2xl  sm:text-3xl md:text-6xl mt-10">
          <h1>Find 
            <span className="text-green-600"> Fresh</span> and <br />
            <span className="text-red-600">Healthy</span> Product for Your Meal
          </h1>
        </div>
      <div className="relative top-10 right-4 -z-10">
        <SearchAndLocation />
      </div>
      <h1 className="text-3xl  sm:text-3xl md:text-5xl relative top-24">Search Items</h1>
      <h3 className="flex justify-center mt-52 text-1xl  sm:text-3xl md:text-5xl text-gray-500">
        no items to search
      </h3>
    </>
  );
};
