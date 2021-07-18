import React from "react"
import { Link } from "gatsby"

const LinkStyled = props => {
  return (
    <Link
      className="py-2 border border-transparent text-black rounded hover:border-black"
      activeClassName="active"
      to={props.to}
    >
      {props.text}
    </Link>
  )
}

export const Dropdown = () => {
  return (
    <div className="absolute h-screen w-screen backdrop-filter backdrop-blur-sm pt-1 z-10">
      <div className="link w-60 flex flex-col space-y-2 text-black text-center border border-black bg-white rounded-lg p-2">
        <LinkStyled to="/" text="Hello" />
        <LinkStyled to="/comingsoon" text="Our Team" />
        <LinkStyled to="/comingsoon" text="How do we work" />
        <LinkStyled to="/design" text="Design System" />
        <LinkStyled to="/comingsoon" text="Development" />
        <LinkStyled to="/comingsoon" text="Contact us" />
      </div>
    </div>
  )
}

export const DropdownWork = () => {
  return (
    <div className="absolute h-40 w-screen pt-1 z-10">
      <div className="top-16 link w-60 flex flex-col space-y-2 text-black text-center border border-black bg-white rounded-lg p-2 shadow-md">
        <LinkStyled to="/design" text="Design System" />
        <LinkStyled to="/" text="Development" />
      </div>
    </div>
  )
}
