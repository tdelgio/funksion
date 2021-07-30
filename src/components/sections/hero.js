import React from "react"
import { Link } from "gatsby"

import { Logo, LogoMobile } from "../logo"
import { HeroPattern } from "../patterns"
import { ButtonCTAOrange, ButtonCTAWhite, ButtonLink } from "../buttons"

const Hero = props => {
  return (
    <div className=" flex items-center justify-center min-h-screen w-full">
      {/* Mobile */}

      <div className="relative w-full lg:hidden text-center space-y-3 md:space-y-8 sm:transform">
        <div className="absolute top-0 right-0 left-1/2">
          <HeroPattern />
          <div className="md:hidden">
            <HeroPattern />
          </div>
          <div className="lg:hidden">
            <HeroPattern />
          </div>
        </div>
        <LogoMobile />
        <div className="">
          <h1>
            We design & <br />
            develop websites.
          </h1>
          <p className="big-copy">
            We design and develop responsive, <br />
            fast and user-friendly websites.
          </p>
        </div>

        <div className="flex flex-col items-center space-y-2">
          <ButtonCTAOrange text="Get in touch" />
          <ButtonCTAWhite text="Find out more" />
        </div>
      </div>

      {/* Desktop */}
      <div className="hidden lg:block w-full max-w-7xl">
        <div className="relative flex items-center justify-around">
          <div className="absolute top-0 right-0 transform lg:translate-x-32 2xl:translate-x-48 left-1/2 ">
            <HeroPattern />
          </div>
          <Logo />
          <div className="flex flex-col space-y-6">
            <h1>
              We design & <br /> develop websites.
            </h1>
            <p className="big-copy">
              We design and develop responsive, fast and <br /> user-friendly
              websites.
            </p>
            <div className="flex items-center space-x-4 max-w-xs">
              <ButtonCTAWhite text="Get in touch" />
              <ButtonCTAOrange text="Find out more" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
