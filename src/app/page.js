import { GridBackgroundDemo } from "@/components/GridBackgroundDemo";
import NavbarDemo from "@/components/NavbarDemo";
import { Cover } from "@/components/ui/cover";
import Link from "next/link";
export default function Home() {
  return (
    <div className="relative min-h-screen font-saasss lg:pl-[18vw] lg:pr-[18vw]">
      <div className="fixed inset-0 -z-10">
        <GridBackgroundDemo />
      </div>
      <nav className="relative top-6 w-full bg-black rounded-lg border-slate-300">
        <NavbarDemo />
      </nav>

      <main className="z-10 mt-40 w-full flex lg:flex-row">
        {/* left side hero */}
        <div className="w-[50%] flex flex-col items-center pl-6">
          <div className="flex flex-col gap-3">
            <h1 className="text-6xl font-semibold">Sarthak Krishak</h1>
            <h1 className="lg:text-lg font-semibold max-w-7xl relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700 dark:from-neutral-800 dark:via-white dark:to-white">
              <span className="text-[#A1A1AA]">Innovating at</span>  <Link href={"/"}><Cover>Imaginum</Cover></Link>  <span className="text-[#A1A1AA]">and other</span> cool things.
            </h1>
            <p className="text-[#A1A1AA] lg:mt-4 lg:mr-8">Full-Stack Developer specializing in scalable SaaS products and web
              applications. AWS Certified Cloud Practitioner and a sophomore at
              VIT Vellore.
              Passionate about designing seamless digital experiences with modern
              web technologies. I focus on building high-performance, user-centric
              solutions that drive impact and innovation.</p>
          </div>
        </div >
        {/* right side hero */}
        <div className="w-[50%] bg-yellow-300">

        </div>
      </main>
      {/* Other page content here */}
    </div>
  );
}
