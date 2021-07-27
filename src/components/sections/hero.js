import React from "react"
import { Link } from "gatsby"

import { Logo, LogoMobile } from "../logo"
import { HeroPattern } from "../patterns"
import { ButtonCTAOrange, ButtonCTAWhite, ButtonLink } from "../buttons"

const Hero = props => {
  return (
    <div className="flex items-center justify-center min-h-screen w-full">
      {/* Mobile */}
      <div className="xl:hidden">
        <div className="text-center space-y-3 sm:transform sm:scale-125 md:scale-150">
          <LogoMobile />
          <h3 className="">
            We design & <br />
            develop websites.
          </h3>
          <p>
            We design and develop responsive, <br />
            fast and user-friendly websites.
          </p>
          <div className="flex flex-col items-center space-y-2">
            <ButtonCTAOrange text="Get in touch" />
            <ButtonCTAWhite text="Find out more" />
          </div>
        </div>
        {/* <div className="absolute right-0 bottom-0 top-1/3">
          <HeroPattern />
        </div> */}
      </div>

      {/* Desktop */}
      <div className="hidden xl:block w-full transform 2xl:scale-125 max-w-6xl">
        <div className="flex items-center justify-around">
          <Logo />
          <div className="flex flex-col space-y-6">
            <h1>
              We design & <br /> develop websites.
            </h1>
            <h4>
              We design and develop responsive, fast and <br /> user-friendly
              websites.
            </h4>
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
