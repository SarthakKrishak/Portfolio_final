"use client";
import { GridBackgroundDemo } from "@/components/GridBackgroundDemo";
import NavbarDemo from "@/components/NavbarDemo";
import { Cover } from "@/components/ui/cover";
import { FloatingDock } from "@/components/ui/floating-dock";
import { FaLinkedinIn } from "react-icons/fa";
import { PiXLogoFill } from "react-icons/pi";
import { FiGithub } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa6";
import { FlipWords } from "@/components/ui/flip-words";
import { IoMdCloseCircle } from "react-icons/io";
import { useEffect, useState } from "react";
import { LinkPreview } from "@/components/ui/link-preview";
import { FollowerPointerCard } from "@/components/ui/following-pointer";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";

export default function Home() {
  const [close, setClose] = useState(false);
  const words1 = ["Next Js", "React Js", "Tailwind CSS", "Typescript"];
  const words2 = ["Node Js", "Express Js", "Mongo DB", "Firebase"];
  const links = [
    {
      title: "LinkedIn",
      icon: (
        <FaLinkedinIn className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://www.linkedin.com/in/sarthakkrishak/",
    },
    {
      title: "GitHub",
      icon: (
        <FiGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://github.com/SarthakKrishak",
    },
    {
      title: "Twitter",
      icon: (
        <PiXLogoFill className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://x.com/krishak_sarthak",
    },
    {
      title: "Instagram",
      icon: (
        <FaInstagram className="h-full w-full text-neutral-500 dark:text-neutral-300" />
      ),
      href: "https://www.instagram.com/sarthak_krishak/",
    },
  ];

  useEffect(() => {
    const isClosed = sessionStorage.getItem("bannerClosed");
    if (isClosed) setClose(true);
  }, []);
  const handleClick = () => {
    setClose(true);
    sessionStorage.setItem("bannerClosed", "true");
  };

  return (
    <div className="relative min-h-screen font-saasss">
      {/* Top most banner */}
      {close ? (
        <div className="bg-[#2171FF] text-white w-full py-3 items-center justify-center px-8 rounded-sm hidden">
          <h1>
            Currently seeking{" "}
            <span className="font-medium">
              Summer 2025 Full-Stack Developer internship
            </span>{" "}
            opportunities! Open to remote or on-site positions.{" "}
          </h1>
          <span className="text-lg">
            <IoMdCloseCircle />
          </span>
        </div>
      ) : (
        <div className="bg-[#2171FF] text-white w-full flex lg:py-3 items-center justify-center lg:px-8 rounded-sm lg:gap-16">
          <h1>
            Currently seeking{" "}
            <span className="font-medium">
              Summer 2025 Full-Stack Developer internship
            </span>{" "}
            opportunities! Open to remote or on-site positions.{" "}
          </h1>
          <span onClick={handleClick} className="lg:text-lg cursor-pointer">
            <IoMdCloseCircle />
          </span>
        </div>
      )}

      {/* Main Content */}
      <div className="relative min-h-screen font-saasss lg:pl-[18vw] lg:pr-[18vw] pl-10 pr-10">
        {/* Background */}
        <div className="fixed inset-0 -z-10">
          <GridBackgroundDemo />
        </div>
        {/* navbar */}
        <nav className="relative top-8 lg:top-6 w-full bg-black rounded-lg">
          <NavbarDemo />
        </nav>

        <main className="z-10 md:mt-40 mt-32 w-full flex flex-col">
          {/* Hero section */}
          <div className="flex md:flex-row flex-col gap-9 md:gap-0">
            {/* left side hero */}
            <div className="md:w-[50%] w-full flex flex-col md:items-center lg:pl-12">
              <div className="flex flex-col lg:gap-3 gap-2">
                <h1 className="lg:text-6xl text-4xl font-semibold">
                  Sarthak Krishak
                </h1>
                <h1 className="lg:text-lg text-sm font-semibold max-w-7xl relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700 dark:from-neutral-800 dark:via-white dark:to-white">
                  <span className="text-[#A1A1AA]">Innovating at</span>{" "}
                  <LinkPreview
                    url="https://www.csedvit.com/"
                    className="font-bold"
                  >
                    <Cover>Imaginum</Cover>
                  </LinkPreview>
                  <span className="text-[#A1A1AA]">
                    | AWS Certified Engineer
                  </span>
                </h1>
                <p className="text-[#A1A1AA] text-sm md:text-base leading-6 lg:mt-4 lg:mr-2 mt-3">
                  <span className="text-white">Full-Stack Developer</span>{" "}
                  specializing in scalable SaaS products and web applications.
                  <span className="text-white">
                    AWS Certified Cloud Practitioner
                  </span>{" "}
                  and a sophomore at VIT Vellore. Passionate about designing
                  seamless digital experiences with modern web technologies. I
                  focus on building high-performance, user-centric solutions
                  that drive impact and innovation.
                </p>

                <div className="font-normal text-neutral-600 dark:text-neutral-400 mt-4 lg:mt-5 flex flex-col w-full">
                  <span className="text-white lg:text-xl text-md">
                    Specialized in
                  </span>
                  <div className="flex w-full mt-2">
                    <h1 className="md:text-lg text-sm w-[50%] md:w-[55%]">
                      Frontend : <FlipWords words={words1} />
                    </h1>
                    <h1 className="md:text-lg text-sm w-[50%] md:w-[45%]">
                      Backend : <FlipWords words={words2} />
                    </h1>
                  </div>
                </div>
              </div>
            </div>

            {/* right side hero */}
            <div className="md:w-[50%] w-full object-cover flex flex-col items-center justify-center">
              <img
                src="/pic1.png"
                width={350}
                height={300}
                className="rounded-lg md:hidden"
              />
              <FollowerPointerCard
                title={
                  <TitleComponent
                    title={blogContent.author}
                    avatar={blogContent.authorAvatar}
                  />
                }
              >
                <img
                  src="/pic1.png"
                  width={320}
                  height={320}
                  className="rounded-lg md:flex hidden"
                />
              </FollowerPointerCard>

              <div className="flex items-center justify-center w-full lg:mt-4 mt-3">
                <FloatingDock
                  mobileClassName="translate-x-36 translate-y-[-7vh]" // only for demo, remove for production
                  items={links}
                />
              </div>
            </div>
          </div>
          <Experience/>
          <Projects />
        </main>
      </div>
    </div>
  );
}

const blogContent = {
  author: "Sarthak Krishak",
  authorAvatar: "/manu.png",
};

const TitleComponent = ({ title, avatar }) => (
  <div className="flex items-center space-x-2">
    <img
      src={avatar}
      height="20"
      width="20"
      alt="thumbnail"
      className="rounded-full border-2 border-white"
    />
    <p>{title}</p>
  </div>
);
