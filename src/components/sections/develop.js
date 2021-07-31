import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

import { ButtonMediumLink } from "../buttons"
import { DevelopMobileTop, DevelopMobileBottom } from "../patterns"

const Develop = () => {
  return (
    <div id="develop">
      {/* Mobile */}
      <div className="py-5 w-screen flex-col items-center mx-auto justify-end lg:hidden">
        <div className="w-full mx-auto overflow-x-hidden ">
          <div className="space-y-4 p-4 max-w-lg mx-auto">
            <div className="relative">
              <DevelopMobileTop />
              <h2>Develop.</h2>
              <p className="max-w-md pt-4">
                We build fast, secure, and powerful websites to create
                world-class web experiences using modern technologies. All our
                websites are adaptable to any device, and accesibile for
                everyone. No matter what you need.
              </p>
            </div>
            <div className="z-10 pb-8">
              <ButtonMediumLink
                link="https://build-ea8cf8b5-60b3-4efd-b683-efd645be90eb.gtsb.io/reports/lighthouse/index.html"
                text="View Lighthouse report"
              />
            </div>
          </div>
          <StaticImage src="../../images/develop-mobile.png" />
        </div>
      </div>
      {/* Desktop */}
      <div className="hidden lg:h-screen lg:flex lg:items-center justify-around w-full mx-auto max-w-7xl lg:max-w-full">
        <div className=" w-full max-w-7xl z-20">
          <div className="max-w-2xl space-y-4 p-4  mr-auto">
            <h2>
              Web <br />
              Development.
            </h2>
            <h4 className="max-w-3xl 2xl:max-w-xl">
              We build fast, secure, and powerful websites to create world-class
              web experiences using modern technologies. All our websites are
              adaptable to any device, and accesibile for everyone. No matter
              what you need.
            </h4>
            <div className="pt-2">
              <ButtonMediumLink
                link="https://build-ea8cf8b5-60b3-4efd-b683-efd645be90eb.gtsb.io/reports/lighthouse/index.html"
                text="View Lighthouse report"
              />
            </div>
          </div>
        </div>
        <StaticImage
          height={611}
          src="../../images/develop-background.png"
          alt="develop background"
          placeholder="tracedSvg"
          className="z-0 w-full h-screen absolute pl-8"
        />
      </div>
    </div>
  )
}

export default Develop
