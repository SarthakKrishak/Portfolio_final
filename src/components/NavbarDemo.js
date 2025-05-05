"use client";
import Link from "next/link";
import { InteractiveHoverButton } from "@/components/magicui/interactive-hover-button";
import { FiMenu } from "react-icons/fi";
import { useState } from "react";

const NavbarDemo = () => {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(prev => !prev);
  }

  return (
    <div className="relative flex justify-between md:justify-center items-center font-saasss w-full lg:py-1 bg-black">
      <div className="flex items-center w-[30%] text-white">Night</div>

      <div className="md:flex items-center gap-6 w-[70%] justify-end hidden">
        <div className="flex items-center justify-center gap-2">
          <Link href="/" className="hover:bg-[#262626] lg:py-[1.3vh] lg:px-4 transition ease-in-out rounded-3xl duration-300">Home</Link>
          <Link href="/" className="hover:bg-[#262626] lg:py-[1.3vh] lg:px-4 transition ease-in-out rounded-3xl duration-300">Projects</Link>
          <Link href="/" className="hover:bg-[#262626] lg:py-[1.3vh] lg:px-4 transition ease-in-out rounded-3xl duration-300">Blogs</Link>
          <Link href="/" className="hover:bg-[#262626] lg:py-[1.3vh] lg:px-4 transition ease-in-out rounded-3xl duration-300">Certificates</Link>
        </div>

        <div className="flex gap-2">
          <button className="bg-white text-black lg:py-[1.1vh] lg:px-4 font-semibold rounded-md hover:translate-y-[-0.5vh] transition ease-in-out cursor-pointer">
            Resume
          </button>
          <InteractiveHoverButton>Contact me</InteractiveHoverButton>
        </div>
      </div>

      {/* Mobile Menu Icon */}
      <div onClick={handleClick} className="lg:hidden text-white z-50">
        <FiMenu size={18} />
      </div>

      {/* Mobile Dropdown Menu */}
      <div
        className={`absolute top-full right-0 w-[35%] rounded-lg outline-1 outline-gray-900 md:hidden bg-black text-white transition-all duration-500 ease-in-out z-40 ${clicked ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-5 pointer-events-none"
          }`}
      >
        <div className="flex flex-col items-center gap-4 py-4 text-sm">
          <Link href="/">Home</Link>
          <Link href="/">Projects</Link>
          <Link href="/">Blogs</Link>
          <Link href="/">Certificates</Link>
          <Link href="/">Resume</Link>
        </div>
      </div>
    </div>
  );
};

export default NavbarDemo;
