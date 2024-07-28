import React, { useState } from "react";
import { IoBookmarksSharp } from "react-icons/io5";
import { FaHotel } from "react-icons/fa";
import { MdPerson } from "react-icons/md";
import { MdOutlineSettingsApplications } from "react-icons/md";
import { GoSignOut } from "react-icons/go";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div className="bg-blue-950 max-w-[1400px] px-3 md:px-5">
      <div className="max-w-6xl mx-auto py-5">
        <div className="flex justify-between gap-5 items-center">
          <div className="text-lg md:text-2xl lg:text-3xl font-bold md:font-black text-white">
            MyBooking.com
          </div>
          <div className="flex flex-row gap-3 md:gap-5 items-center">
            <div className="group relative flex justify-center ">
              <FaHotel className="text-white text-sm md:text-lg" />
              <div className="hidden group-hover:block absolute whitespace-nowrap text-blue-500 text-[12px] border rounded-sm px-1 bg-white -top-5">
                My Hotels
              </div>
            </div>
            <div className="group relative flex justify-center ">
              <IoBookmarksSharp className="text-white text-sm md:text-lg" />
              <div className="hidden absolute whitespace-nowrap group-hover:block text-blue-500 text-[12px] border rounded-sm px-1 -top-5 z-10 bg-white ">
                My Bookings
              </div>
            </div>
            <div className="relative group">
              <div
                className="rounded-full border-2 border-white h-7 w-7 md:h-10 md:w-10 overflow-hidden hover:cursor-pointer"
                onClick={() => setShowMenu(!showMenu)}
              >
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJjlsMCHm7Bs6JrgK7sO3hdjj9_7dHTfbdVw&s"
                  alt=""
                  className="w-full h-full object-cover"
                />
              </div>
              {showMenu && (
                <div className=" absolute flex flex-col -left-20 justify-center border shadow-md py-3 bg-white rounded-sm">
                  <div className="flex flex-row items-center gap-2 py-2 px-3 transition duration-200 hover:cursor-pointer hover:bg-gray-200">
                    <MdPerson />
                    <span className="text-sm font-medium">Profile</span>
                  </div>
                  <div className="flex flex-row items-center gap-2 py-2 px-3 transition duration-200 hover:cursor-pointer hover:bg-gray-200">
                    <MdOutlineSettingsApplications />
                    <span className="text-sm font-medium">Settings</span>
                  </div>
                  <div className="flex flex-row items-center gap-2 py-2 px-3 transition duration-200 hover:cursor-pointer hover:bg-gray-200">
                    <GoSignOut />
                    <span className="text-sm font-medium">Sign out</span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
