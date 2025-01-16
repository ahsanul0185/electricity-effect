import React, { useState } from "react";
import logo from "../assets/W.svg";
import Navbar from "../components/Navbar";
import { RxMagicWand } from "react-icons/rx";
import { CgMenuRight } from "react-icons/cg";

const Header = ({setShowMobileMenu}) => {
  return (
    <div className="fixed top-0 left-0 w-full flex justify-between items-center px-6 pt-6 pb-4 backdrop-blur-md z-50">
      {/* Logo */}
      <div className="flex items-center gap-5">
        <div className="size-11 grid place-items-center outline outline-offset-4 outline-white/20 rounded-full bg-gradient-to-r from-[#5a607c] from-30% to-[#f0b894]">
          <img className="size-6" src={logo} alt="logo" />
        </div>
        <div className="flex items-center text-white text-xl">
          <img className="size-4 mb-[1px]" src={logo} alt="logo" />
          <span>lse</span>
        </div>
      </div>

      {/* Navbar */}
      <Navbar />

      {/* Right Buttons */}
      <div className="text-sm flex items-center gap-4 sm:gap-6">
        <button className="hidden sm:block">Sign in</button>
        <button className="px-3 py-2 flex items-center gap-2 rounded-full border-2 border-white/20 bg-white/5">
          <RxMagicWand />
          O.Magic
        </button>

        <button onClick={() => setShowMobileMenu(true)} className="block md:hidden text-white text-2xl active:scale-95 duration-200">
        <CgMenuRight />
        </button>

      </div>
    </div>
  );
};

export default Header;
