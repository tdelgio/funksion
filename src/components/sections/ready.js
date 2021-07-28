import React from "react"
import { StaticImage } from "gatsby-plugin-image"

import { ButtonOutline } from "../buttons"

const Ready = () => (
  <div className="bg-ready-pattern w-screen">
    {/* Mobile */}
    <StaticImage
      width={375}
      height={204}
      src="../../images/ready-mobile.png"
      alt="background pattern"
      placeholder="tracedSVG"
      className="lg:hidden w-full mt-44"
    />
    {/* Desktop */}
    <StaticImage
      width={1280}
      height={291}
      src="../../images/ready-background.png"
      alt="background pattern"
      placeholder="tracedSVG"
      className="hidden lg:block w-full mt-28"
    />

    <div className="w-full text-center mx-auto transform -translate-y-36 sm:-translate-y-44">
      <h2 className="mb-4 sm:mb-8 text-center">
        <span className="sm:whitespace-nowrap py-2">Ready for your next </span>
        <br className="lg:hidden" />
        website?
      </h2>
      <ButtonOutline text="Let's do it" />
    </div>
  </div>
)

export default Ready