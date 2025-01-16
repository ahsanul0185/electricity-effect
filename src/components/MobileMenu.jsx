import React from 'react'
import { FaAngleDown } from 'react-icons/fa'
import { HiMiniSparkles } from 'react-icons/hi2'
import { IoCloseSharp } from 'react-icons/io5'
import { MdArrowOutward } from 'react-icons/md'

const MobileMenu = ({showMobileMenu, setShowMobileMenu}) => {
    return (
        <nav className={`${showMobileMenu ? "visible opacity-100" : "invisible opacity-0"} duration-300 fixed bg-black/50 inset-0 z-[999] flex md:hidden items-center backdrop-blur-md border-2 border-white/20`}>
    
            <button onClick={() => setShowMobileMenu(false)} className='absolute top-10 right-5 text-white text-2xl'>
                <IoCloseSharp />
            </button>
            
    <ul className="pt-20 text-gray-200 flex flex-col items-start justify-start w-full h-full gap-3 lg:gap-6 text-sm">
      <li className="px-6 pt-2 border-t border-t-white/50 text-xl hover:pl-7 duration-200 w-full flex items-center gap-2 cursor-pointer">
        <HiMiniSparkles />
        Smart AI
      </li>

      <li className="px-6 pt-2 border-t border-t-white/50 text-xl hover:pl-7 duration-200 w-full flex items-center gap-1 cursor-pointer">
        Voices
        <FaAngleDown className="mt-1" />
      </li>

      <li className="px-6 pt-2  border-t border-t-white/50 text-xl hover:pl-7 duration-200 w-full cursor-pointer">
        Pricing
      </li>
      <li className="px-6 pt-2  border-t border-t-white/50 text-xl hover:pl-7 duration-200 w-full cursor-pointer">
        App
      </li>
      <li className="px-6 pt-2 border-t border-t-white/50 text-xl hover:pl-7 duration-200 w-full flex items-center gap-1 cursor-pointer">
        Open Dashboard
        <MdArrowOutward  />
    </li>
                
      <li className="px-6 pt-2 border-t border-b pb-3 border-t-white/50 text-xl hover:pl-7 duration-200 w-full flex items-center gap-1 cursor-pointer">
        Sign in
      </li>
    </ul>
  </nav>
  )
}

export default MobileMenu