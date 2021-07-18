import React from "react"
import { Link } from "gatsby"

import { ButtonDropdownIcon } from "./buttons"

const Navbar = () => {
  return (
    <>
      <ButtonDropdownIcon />
      <div className="hidden absolute lg:flex lg:items-center lg:justify-center w-full z-20">
        <ul className="link flex items-center justify-around py-18 py-6 w-1/2 ">
          <Link to="/comingsoon">Hello</Link>
          <Link to="/comingsoon">Our Team</Link>
          <Link to="/comingsoon" className="flex items-center">
            How we work
            <svg
              className="ml-2"
              width="25"
              height="24"
              viewBox="0 0 25 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19.6293 9L12.1293 16.5L4.62927 9"
                stroke="#E09143"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </Link>
          <Link to="/comingsoon">Contact us</Link>
        </ul>
      </div>
    </>
  )
}

export default Navbar
