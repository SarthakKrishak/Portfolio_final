"use client"
import { CardSpotlight } from "@/components/ui/card-spotlight";

const Projects = () => {
  return (
    <div className="w-full h-screen mt-14 md:mt-40">
      <h1 className="text-2xl font-bold md:text-4xl">Projects</h1>
      <div className="flex flex-wrap mt-8 gap-10 pl-10">
        <CardSpotlight className="h-96 w-96">
          <p className="text-xl font-bold relative z-20 mt-2 text-white">
            Authentication steps
          </p>
          <p className="text-neutral-200 mt-4 relative z-20">
            Follow these steps to secure your account:
          </p>
        </CardSpotlight>
        <CardSpotlight className="h-96 w-96">
          <p className="text-xl font-bold relative z-20 mt-2 text-white">
            Authentication steps
          </p>
          <p className="text-neutral-200 mt-4 relative z-20">
            Follow these steps to secure your account:

          </p>
        </CardSpotlight>
        <CardSpotlight className="h-96 w-96">
          <p className="text-xl font-bold relative z-20 mt-2 text-white">
            Authentication steps
          </p>
          <p className="text-neutral-200 mt-4 relative z-20">
            Follow these steps to secure your account:

          </p>
        </CardSpotlight>
        <CardSpotlight className="h-96 w-96">
          <p className="text-xl font-bold relative z-20 mt-2 text-white">
            Authentication steps
          </p>
          <p className="text-neutral-200 mt-4 relative z-20">
            Follow these steps to secure your account:

          </p>
        </CardSpotlight>
      </div>
    </div>
  )
}

export default Projects