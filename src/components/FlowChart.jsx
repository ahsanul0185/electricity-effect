import React from "react";
import frame from "../assets/flow.svg";
import { CgSandClock } from "react-icons/cg";
import { FaQrcode, FaUpload } from "react-icons/fa";
import { PiCellTower } from "react-icons/pi";
import { ImPower } from "react-icons/im";
import iconVoice from "../assets/voice-wave.svg";
import { GoStack } from "react-icons/go";
import MobileChart from "./MobileChart";

const FlowChart = () => {
  return (
    <>
      <div className="hidden md:block relative py-20 mx-auto container scale-95">
        <svg
          width="100%"
          height="178"
          viewBox="0 0 1161 178"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 176.5H35C49.3594 176.5 61 164.859 61 150.5V28C61 13.6406 72.6406 2 87 2H292C306.359 2 318 13.6406 318 28V83.5C318 97.8594 329.641 109.5 344 109.5H434.5M434.5 109.5V55.75M434.5 109.5V144.5C434.5 158.859 446.141 170.5 460.5 170.5H662.25M434.5 109.5H662.25M434.5 55.75V28C434.5 13.6406 446.141 2 460.5 2H662.25M434.5 55.75H662.25"
            stroke="white"
            strokeOpacity="0.17"
            strokeWidth="3"
            strokeDasharray="6 6"
          />
          <path
            opacity="0.82"
            d="M890 109.5H984C998.359 109.5 1010 97.8594 1010 83.5V28C1010 13.6406 1021.64 2 1036 2H1161M890 109.5V55.75M890 109.5V144.5C890 158.859 878.359 170.5 864 170.5H662.25M890 109.5H662.25M890 55.75V28C890 13.6406 878.359 2 864 2H662.25M890 55.75H662.25"
            stroke="white"
            strokeOpacity="0.17"
            strokeWidth="3"
          />
        </svg>

        <svg
          className="absolute top-20 overflow-visible"
          width="100%"
          height="178"
          viewBox="0 0 1161 178"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="gradiant">
              <stop offset="0" stopColor="white" stopOpacity="0" />
              <stop offset="0.8" stopColor="white" stopOpacity="1" />
              <stop offset="0.8" stopColor="white" stopOpacity="1" />
            </linearGradient>
          </defs>

          <mask id="gradiant-mask">
            <rect
              className="mask-rect bg-glow"
              x="0%"
              y="0"
              width="5%"
              height="100%"
              fill="url(#gradiant)"
            />
          </mask>

          <path
            d="M0 176.5H35C49.3594 176.5 61 164.859 61 150.5V28C61 13.6406 72.6406 2 87 2H292C306.359 2 318 13.6406 318 28V83.5C318 97.8594 329.641 109.5 344 109.5H434.5M434.5 109.5V55.75M434.5 109.5V144.5C434.5 158.859 446.141 170.5 460.5 170.5H662.25M434.5 109.5H662.25M434.5 55.75V28C434.5 13.6406 446.141 2 460.5 2H662.25M434.5 55.75H662.25"
            stroke="white"
            strokeOpacity="1"
            strokeWidth="3"
            strokeDasharray="6 6"
            mask="url(#gradiant-mask)"
          />
          <path
            opacity="0.82"
            d="M890 109.5H984C998.359 109.5 1010 97.8594 1010 83.5V28C1010 13.6406 1021.64 2 1036 2H1161M890 109.5V55.75M890 109.5V144.5C890 158.859 878.359 170.5 864 170.5H662.25M890 109.5H662.25M890 55.75V28C890 13.6406 878.359 2 864 2H662.25M890 55.75H662.25"
            stroke="white"
            strokeOpacity="1"
            strokeWidth="3"
            mask="url(#gradiant-mask)"
          />
        </svg>

        {/* <div className="absolute shadow-[0_0_18px_10px_#fd9a5b] top-[53%] left-[33%] bg-white rounded-full size-5 blur-[3px]"></div> */}

        {/* Icon Sand clock */}
        <div className="absolute md:bottom-16 lg:bottom-10 xl:bottom-[5%] md:-left-12 lg:-left-10 xl:-left-5 2xl:left-[6%] md:size-16 xl:size-24 p-0.5 shadow-[0_10px_40px_10px_#5a607c33] rounded-full bg-gradient-to-r from-[#5a607c80] from-30% to-[#f0b89480]">
          <div className="grid place-items-center w-full h-full dotted-bg rounded-full">
            <div className="grid place-items-center -rotate-12 bg-[#1f2025cc] md:size-10 xl:size-16 rounded-full shadow-[inset_0_2px_5px_rgba(255,255,255,0.25)]">
              <CgSandClock className="text-2xl xl:text-3xl text-white/70" />
            </div>
          </div>
        </div>

        {/* Icon Tower */}
        <div className="absolute md:top-20 lg:top-16 xl:top-12 2xl:top-12 md:right-0 xl:right-10 2xl:right-32 size-16 xl:size-24 p-0.5 shadow-[0_10px_40px_10px_#5a607c33] rounded-xl xl:rounded-3xl bg-gradient-to-r from-[#5a607c80] from-30% to-[#f0b89480]">
          <div className="w-full h-full shadow-[inset_3px_3px_8px_rgba(255,255,255,0.15)] bg-[#0d0e11] rounded-xl xl:rounded-3xl">
            <div className="w-full h-full grid place-items-center dotted-bg [mask-image:linear-gradient(to_bottom,transparent,black_40%,black_60%,transparent)]">
              <PiCellTower className="text-2xl xl:text-4xl text-white/70" />
            </div>
          </div>
        </div>

        {/* Icon QR Code */}
        <div className="absolute md:left-5 lg:left-[2.1rem] md:top-36 xl:left-[5.5rem] xl:top-36 2xl:left-[13.3rem] 2xl:top-36 size-10 xl:size-14 p-0.5 rounded-full bg-gradient-to-r from-[#5a607c80] from-30% to-[#f0b89480]">
          <div className="grid place-items-center w-full h-full bg-[#111217] rounded-full">
            <div className="grid place-items-center bg-[#1f2025cc] size-7 xl:size-10 shadow-[inset_0_0px_5px_rgba(255,255,255,0.25)] rounded-full ">
              <FaQrcode className="text-white/70 text-sm xl:text-md" />
            </div>
          </div>
        </div>

        {/* Icon Stack */}
        <div className="absolute md:left-32 lg:left-[12rem] top-[5.75rem] lg:top-[4.5rem] xl:left-[16rem] xl:top-14 2xl:left-[23.3rem] 2xl:top-14 size-10 xl:size-14 p-0.5 rounded-lg xl:rounded-2xl bg-gradient-to-r from-[#5a607c80] from-30% to-[#f0b89480]">
          <div className="grid place-items-center w-full h-full bg-[#111217] rounded-lg xl:rounded-2xl">
            <div className="grid place-items-center bg-[#1f2025cc] size-7 xl:size-10 shadow-[inset_0_0px_5px_rgba(255,255,255,0.25)] rounded-lg xl:rounded-xl ">
              <GoStack className="text-white/70 text-sm xl:text-base" />
            </div>
          </div>
        </div>

        {/* Icon Upload */}
        <div className="absolute md:right-20 lg:right-[7.08rem] md:top-[7.9rem] lg:top-[7.5rem] xl:right-[11rem] xl:top-28 2xl:right-[18.8rem] 2xl:top-28 size-10 xl:size-14 p-0.5 rounded-full bg-gradient-to-r from-[#5a607c80] from-30% to-[#f0b89480]">
          <div className="grid place-items-center w-full h-full bg-[#111217] rounded-full">
            <div className="grid place-items-center bg-[#1f2025cc] w-4 h-6 xl:w-6 xl:h-8 shadow-[inset_0_0px_5px_rgba(255,255,255,0.25)] rounded border-t-2 border-white/30">
              <FaUpload className="text-xs xl:text-sm text-white/70" />
            </div>
          </div>
        </div>

        {/* Glowing Lights */}
        <div className="absolute md:top-[29%] lg:top-[23%] xl:top-[20%] 2xl:top-[20%] md:left-[9%] lg:left-[10%] xl:left-[13%] 2xl:left-[19%]">
          <svg
            width="23"
            className="opacity-35 [mask-image:linear-gradient(to_right,black_10%,black_70%,transparent)]"
            height="27"
            viewBox="0 0 23 27"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M22.5 25.2338V1.76619C22.5 0.988896 21.652 0.508783 20.9855 0.908698L1.42915 12.6425C0.781816 13.0309 0.781817 13.9691 1.42916 14.3575L20.9855 26.0913C21.652 26.4912 22.5 26.0111 22.5 25.2338Z"
              fill="white"
              fill-opacity="0.3"
            />
            <path
              d="M22 1.76619V25.2338C22 25.6225 21.576 25.8625 21.2428 25.6626L1.6864 13.9287C1.36273 13.7345 1.36273 13.2655 1.6864 13.0713L21.2428 1.33744C21.576 1.13749 22 1.37754 22 1.76619Z"
              stroke="white"
              stroke-opacity="0.4"
            />
          </svg>

          <div className="bg-glow before:shadow-[0_0_20px_1px_red,2px_0_20px_2px_#f69959] before:w-4 before:h-2 before:-top-4 before:left-5 before:opacity-90 before:-z-20"></div>
        </div>

        <div className="absolute size-4 lg:size-5 md:top-[30.5%] lg:top-[24.5%] xl:top-[21%] md:left-[40%] lg:left-[40%] xl:left-[41%] 2xl:left-[42.5%] border-2 border-white/40 rounded-[3px] rotate-45 bg-white/30">
          <div className="before:w-3 before:h-2 -rotate-45 before:left-0 lg:before:left-1 before:top-0.5 bg-glow"></div>
        </div>

        <div className="absolute size-4 lg:size-5 md:top-[41.5%] lg:top-[38.5%] xl:top-[37%] md:left-[40.5%] lg:left-[40.5%] xl:left-[41.5%] 2xl:left-[43%] border-2 border-white/40 rounded-[3px] rotate-45 bg-white/30">
          <div className="before:w-3 before:h-2 -rotate-45 before:left-0 lg:before:left-1 before:top-0.5 bg-glow"></div>
        </div>

        <div className="absolute size-4 lg:size-5 md:top-[51.5%] lg:top-[52.5%] xl:top-[53%] md:left-[41%] lg:left-[41%] xl:left-[42%] 2xl:left-[44%] border-2 border-white/40 rounded-[3px] rotate-45 bg-white/30">
          <div className="before:w-3 before:h-2 -rotate-45 before:left-0 lg:before:left-1 before:top-0.5 bg-glow"></div>
        </div>

        <div className="absolute size-4 lg:size-5 md:top-[63.5%] lg:top-[68.5%] xl:top-[71%] md:left-[41.5%] lg:left-[42%] xl:left-[43%] 2xl:left-[44.5%] border-2 border-white/40 rounded-[3px] rotate-45 bg-white/30">
          <div className="before:w-3 before:h-2 -rotate-45 before:left-0 lg:before:left-1 before:top-0.5 bg-glow"></div>
        </div>

        <div className="absolute md:left-[32.5%] lg:left-[32%] xl:left-[34.1%] 2xl:left-[36.5%] md:bottom-[47%] lg:bottom-[45.5%] xl:bottom-[45%] 2xl:bottom-[45%] before:w-4 before:h-1.5 before:left-0 bg-glow"></div>

        <div className="absolute md:right-[21.2%] lg:right-[21%] xl:right-[24.1%] 2xl:right-[28.5%] md:bottom-[47%] lg:bottom-[45%] xl:bottom-[45%] 2xl:bottom-[45%] before:w-6 before:h-2 before:left-0 bg-glow"></div>
        <div className="absolute md:right-[16%] lg:right-[16%] xl:right-[20%] 2xl:right-[25%] md:bottom-[41%] lg:bottom-[39%] xl:bottom-[39%] 2xl:bottom-[39%] flex p-2  opacity-80 rotate-180 [mask-image:linear-gradient(to_left,black_10%,transparent)]">
          <div className="size-4 lg:size-5 border-2 border-white/40 rounded-[3px] rotate-45 bg-white/70"></div>
          <div className=" -ml-3 size-4 lg:size-5 border-2 border-white/40 rounded-[3px] rotate-45 bg-white shadow-[-2px_0_3px_#00000033]"></div>
          <div className="-ml-3 size-4 lg:size-5 border-2 border-white/40 rounded-[3px] rotate-45 bg-white shadow-[-2px_0_3px_#00000033]"></div>
          <div className="-ml-3 size-4 lg:size-5 border-2 border-white/40 rounded-[3px] rotate-45 bg-white/80 shadow-[-2px_0_3px_#00000033]"></div>
        </div>

        {/* ------ Texts ------ */}
        <div className="absolute top-24 lg:top-[4.5rem] xl:top-14 left-[46%] lg:left-[48%] flex flex-col gap-[0.3rem] lg:gap-[0.58rem] xl:gap-2">
          <div className="max-w-56 p-0.5 shadow-[0_3px_4px_black] rounded-full bg-gradient-to-r from-[#f0b89480] from-30% to-[#5a607c80]">
            <div className="bg-[#0d0e11] rounded-full">
              <div class="relative w-full h-full py-1 lg:py-2 px-4 lg:px-6 rounded-full z-0">
                <div className="absolute inset-0 dotted-bg [mask-image:radial-gradient(black,transparent)] z-[-1]" />
                <div className="absolute grid place-items-center left-0 top-0 w-10 xl:w-14 h-full rounded-full bg-[#252529]">
                  <div className="size-3 lg:size-4 rounded-sm bg-gradient-to-t from-gray-700 to-gray-100"></div>
                </div>

                <div className="pl-12 xl:pl-16 text-sm xl:text-base">
                  Uplaod <span className="text-sm xl:text-xl ml-3">70%</span>
                </div>
              </div>
            </div>
          </div>

          <div className="max-w-56 p-0.5 shadow-[0_3px_4px_black] rounded-full bg-gradient-to-r from-[#f0b89480] from-30% to-[#5a607c80]">
            <div className="bg-[#0d0e11] rounded-full">
              <div className="relative w-full h-full py-1 lg:py-2 px-4 lg:px-6 rounded-full z-0">
                <div className="absolute inset-0 dotted-bg [mask-image:radial-gradient(black,transparent)] z-[-1]" />
                <div className="absolute grid place-items-center left-0 top-0 w-10 xl:w-14 h-full rounded-full bg-[#252529]">
                  <div className="w-0 h-0 border-l-[7px] lg:border-l-[10px] border-r-[7px] lg:border-r-[10px] border-b-[11px] lg:border-b-[16px] border-l-transparent border-r-transparent border-b-gray-400"></div>
                </div>

                <div className="pl-12 xl:pl-16 text-sm xl:text-xl">
                  IQ-5{" "}
                  <span className="absolute right-6 top-1/2 -translate-y-1/2 text-white/90">
                    <ImPower />{" "}
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="max-w-56 p-0.5 shadow-[0_3px_4px_black] rounded-full bg-gradient-to-r from-[#f0b89480] from-30% to-[#5a607c80]">
            <div className="bg-[#0d0e11] rounded-full">
              <div className="relative w-full h-full py-1 lg:py-2 px-4 lg:px-6 rounded-full z-0">
                <div className="absolute inset-0 dotted-bg [mask-image:radial-gradient(black,transparent)] z-[-1]" />
                <div className="absolute grid place-items-center left-0 top-0 w-10 xl:w-14 h-full rounded-full bg-[#252529]">
                  <div className="size-3 lg:size-4 rounded-full  bg-gradient-to-t from-gray-700 to-gray-100"></div>
                </div>

                <div className="pl-12 xl:pl-16 text-sm xl:text-xl">Output</div>
              </div>
            </div>
          </div>

          <div className="max-w-56 p-0.5 shadow-[0_3px_4px_black] rounded-full bg-gradient-to-r from-[#f0b89480] from-30% to-[#5a607c80]">
            <div className="bg-[#0d0e11] rounded-full">
              <div className="relative w-full h-full py-1 lg:py-2 px-4 lg:px-6 rounded-full z-0">
                <div className="absolute inset-0 dotted-bg [mask-image:radial-gradient(black,transparent)] z-[-1]" />
                <div className="absolute grid place-items-center left-0 top-0 w-10 xl:w-14 h-full rounded-full bg-[#252529]">
                  <div className="size-3 rotate-45 lg:size-4 rounded-sm bg-gradient-to-bl from-gray-700 to-gray-100"></div>
                </div>

                <div className="select-none pl-10 lg:pl-8 xl:pl-14 text-sm xl:text-xl flex gap-[0.7px]">
                  <img
                    draggable={false}
                    className="h-5 xl:h-7 opacity-70"
                    src={iconVoice}
                    alt=""
                  />
                  <img
                    draggable={false}
                    className="h-5 xl:h-7 opacity-70"
                    src={iconVoice}
                    alt=""
                  />
                  <img
                    draggable={false}
                    className="h-5 xl:h-7 opacity-70"
                    src={iconVoice}
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Vertical Chart for mobile */}
      <MobileChart />
    </>
  );
};

export default FlowChart;
