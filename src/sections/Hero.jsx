import React from "react";
import logo from "../assets/W.svg";
import { MdArrowOutward } from "react-icons/md";
import FlowChart from "../components/FlowChart";

const Hero = () => {
  return (
    <div className="relative z-0 pt-40 lg:pt-56 pb-10">
      {/* Background Effect */}
      <div className="fixed top-56 right-24  blur-[200px] opacity-5 max-w-2xl w-full aspect-video rotate-45 bg-white rounded-full" />
      <div class="fixed top-[45%] left-[30%] z-[-2] h-56 w-[50%]  bg-[radial-gradient(#ffffff33_1px,transparent_1px)] bg-[size:15px_15px] rounded-full [mask-image:radial-gradient(black,transparent)]"></div>

      {/* Hero Top Part */}
      <div className="relative flex flex-col items-center gap-5 px-5">
        <button className="px-3 py-1.5 text-sm text-gray-300 flex items-center gap-1 cursor-pointer rounded-full border-2 border-white/20 bg-white/5 ">
          <div className="size-5 mr-1 grid place-items-center rounded-full bg-gradient-to-r from-[#5a607c] from-30% to-[#f0b894]">
            <img className="size-2" src={logo} alt="logo" />
          </div>

          <span>Open Dashboard</span>
          <MdArrowOutward />
        </button>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-center">
          Key Featuring Curiosity <br /> with A1-dream IQ-5 gen.
        </h1>

        <p className="text-white/50 mt-2 font-light text-center w-[80%]">
          Explore Key Featuring Curiosity with Our New Gen (IQ-5) A1-dream to
          achieve the limitless of Power!
        </p>

        <button className="mt-4 px-4 py-2 text-sm md:text-base inset-shadow-sm inset-shadow-white/20 bg-gradient-to-r from-[#5a607c] from-10% to-[#f0b894] rounded-full text-black relative before:inset-2 before:blur-[15px] hover:before:blur-[25px] before:content-['*'] before:absolute before:bg-gradient-to-r before:from-[#5a607c] before:from-10% before:to-[#f0b894] before:-z-10 before:duration-200">
          Smart AI-IQ 5
          <div className="absolute bottom-5 right-6 before:w-5 before:h-4 before:left-0 bg-glow"></div>
        </button>
      </div>

      {/* Flow Chart */}
      <div className="py-10">
      <FlowChart />
      </div>
    </div>
  );
};

export default Hero;
