import React from "react";

import { CgSandClock } from "react-icons/cg";
import { FaQrcode, FaUpload } from "react-icons/fa";
import { PiCellTower } from "react-icons/pi";
import { ImPower } from "react-icons/im";
import iconVoice from "../assets/voice-wave.svg";
import { GoStack } from "react-icons/go";

const MobileChart = () => {
  return (
    <div className="block md:hidden relative py-16 sm:my-32 px-4">

      {/* Frame */}
      <div className="flex items-center flex-col">
        <div className="bg-white/30 w-[2.5px]  h-72 block" />

        <div className="flex flex-col justify-between w-[85%] h-96 rounded-[36px] border-[3px] border-white/20">
          <hr className="border-t-[3px] w-full border-white/0" />
          <hr className="border-t-[3px] w-full border-white/20" />
          <hr className="border-t-[3px] w-full border-white/20" />
          <hr className="border-t-[3px] w-full border-white/20" />
          <hr className="border-t-[3px] w-full border-white/20" />
          <hr className="border-t-[3px] w-full border-white/0" />
        </div>

        <div className="bg-white/30 w-[2.5px]  h-44 block" />
      </div>

      {/* Icon Sand Clock */}
      <div className="absolute top-[5%] left-[50%] -translate-x-1/2 p-0.5 shadow-[0_10px_40px_10px_#5a607c33] rounded-full bg-gradient-to-r from-[#5a607c80] from-30% to-[#f0b89480] size-20">
        <div className="grid place-items-center w-full h-full dotted-bg rounded-full">
          <div className="grid place-items-center -rotate-12 bg-[#1f2025cc] size-14 sm:size-16 rounded-full shadow-[inset_0_2px_5px_rgba(255,255,255,0.25)]">
            <CgSandClock className="text-2xl xl:text-3xl text-white/70" />
          </div>
        </div>
      </div>

      {/* Icon QR code */}
      <div className="absolute top-[18%] left-[50%] -translate-x-1/2  size-14 p-0.5 rounded-full bg-gradient-to-r from-[#5a607c80] from-30% to-[#f0b89480]">
        <div className="grid place-items-center w-full h-full bg-[#111217] rounded-full">
          <div className="grid place-items-center bg-[#1f2025cc] size-10 shadow-[inset_0_0px_5px_rgba(255,255,255,0.25)] rounded-full ">
            <FaQrcode className="text-white/70" />
          </div>
        </div>
      </div>

      {/* Icon Stack */}
      <div className="absolute top-[28%] left-1/2 -translate-x-1/2 size-10 p-0.5 rounded-lg xl:rounded-2xl bg-gradient-to-r from-[#5a607c80] from-30% to-[#f0b89480]">
        <div className="grid place-items-center w-full h-full bg-[#111217] rounded-lg xl:rounded-2xl">
          <div className="grid place-items-center bg-[#1f2025cc] size-7 xl:size-10 shadow-[inset_0_0px_5px_rgba(255,255,255,0.25)] rounded-lg xl:rounded-xl ">
            <GoStack className="text-white/70 text-sm xl:text-base" />
          </div>
        </div>
      </div>

      {/* Icon Upload */}
      <div className="absolute bottom-[16%] left-1/2 -translate-x-1/2 size-10 p-0.5 rounded-full bg-gradient-to-r from-[#5a607c80] from-30% to-[#f0b89480]">
        <div className="grid place-items-center w-full h-full bg-[#111217] rounded-full">
          <div className="grid place-items-center bg-[#1f2025cc] w-5 h-6 shadow-[inset_0_0px_5px_rgba(255,255,255,0.25)] rounded border-t-2 border-white/30">
            <FaUpload className="text-sm text-white/70" />
          </div>
        </div>
      </div>

      {/* Icon Tower */}
      <div className="absolute bottom-[5%] left-1/2 -translate-x-1/2 size-16 xl:size-24 p-0.5 shadow-[0_10px_40px_10px_#5a607c33] rounded-xl  bg-gradient-to-r from-[#5a607c80] from-30% to-[#f0b89480]">
        <div className="w-full h-full shadow-[inset_3px_3px_8px_rgba(255,255,255,0.15)] bg-[#0d0e11] rounded-xl xl:rounded-3xl">
          <div className="w-full h-full grid place-items-center dotted-bg [mask-image:linear-gradient(to_bottom,transparent,black_40%,black_60%,transparent)]">
            <PiCellTower className="text-2xl xl:text-4xl text-white/70" />
          </div>
        </div>
      </div>

      {/* Contents */}
      <div className="absolute top-[41.6%] left-1/2 -translate-x-1/2 flex flex-col items-center w-[80%] gap-[1.97rem]">
        <div className="max-w-56 w-full p-0.5 shadow-[0_3px_4px_black] rounded-full bg-gradient-to-r from-[#f0b89480] from-30% to-[#5a607c80]">
          <div className="bg-[#0d0e11] rounded-full">
            <div className="relative w-full h-full py-2 px-6 rounded-full z-0">
              <div className="absolute inset-0 dotted-bg [mask-image:radial-gradient(black,transparent)] z-[-1]" />
              <div className="absolute grid place-items-center left-0 top-0 w-14 h-full rounded-full bg-[#252529]">
                <div className="size-4 rounded-sm bg-gradient-to-t from-gray-700 to-gray-100"></div>
              </div>

              <div className="pl-16">
                Uplaod <span className="text-xl ml-3">70%</span>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-56 w-full p-0.5 shadow-[0_3px_4px_black] rounded-full bg-gradient-to-r from-[#f0b89480] from-30% to-[#5a607c80]">
          <div className="bg-[#0d0e11] rounded-full">
            <div className="relative w-full h-full py-2 px-6 rounded-full z-0">
              <div className="absolute inset-0 dotted-bg [mask-image:radial-gradient(black,transparent)] z-[-1]" />
              <div className="absolute grid place-items-center left-0 top-0 w-14 h-full rounded-full bg-[#252529]">
                <div className="w-0 h-0 border-l-[10px] border-r-[10px] border-b-[16px] border-l-transparent border-r-transparent border-b-gray-400"></div>
              </div>

              <div className="pl-16">
                IQ-5{" "}
                <span className="absolute right-6 top-1/2 -translate-y-1/2 text-white/90">
                  <ImPower />{" "}
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-56 w-full p-0.5 shadow-[0_3px_4px_black] rounded-full bg-gradient-to-r from-[#f0b89480] from-30% to-[#5a607c80]">
          <div className="bg-[#0d0e11] rounded-full">
            <div className="relative w-full h-full py-2 px-6 rounded-full z-0">
              <div className="absolute inset-0 dotted-bg [mask-image:radial-gradient(black,transparent)] z-[-1]" />
              <div className="absolute grid place-items-center left-0 top-0 w-14 h-full rounded-full bg-[#252529]">
                <div className="size-4 rounded-full  bg-gradient-to-t from-gray-700 to-gray-100"></div>
              </div>

              <div className="pl-16">Output</div>
            </div>
          </div>
        </div>

        <div className="max-w-56 w-full p-0.5 shadow-[0_3px_4px_black] rounded-full bg-gradient-to-r from-[#f0b89480] from-30% to-[#5a607c80]">
          <div className="bg-[#0d0e11] rounded-full">
            <div className="relative w-full h-full py-2 px-6 rounded-full z-0">
              <div className="absolute inset-0 dotted-bg [mask-image:radial-gradient(black,transparent)] z-[-1]" />
              <div className="absolute grid place-items-center left-0 top-0 w-14 h-full rounded-full bg-[#252529]">
              <div className="size-3 rotate-45 lg:size-4 rounded-sm bg-gradient-to-bl from-gray-700 to-gray-100"></div>
              </div>

              <div className="pl-16 flex gap-[0.7px]">
                <img className="h-5 opacity-70" src={iconVoice} alt="" />
                <img className="h-5 opacity-70" src={iconVoice} alt="" />
                <img className="h-5 opacity-70" src={iconVoice} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileChart;
