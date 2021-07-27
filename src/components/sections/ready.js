import React from "react"
import { StaticImage } from "gatsby-plugin-image"

import { ButtonOutline } from "../buttons"

const Ready = () => (
  <div className="bg-ready-pattern w-screen h-full">
    <StaticImage
      width={1280}
      height={291}
      src="../../images/ready-background.png"
      alt="background pattern"
      placeholder="tracedSVG"
      className="hidden lg:block w-full"
    />

    <StaticImage
      src="../../images/ready-mobile.png"
      alt="background pattern"
      placeholder="tracedSVG"
      className="lg:hidden w-full"
    />
    <div className="w-full bg-ready-pattern text-center transform -translate-y-44">
      <h2 className="mb-4">
        Ready for your next <br className="lg:hidden" />
        website?
      </h2>
      <ButtonOutline text="Let's do it" />
    </div>
  </div>
)

export default Ready
