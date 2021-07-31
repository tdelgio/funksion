import React from "react"
// import { Link } from "gatsby"

import scrollTo from "gatsby-plugin-smoothscroll"

const LinkStyled = props => {
  return (
    <button
      onClick={() => scrollTo(props.scrollId)}
      className="active:bg-brand strong py-2 border border-transparent text-black rounded hover:border-brand hover:bg-brand hover:text-white"
    >
      {props.text}
    </button>
  )
}

export const Dropdown = () => {
  return (
    <div className="absolute h-screen w-screen backdrop-filter backdrop-blur-sm pt-1 z-10">
      <div className="link w-60 flex flex-col space-y-2 text-black text-center border border-black bg-white rounded-lg p-2">
        <LinkStyled scrollId="#hello" text="Hello" />
        <LinkStyled scrollId="#about" text="Our Team" />
        <LinkStyled scrollId="#work" text="How do we work" />
        <LinkStyled scrollId="#design" text="Design System" />
        <LinkStyled scrollId="#develop" text="Development" />
        <LinkStyled scrollId="#contact" text="Contact us" />
      </div>
    </div>
  )
}

export const DropdownWork = () => {
  return (
    <div className="absolute h-40 w-screen pt-1 z-10">
      <div className="top-16 link w-60 flex flex-col space-y-2 text-black text-center border border-black bg-white rounded-lg p-2 shadow-md">
        <LinkStyled scrollId="#design" text="Design System" />
        <LinkStyled scrollId="#develop" text="Development" />
      </div>
    </div>
  )
}
