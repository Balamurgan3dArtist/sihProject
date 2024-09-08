import React from "react";
import { RiAccountCircleFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { IoIosAddCircle } from "react-icons/io";
import { IoMdAnalytics } from "react-icons/io";
import { Topbar } from "./Topbar";

export const Profile = () => {
  return (
    <>
    <Topbar/>
      <h1 className="text-4xl mt-10">My Profile</h1>
      
      <div className="flex flex-col items-center m-5 ">
        <div className="flex items-center gap-6">
          <RiAccountCircleFill className="text-9xl text-blue-500" />
          <div className="flex flex-col gap-2">
            <h1 className="text-2xl font-semibold">Seller Name</h1>
            <h1 className="text-xl text-gray-600">Region</h1>
          </div>
        </div>
        
        {/* Mobile View Links Under Region */}
        <div className="lg:hidden flex flex-col items-center gap-4 mt-4 w-full px-4">
          <div className="flex flex-wrap justify-around items-center w-full">
            <Link to="/product" className="flex items-center gap-2 text-black hover:text-lime-500">
              <MdOutlineProductionQuantityLimits className="text-2xl" />
              <span className="text-xl  sm:text-3xl md:text-4xl">Product</span>
            </Link>
            <Link to="/addproduct" className="flex items-center gap-2 text-black hover:text-lime-500">
              <IoIosAddCircle className="text-2xl" />
              <span className="text-xl  sm:text-3xl md:text-4xl">AddProduct</span>
            </Link>
            <Link to="/analytics" className="flex items-center gap-2 text-black hover:text-lime-500">
              <IoMdAnalytics className="text-2xl" />
              <span className="text-xl  sm:text-3xl md:text-4xl">Analytics</span>
            </Link>
          </div>
        </div>
      </div>
      
      <div className="flex flex-col items-start flex-wrap gap-6 mt-8 px-4 mb-16 lg:px-0">
        <div className="bg-slate-100 w-full p-8 rounded-3xl shadow-lg">
          <div className="flex flex-col gap-2">
            <h1 className="text-2xl font-semibold">My Orders</h1>
            <p>Total number of orders</p>
          </div>
        </div>
        <div className="bg-slate-100 w-full p-8 rounded-3xl shadow-lg">
          <div className="flex flex-col gap-2">
            <h1 className="text-2xl font-semibold">Shopping Address</h1>
            <p>Address</p>
          </div>
        </div>
        <div className="bg-slate-100 w-full p-8 rounded-3xl shadow-lg">
          <div className="flex flex-col gap-2">
            <h1 className="text-2xl font-semibold">Payment Method</h1>
            <p>Payment details</p>
          </div>
        </div>
        <div className="bg-slate-100 w-full p-8 rounded-3xl shadow-lg">
          <div className="flex flex-col gap-2">
            <h1 className="text-2xl font-semibold">Settings</h1>
            <p>Settings</p>
          </div>
        </div>
      </div>
    </>
  );
};
