import React from "react"

import Logo from "./logo"
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

const DesignSystem = () => {
  return (
    <>
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
    </>
  )
}

export default DesignSystem
