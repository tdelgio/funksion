import React from "react"
import { Link } from "gatsby"

import { ButtonDropdownIcon, ButtonDropdownNav } from "./buttons"

const Navbar = () => {
  return (
    <>
      <ButtonDropdownIcon />
      <div className="hidden absolute lg:flex lg:items-center lg:justify-center w-full z-20">
        <ul className="link flex items-center justify-around py-18 py-6 w-1/2 ">
          <Link to="/">Hello</Link>
          <Link to="/comingsoon">Our Team</Link>
          <ButtonDropdownNav text="How do we work" />
          <Link to="/comingsoon">Contact us</Link>
        </ul>
      </div>
    </>
  )
}

export default Navbar
