import React from "react"
import { Link } from "gatsby"

import { Logo, LogoMobile } from "./logo"
import { HeroPattern } from "./patterns"
import {
  ButtonCTAWhite,
  ButtonCTAOrange,
  ButtonCompact,
  ButtonMedium,
  ButtonLarge,
  ButtonOutline,
  ButtonDisabled,
  ButtonDropdown,
  ButtonDropdownIcon,
  ButtonIcon,
  ButtonIconOnly,
  ToggleOn,
} from "./buttons"

const Hero = props => {
  return (
    <>
      <div className="relative h-screen w-full">
        <div className="transform sm:scale-125 md:scale-150 lg:scale-100 h-full flex flex-col items-center justify-center space-y-4">
          <div className="w-full max-w-6xl">
            <div className="w-full lg:flex lg:items-center lg:justify-around text-center lg:text-justify transform xl:scale-125  ">
              <div className="mb-6">
                <LogoMobile />
                <Logo />
              </div>
              <div className="w-full lg:w-auto">
                {/* Title Mobile */}
                <div className="py-2">
                  <h3 className="lg:hidden transform md:scale-125">
                    We design & <br />
                    develop websites.
                  </h3>
                  {/* Title Desktop */}
                  <h1 className="hidden lg:block">
                    We design & <br />
                    develop websites.
                  </h1>
                </div>
                <div className="py-2">
                  {/*Description Mobile */}
                  <p className="lg:hidden">
                    We design and develop responsive,
                    <br />
                    fast and user-friendly websites.
                  </p>
                  {/* Description Desktop */}
                  <p className="hidden font-work-reg text-xl lg:block">
                    We design and develop responsive, fast and
                    <br />
                    user-friendly websites.
                  </p>
                </div>
                <div className="mt-4 lg:hidden space-y-3 flex flex-col items-center justify-center">
                  <Link to="/comingsoon">
                    <ButtonCTAWhite text="Get in touch" />
                  </Link>
                  <Link to="/comingsoon">
                    <ButtonCTAOrange text="Find out more" />
                  </Link>
                </div>
                <div className="mt-4 hidden lg:flex space-x-4">
                  <Link to="/comingsoon">
                    <ButtonOutline text="Get in touch" />
                  </Link>
                  <Link to="/comingsoon">
                    <ButtonMedium text="Find out more" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Hero
