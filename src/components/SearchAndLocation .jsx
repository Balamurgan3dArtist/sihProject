import React from "react";
import { FaSearch, FaMapMarkerAlt } from "react-icons/fa";

const SearchAndLocation = () => {
  return (
    <div className="flex  p-4">
      {/* Search Bar */}
      <div className="relative flex-1">
        <input
          type="text"
          placeholder="Search..."
          className="w-full  pl-20 pr-4 py-2 border bg-zinc-100 border-gray-300 rounded-l-3xl focus:outline-none focus:border-green-500"
        />
        <div className="absolute top-1 left-10 mt-2 ml-3 text-gray-500">
          <FaSearch />
        </div>
      </div>
      {/* Location Input */}
      <div className="relative flex-1">
        <input
          type="text"
          placeholder="Enter location..."
          className="w-full pl-20 pr-4 py-2 border bg-zinc-100  border-gray-300 rounded-r-3xl focus:outline-none focus:border-green-500"
        />
        <div className="absolute top-1 left-10 mt-2 ml-3 text-gray-500">
          <FaMapMarkerAlt />
        </div>
      </div>
    </div>
  );
};

export default SearchAndLocation;
