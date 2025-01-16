import React from "react";
import { FaAngleDown } from "react-icons/fa";
import { HiMiniSparkles } from "react-icons/hi2";
import { MdArrowOutward } from "react-icons/md";

const Navbar = () => {
  return <nav className="hidden md:flex px-4 lg:px-6 py-2.5 items-center backdrop-blur-xl rounded-full border-2 border-white/20 bg-white/5">
    
    <ul className="text-gray-200 flex items-center gap-3 lg:gap-6 text-sm">
      <li className="flex items-center gap-2 cursor-pointer">
        <HiMiniSparkles />
        Smart AI
      </li>

      <li className="flex items-center gap-1 cursor-pointer">
        Voices
        <FaAngleDown className="mt-1" />
      </li>

      <li className=" cursor-pointer">
        Pricing
      </li>
      <li className=" cursor-pointer">
        App
      </li>
      <li className="flex items-center gap-1 cursor-pointer">
        Open Dashboard
        <MdArrowOutward  />
      </li>
    </ul>
  </nav>
};

export default Navbar;
