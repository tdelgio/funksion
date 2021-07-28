import React from "react"

import { CardTD, CardLD } from "../cards"

const About = () => {
  return (
    <>
      <div className="py-10 px-6 mx-auto sm:max-w-md xl:max-w-6xl md:mt-32 ">
        <div className="h-full text-center space-y-6">
          {/* Mobile */}
          <h2>About us.</h2>
          <p className="xl:hidden px-5">
            We are a small team that combines visual design, branding, content
            creation and web development skills, to provide a user-friendly and
            vissualy appealing result.
          </p>
          {/* Desktop */}
          <h4 className="hidden xl:block px-5 w-full">
            We are a small team that combines visual design, branding, content
            creation and web development skills, to provide a user-friendly and
            vissualy appealing result.
          </h4>
        </div>
        <div className="mx-auto flex flex-col items-center w-full xl:flex-row xl:items-center">
          <CardTD />
          <CardLD />
        </div>
      </div>
    </>
  )
}

export default About
