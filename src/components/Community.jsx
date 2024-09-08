import React from "react";
import { RiAccountCircleFill } from "react-icons/ri";
import { Topbar } from "./Topbar";

export const Community = () => {
  const handleCreateBulkOrder = () => {
    // Function to handle the bulk order creation
    alert("Bulk Order!");
 
  };

  return (
    <>
      <Topbar />
      <div className="flex flex-col mb-20 items-center gap-8 mt-10 px-4 lg:px-0">
        <div className="flex flex-wrap justify-between items-center w-full max-w-screen-lg">
          <h1 className="text-3xl font-bold mb-4 text-start">Communities</h1>
          {/* Create Bulk Order Button */}
          <button
            className="bg-[#005d28] text-white py-2 px-4 rounded-lg hover:bg-lime-500 transition duration-300"
            onClick={handleCreateBulkOrder}
          >
            Create Bulk Order
          </button>
        </div>
        <div className="flex flex-wrap justify-center gap-8">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item, index) => (
            <div
              key={index}
              className="bg-slate-200 w-full max-w-full p-6 rounded-3xl shadow-lg flex items-center gap-6"
            >
              <RiAccountCircleFill className="text-6xl text-[#000000]" />
              <div className="flex flex-col gap-2">
                <h2 className="text-xl font-semibold">Community name</h2>
                <p className="text-gray-600">Total Members</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
