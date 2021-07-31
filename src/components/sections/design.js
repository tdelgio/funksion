import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

import { ButtonMedium, ButtonMediumPopUp } from "../buttons"
import { DesignMobileTop, DesignMobileBottom } from "../patterns"

const Design = () => {
  return (
    <div id="design">
      {/* Mobile */}
      <div className="py-10 w-screen flex-col items-center mx-auto justify-end  lg:hidden ">
        <div className="w-full mx-auto overflow-x-hidden">
          <div className="space-y-4 p-4 mx-auto max-w-lg ">
            <DesignMobileTop />
            <div className="relative transform -translate-y-16">
              <h2>
                Design <br />
                System.
              </h2>
              <p className="pt-4 max-w-md">
                Defining the purpose and style of color, shape, type, icons
                space and motion is essential to creating a brand aligned and
                consistent user experience.
              </p>
              <div className="z-10 py-4">
                <ButtonMediumPopUp
                  to="/design"
                  text="Check out our design system"
                />
              </div>
            </div>
          </div>
          <DesignMobileBottom />
        </div>
      </div>
      {/* Desktop */}
      <div className="relative hidden lg:h-screen lg:flex lg:items-center justify-around w-full mx-auto max-w-7xl lg:max-w-full">
        <div className=" w-full max-w-7xl z-20">
          <div className="max-w-2xl space-y-4 p-4  mr-auto">
            <h2>Design System.</h2>
            <h4 className="max-w-3xl 2xl:max-w-4xl">
              Defining the purpose and style of color, shape, type, icons space
              and motion is essential to creating a brand aligned and consistent
              user experience.
            </h4>
            <div className="z-20 pt-2">
              <ButtonMediumPopUp
                to="/design"
                text="Check out our design system"
              />
            </div>
          </div>
        </div>

        <StaticImage
          src="../../images/design-background.png"
          className="z-0 w-full max-w-screen h-screen absolute pl-8"
        />
      </div>
    </div>
  )
}

export default Design
