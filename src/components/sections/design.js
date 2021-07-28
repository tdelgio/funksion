import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

import { ButtonMedium, ButtonLink } from "../buttons"
import { DesignMobileTop, DesignMobileBottom } from "../patterns"

const Design = () => {
  return (
    <>
      {/* Mobile */}
      <div className="py-10 w-screen flex-col items-center mx-auto justify-end md:max-w-md xl:transform xl:scale-125">
        <div className="w-full mx-auto overflow-x-hidden xl:hidden">
          <div className="space-y-4 p-4 xl:hidden ">
            <div className="relative">
              <DesignMobileTop />
              <h2>
                Design <br />
                System.
              </h2>
              <p className="pt-4 max-w-md">
                Defining the purpose and style of color, shape, type, icons
                space and motion is essential to creating a brand aligned and
                consistent user experience.
              </p>
            </div>
            <div className="z-10">
              <ButtonMedium text="Check out our design system" />
            </div>
          </div>
          <DesignMobileBottom />
        </div>
      </div>
      {/* Desktop */}
      <div className="hidden xl:h-screen xl:flex xl:items-center justify-around w-full mx-auto max-w-7xl ">
        <div className="space-y-4 p-4  mr-auto">
          <h2>Design System.</h2>
          <h4 className="max-w-3xl 2xl:max-w-4xl">
            Defining the purpose and style of color, shape, type, icons space
            and motion is essential to creating a brand aligned and consistent
            user experience.
          </h4>
          <div className="pt-2">
            <ButtonMedium text="Check out our design system" />
          </div>
        </div>
        <StaticImage
          src="../../images/design-background.png"
          className="w-full h-screen absolute pl-8"
        />
      </div>
    </>
  )
}

export default Design
