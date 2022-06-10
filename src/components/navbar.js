import React from "react"

import { AnchorLink } from "gatsby-plugin-anchor-links"
import { Link } from "gatsby"

import { ButtonDropdownIcon, ButtonDropdownNav } from "./buttons"
import { IconMailboxBrand } from "./icons"
import { LogoNavbar } from "./logo"

const Navbar = () => {
  return (
    <div>
      <ButtonDropdownIcon />
      <navbar className="hidden mx-auto fixed top-0 z-50 lg:flex lg:items-center lg:justify-center w-full  bg-white  mb-1 shadow-md">
        <Link to="/" className="absolute left-4 shadow-sm">
          <LogoNavbar />
        </Link>
        <ul className="flex items-center justify-around my-18 py-4 w-1/2 ">
          <AnchorLink to="/#hello" className="navLink ">
            Hello
          </AnchorLink>
          <AnchorLink to="/#about" className="navLink">
            Our Team
          </AnchorLink>
          <ButtonDropdownNav to="/#work" text="How do we work" />
          <AnchorLink to="/#contact" className="navLink">
            Contact us
          </AnchorLink>
        </ul>
        <a href="/#contact" className="hidden absolute right-6 animate-bounce">
          <IconMailboxBrand />
        </a>
      </navbar>
    </div>
  )
}

export default Navbar
