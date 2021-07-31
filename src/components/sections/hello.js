import * as React from "react"
import scrollTo from "gatsby-plugin-smoothscroll"

import { ButtonMedium, ButtonLink } from "../buttons"
import { HelloPattern } from "../patterns"

const Hello = () => {
  return (
    <div id="hello">
      {/* Mobile */}
      <div className="py-10 flex-col items-center justify-end max-w-md mx-auto lg:hidden">
        <div className="relative w-full mx-auto">
          <div className="absolute top-16 left-48 ">
            <HelloPattern />
          </div>
          <div className="z-20 space-y-4 p-4 lg:hidden pb-16 sm:pb-24 opacity-95">
            <div className="">
              <p className="pb-2 bg-clip-text text-transparent bg-gradient-to-r from-brand to-black">
                Everything you need.
              </p>
              <h2 className="text">
                We make a <br />
                digital
                <br /> experience.
              </h2>
              <p className="max-w-md pt-4">
                Internet is the new window, and we can help you develop an
                effective website so that your business can leave a positive and
                lasting impression on your customers.
              </p>
            </div>
            <div className=" z-auto mr-auto">
              <ButtonMedium scrollId="#contact" text="I want my website" />
            </div>
          </div>
        </div>
      </div>
      {/* Desktop */}
      <div className="hidden lg:flex lg:items-center justify-between w-full mx-auto max-w-7xl">
        <div className="space-y-4 p-4">
          <p className="bg-clip-text text-transparent bg-gradient-to-r from-brand via-black to-black">
            Everything you need.
          </p>
          <h2 className="text-">
            We make a digital
            <br />
            experience.
          </h2>
          <h4 className="max-w-3xl">
            Internet is the new window, and we can help you develop an effective
            website so that your business can leave a positive and lasting
            impression on your customers.
          </h4>
          <div className="pt-2">
            <ButtonMedium scrollId="#contact" text="I want my website" />
          </div>
        </div>
        <HelloPattern className="pl-8" />
      </div>
    </div>
  )
}

export default Hello
