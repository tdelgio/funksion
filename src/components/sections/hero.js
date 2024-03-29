import React from "react"
import { Link } from "gatsby"

import { Logo, LogoMobile } from "../logo"
import { HeroPattern } from "../patterns"
import { ButtonCTAOrange, ButtonCTAWhite, ButtonLink } from "../buttons"

const Hero = props => {
  return (
    <div
      id="home"
      className="relative flex items-center justify-center min-h-screen w-full overflow-x-hidden"
    >
      <div className="absolute bottom-0 right-0 opacity-60 xl:opacity-100 transform -translate-y-10 scale-125 xl:-translate-y-16 translate-x-56">
        <HeroPattern />
      </div>
      {/* Mobile */}

      <div className="py-16 w-full lg:hidden text-center space-y-4 md:space-y-8 sm:transform">
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
          <ButtonCTAWhite scrollId="#hello" text="Find out more" />
          <ButtonCTAOrange scrollId="#contact" text="Get in touch" />
        </div>
      </div>

      {/* Desktop */}
      <div className="relative hidden lg:block w-full max-w-screen-2xl py-40">
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
