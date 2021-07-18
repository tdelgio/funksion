import React from "react"

import { Logo } from "./logo"
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
    <div className="h-screen flex flex-col justify-center p-4">
      <div className="space-y-4">
        <Logo />
        <h1>Title 1</h1>
        <h2>Headline 2</h2>
        <h3>Headline 3</h3>
        <h4>Big Copy</h4>
        <p>Body Copy</p>
        <p className="strong">Strong text</p>
        <p className="small">Small text</p>
      </div>

      <div className="flex space-x-4 my-4">
        <ButtonCompact text="Button text" />
        <ButtonMedium text="Button text" />
        <ButtonLarge text="Button text" />
        <ButtonIcon text="Button text" />
      </div>
      <div className="flex space-x-4 my-4">
        <ButtonDisabled text="Button text" />
        <ButtonOutline text="Button text" />
        <ButtonDropdown text="Option" />
        <ButtonDropdownIcon text="How do we work" />
        <ButtonDropdownNav text="How do we work" />
      </div>
      <div className="flex space-x-4 my-4">
        <ButtonIconOnly />
        <ToggleOn />
      </div>
      <ButtonLarge to="/" text="Home" />
    </div>
  )
}

export default Draft
