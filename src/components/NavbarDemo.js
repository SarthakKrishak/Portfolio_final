"use client";
import Link from "next/link";
import { InteractiveHoverButton } from "@/components/magicui/interactive-hover-button";

const NavbarDemo = () => {
  return (
    <div className="lg:pl-10 lg:pr-10 flex justify-center items-center font-saasss w-full lg:py-1 bg-black">
      <div className="flex items-center w-[30%]">Night</div>
      <div className="flex items-center gap-6 w-[70%] justify-end">
        <div className="flex items-center justify-center gap-2">
          <Link
            href="/"
            className="hover:bg-[#262626] lg:py-[1.3vh] lg:px-4 transition ease-in-out rounded-3xl duration-300"
          >
            Home
          </Link>
          <Link
            href="/"
            className="hover:bg-[#262626] lg:py-[1.3vh] lg:px-4 transition ease-in-out rounded-3xl duration-300"
          >
            Projects
          </Link>
          <Link
            href="/"
            className="hover:bg-[#262626] lg:py-[1.3vh] lg:px-4 transition ease-in-out rounded-3xl duration-300"
          >
            Blogs
          </Link>
          <Link
            href="/"
            className="hover:bg-[#262626] lg:py-[1.3vh] lg:px-4 transition ease-in-out rounded-3xl duration-300"
          >
            Cerificates
          </Link>
        </div>
        <div className="flex gap-2">
          <button className="bg-white text-black lg:py-[1.1vh] lg:px-4 font-semibold rounded-md hover:translate-y-[-0.5vh] transition ease-in-out cursor-pointer">
            Resume
          </button>

          <InteractiveHoverButton>Contact me</InteractiveHoverButton>
        </div>
      </div>
    </div>
  );
};

export default NavbarDemo;
