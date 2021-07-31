import React from "react"
import { Link } from "gatsby"

import { ButtonDropdownIcon, ButtonDropdownNav } from "./buttons"
import scrollTo from "gatsby-plugin-smoothscroll"

const Navbar = () => {
  return (
    <>
      <ButtonDropdownIcon />
      <div className="hidden absolute lg:flex lg:items-center lg:justify-center w-full z-20">
        <ul className="flex items-center justify-around py-18 py-6 w-1/2 ">
          <button className="strong" onClick={() => scrollTo("#hello")}>
            Hello
          </button>
          <button className="strong" onClick={() => scrollTo("#about")}>
            Our Team
          </button>
          <ButtonDropdownNav
            onClick={() => scrollTo("#work")}
            text="How do we work"
          />
          <button className="strong" onClick={() => scrollTo("#contact")}>
            Contact us
          </button>
        </ul>
      </div>
    </>
  )
}

export default Navbar
