import React from "react"
import { StaticImage } from "gatsby-plugin-image"
// import { Link } from "gatsby"

export const DesignSystemMobile = () => {
  return (
    <>
      <div className="lg:hidden h-full mx-auto backdrop-filter backdrop-blur-sm pt-1 z-10">
        <StaticImage
          width={375}
          height={1538}
          src="../../images/design-system-mobile.png"
          alt="image design system"
          placeholder="tracedSVG"
          className=" mb-8"
        />
      </div>
    </>
  )
}
export const DesignSystemDesktop = () => {
  return (
    <div className="hidden lg:block mx-auto backdrop-filter backdrop-blur-sm pt-1 z-10">
      <StaticImage
        width={800}
        height={1263}
        src="../../images/design-system-desktop.png"
        alt="image design system"
        placeholder="tracedSVG"
        className=""
      />
    </div>
  )
}
