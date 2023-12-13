import React from "react"
import { Link } from "gatsby"
import { AnchorLink } from "gatsby-plugin-anchor-links"

import scrollTo from "gatsby-plugin-smoothscroll"

const ButtonStyled = props => {
  return (
    <AnchorLink
      to={props.scrollId}
      className=" navLink border border-white w-full strong pl-2 py-2 text-black rounded lg:text-left lg:pl-4 hover:bg-brand focus:bg-brand focus:text-white hover:text-white hover:border-brand hover:shadow-md focus:outline-none focus:ring-0 "
    >
      {props.text}
    </AnchorLink>
  )
}

export const Dropdown = () => {
  return (
    <div className="absolute h-screen w-screen backdrop-filter backdrop-blur-sm pt-1 z-10">
      <div className="link w-60 flex flex-col space-y-2 text-black text-center bg-white rounded-lg p-2 border border-black">
        <ButtonStyled scrollId="/#hello" text="Hello" />
        <ButtonStyled scrollId="/#pricing" text="Pricing" />
        <ButtonStyled scrollId="/#about" text="Our Team" />
        <ButtonStyled scrollId="/#work" text="How do we work" />
        <ButtonStyled scrollId="/#design" text="Design System" />
        <ButtonStyled scrollId="/#develop" text="Development" />
        <ButtonStyled scrollId="/#develop" text="Development" />
        <ButtonStyled scrollId="/#contact" text="Contact us" />
      </div>
    </div>
  )
}

export const DropdownWork = ({ setDisplay }) => {
  return (
    <div className="pt-1 z-10" onClick={() => setDisplay("hidden")}>
      <div className="link w-52 flex flex-col justify-start space-y-2 border border-black text-black bg-white rounded-md p-2 shadow-md">
        <ButtonStyled scrollId="#design" text="Design System" />
        <ButtonStyled scrollId="#develop" text="Development" />
      </div>
    </div>
  )
}
