import React from "react"
import { Link } from "gatsby"

import { Logo, LogoMobile } from "../logo"
import { HeroPattern } from "../patterns"
import { ButtonCTAOrange, ButtonCTAWhite, ButtonLink } from "../buttons"

const Hero = props => {
  return (
    <div
      id="home"
      className=" flex items-center justify-center min-h-screen w-full"
    >
      {/* Mobile */}

      <div className="relative w-full lg:hidden text-center space-y-4 md:space-y-8 sm:transform">
        <LogoMobile />
        <div className="">
          <h1>
            We design & <br />
            develop websites.
          </h1>
          <p className="mt-2 big-copy">
            We design and develop responsive, <br />
            fast and user-friendly websites.
          </p>
        </div>

        <div className="flex flex-col items-center space-y-2">
          <ButtonCTAOrange scrollId="#contact" text="Get in touch" />
          <ButtonCTAWhite scrollId="#hello" text="Find out more" />
        </div>
      </div>

      {/* Desktop */}
      <div className="relative hidden lg:block w-full max-w-screen-2xl	">
        <div className="absolute top-40 right-0 left-2/3 transform lg:translate-x-32 2xl:translate-x-48">
          <HeroPattern />
        </div>
        <div className=" flex items-center justify-around">
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
              <ButtonCTAWhite scrollId="#contact" text="Get in touch" />
              <ButtonCTAOrange scrollId="#hello" text="Find out more" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
