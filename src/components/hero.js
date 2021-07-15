import React from "react"

import LogoMobile from "./logo"
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
    <div className="h-screen">
      <ButtonDropdownIcon />
      <div className="h-full flex flex-col items-center justify-center text-center space-y-4">
        <LogoMobile />
        <h3>
          We design & <br />
          develop websites.
        </h3>
        <p>
          We design and develop responsive,
          <br /> fast and user-friendly websites.
        </p>
        <div className="space-y-2">
          <ButtonCTAWhite text="Get in touch" />
          <ButtonCTAOrange text="Find out more" />
        </div>
      </div>
      <div className="opacity-60">
        <HeroPattern />
      </div>
    </div>
  )
}

export default Hero
