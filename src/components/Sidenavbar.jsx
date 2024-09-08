import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HiMenuAlt3 } from "react-icons/hi";
import { FaHome, FaSearch } from "react-icons/fa";
import { FaPeopleGroup } from "react-icons/fa6";
import { RiAccountCircleFill } from "react-icons/ri";
import { MdOutlineProductionQuantityLimits } from "react-icons/md";
import { IoIosAddCircle, IoMdAnalytics } from "react-icons/io";

export const Sidenavbar = () => {
  const allMenuItems = [
    { name: "Home", link: "/", icon: FaHome },
    { name: "Search", link: "/search", icon: FaSearch },
    { name: "Community", link: "/community", icon: FaPeopleGroup },
    { name: "Profile", link: "/profile", icon: RiAccountCircleFill },
    {
      name: "Product",
      link: "/product",
      icon: MdOutlineProductionQuantityLimits,
    },
    { name: "AddProduct", link: "/addproduct", icon: IoIosAddCircle },
    { name: "Analytics", link: "/analytics", icon: IoMdAnalytics },
  ];

  // Mobile view menu items
  const mobileMenuItems = allMenuItems.filter((item) =>
    ["Home", "Search", "Community", "Profile"].includes(item.name)
  );

  const [open, setOpen] = useState(true);

  return (
    <div>
      {/* Desktop Sidebar */}
      <div
        className={`hidden lg:flex flex-col gap-6 ${
          open ? "w-72" : "w-16"
        } bg-[#005d28] min-h-screen text-[#ffffff] px-4 drop-shadow-lg duration-500`}
      >
        <div className="py-3 flex justify-end">
          <HiMenuAlt3
            size={26}
            className="cursor-pointer"
            onClick={() => setOpen(!open)}
          />
        </div>
        <div className="mt-4 flex flex-col gap-4 relative">
          {allMenuItems.map((item, i) => (
            <Link
              to={item.link}
              key={i}
              className="group flex items-center text-lg gap-3.5 font-medium p-1 hover:bg-[#f7f7f725] rounded-md"
            >
              <div>{React.createElement(item.icon, { size: "20" })}</div>
              <h2
                style={{ transitionDelay: `${i + 3}00ms` }}
                className={`whitespace-pre duration-300 ${
                  !open && "opacity-0 translate-x-28 overflow-hidden"
                } text-[#ffffff]`}
              >
                {item.name}
              </h2>
              <h2
                className={`${
                  open && "hidden"
                } absolute left-28 bg-white font-semibold text-gray-900 rounded-md drop-shadow-lg px-0 py-0 w-0 overflow-hidden group-hover:px-2 group-hover:py-1 group-hover:left-14 group-hover:duration-300 group-hover:w-fit`}
              >
                {item.name}
              </h2>
            </Link>
          ))}
        </div>
      </div>

      {/* Mobile Bottom Navbar */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 bg-[#005d28] border-t border-[#005d28] shadow-md z-50 ">
        <div className="flex justify-around items-center p-2">
          {mobileMenuItems.map((item, index) => (
            <Link
              to={item.link}
              key={index}
              className="flex flex-col items-center text-[#ffffff] hover:text-lime-500"
            >
              {React.createElement(item.icon, { size: "24" })}
              <span className="text-xs">{item.name}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
