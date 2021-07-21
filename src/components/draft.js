import React from "react"

import { Logo, LogoMobile } from "./logo"
import { CardTD } from "./cards"
import {
  ButtonCompact,
  ButtonMedium,
  ButtonLarge,
  ButtonOutline,
  ButtonDisabled,
  ButtonDropdown,
  ButtonDropdownIcon,
  ButtonIcon,
  ButtonIconOnly,
  ButtonDropdownNav,
  ToggleOn,
} from "./buttons"

const Draft = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center p-4 pt-20">
      <div className="space-y-4 mr-auto">
        <LogoMobile />
        <Logo />
        <h1>Title 1</h1>
        <h2>Headline 2</h2>
        <h3>Headline 3</h3>
        <h4>Big Copy</h4>
        <p>Body Copy</p>
        <p className="strong">Strong text</p>
        <p className="small">Small text</p>
      </div>
      <div className="flex flex-col md:flex-row space-y-2 md:space-x-4 md:space-y-0 my-2 ">
        <ButtonCompact text="Button text" />
        <ButtonMedium text="Button text" />
        <ButtonLarge text="Button text" />
        <ButtonIcon text="Button text" />
      </div>
      <div className="flex flex-col md:flex-row space-y-2  md:space-x-4 md:space-y-0 md:my-2">
        <ButtonDisabled text="Button text" />
        <ButtonOutline text="Button text" />
        <ButtonDropdown text="Option" />

        <ButtonDropdownNav text="How do we work" />
      </div>
      <div className="flex space-x-4 my-4">
        <ButtonIconOnly />
        <ToggleOn />
      </div>
      <div>
        <CardTD />
      </div>
      <ButtonLarge to="/" text="Home" />
    </div>
  )
}

export default Draft
