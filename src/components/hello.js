import * as React from "react"
import { ButtonMedium } from "./buttons"
import { HelloPattern } from "./patterns"

const Hero = () => {
  return (
    <>
      {/* Mobile */}
      <div className=" flex-col items-center justify-end max-w-md mx-auto lg:transform lg:scale-125">
        <div className="w-full mx-auto overflow-x-hidden xl:hidden ">
          <div className="space-y-4 p-4 xl:hidden ">
            <div className="">
              <p className="bg-clip-text text-transparent bg-gradient-to-r from-brand to-black">
                Everything you need.
              </p>
              <h2>
                We make a <br />
                digital
                <br /> experience.
              </h2>
              <p className="max-w-md">
                Internet is the new window, and we can help you develop an
                effective website so that your business can leave a positive and
                lasting impression on your customers.
              </p>
            </div>
            <div className="z-10">
              <ButtonMedium text="I want my website" />
            </div>
          </div>
          <div className="relative bottom-72 left-48 opacity-30 -mb-72">
            <HelloPattern />
          </div>
        </div>
      </div>
      {/* Desktop */}
      <div className="hidden xl:block xl:flex xl:items-center justify-around w-full mx-auto max-w-7xl ">
        <div className="space-y-4 p-4 ">
          <p className="bg-clip-text text-transparent bg-gradient-to-r from-brand via-black to-black">
            Everything you need.
          </p>
          <h1>
            We make a digital
            <br />
            experience.
          </h1>
          <h4 className="max-w-3xl">
            Internet is the new window, and we can help you develop an effective
            website so that your business can leave a positive and lasting
            impression on your customers.
          </h4>
          <div className="pt-2">
            <ButtonMedium text="I want my website" />
          </div>
        </div>
        <HelloPattern className="pl-8" />
      </div>
    </>
  )
}

export default Hero
