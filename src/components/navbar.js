import React from "react"
import { Link } from "gatsby"

import { ButtonDropdownIcon, ButtonDropdownNav } from "./buttons"
import scrollTo from "gatsby-plugin-smoothscroll"

const Navbar = () => {
  return (
    <>
      <ButtonDropdownIcon />
      <navbar className="hidden fixed top-0 z-50 lg:flex lg:items-center lg:justify-center w-full  bg-white mb-1 shadow-md ">
        <ul className="flex items-center justify-around my-18 py-4 w-1/2 bg-white ">
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
      </navbar>
    </>
  )
}

export default Navbar
