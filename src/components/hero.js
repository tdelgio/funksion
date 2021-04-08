import React from "react"
import { StaticImage } from "gatsby-plugin-image"

const Hero = () => {
  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <div className="w-full mx-4 lg:mx-0 h-3/4 md:h-3/4 max-w-lg flex ">
        <div className="w-1/2 h-full flex flex-col items-center justify-center px-2 ">
          <StaticImage
            height={768}
            alt="logo funksion"
            objectFit="contain"
            placeholder="tracedSVG"
            src="../images/logoo.png"
          />
        </div>
        <div className="w-1/2 flex flex-col items-center justify-between space-y-4 md:space-y-6 mr-4 md:mr-6 lg:mr-8 border-green-400 font-miriam-mono text-white font-bold ">
          <div className="flex items-end h-full w-full bg-autumn-green rounded-3xl">
            <h1 className="ml-2 text-2xl md:text-4xl">/create</h1>
          </div>
          <div className="flex items-end h-full w-full bg-ocean-denim-blue rounded-3xl">
            <p className="ml-2 text-2xl md:text-4xl">/design</p>
          </div>
          <div className="flex items-end h-full w-full bg-bordeaux-brick rounded-3xl">
            <p className="ml-2 text-2xl md:text-4xl">/code</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
