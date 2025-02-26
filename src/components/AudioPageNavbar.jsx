import React from "react";
import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";

export default function AudioPageNavbar() {
  const navigate = useNavigate();

  return (
    <>
      <div className="w-full flex justify-between items-center font-semibold my-4">
        <div className="flex items-center gap-2">
          <img
            onClick={() => navigate(-1)}
            className="w-8 bg-blue-gray-300 shadow-lg hover:scale-105 transition-transform duration-200 ease-in-out p-2 rounded-2xl cursor-pointer"
            src={assets.arrow_left}
            alt=""
          />
          <img
            onClick={() => navigate(1)}
            className="w-8 bg-blue-gray-300 shadow-lg rounded-2xl p-2 cursor-pointer"
            src={assets.arrow_right}
            alt=""
          />
        </div>
        <div className="flex items-center gap-4">
          <p className="bg-white text-black text-[15px] px-4 py-1 rounded-2xl hidden md:block cursor-pointer">
            Download App
          </p>
        </div>
      </div>
      <div className="overflow-x-hidden">
        <div className="flex items-center gap-2 mt-4 sm:hidden md:hidden swipeable-container">
          <p className="bg-white text-black px-4 py-1 rounded-2xl cursor-pointer">
            All
          </p>
          <p className="bg-blue- px-4 py-1 rounded-2xl hover:scale-95 transition-transform duration-500 ease-in-out bg-blue-gray-300 shadow-md cursor-pointer">
            Sermons
          </p>
          <p className="bg-blue-gray-300 shadow-md hover:scale-95 transition-transform duration-500 ease-in-out px-4 py-1 rounded-2xl cursor-pointer">
            Chants
          </p>
          <p className="bg-blue-gray-300 shadow-md hover:scale-95 transition-transform duration-500 ease-in-out px-4 py-1 rounded-2xl cursor-pointer">
            Worship
          </p>
          <p className="bg-blue-gray-300 shadow-md hover:scale-95 transition-transform duration-500 ease-in-out px-4 py-1 rounded-2xl cursor-pointer">
            Praise
          </p>
        </div>
      </div>
    </>
  );
}
