import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

import { ButtonMedium, ButtonLink } from "../buttons"
import { DevelopMobileTop, DevelopMobileBottom } from "../patterns"

const Develop = () => {
  return (
    <>
      {/* Mobile */}
      <div className="py-5 w-screen flex-col items-center mx-auto justify-end md:max-w-md xl:transform xl:scale-125">
        <div className="w-full mx-auto overflow-x-hidden xl:hidden">
          <div className="space-y-4 p-4 xl:hidden ">
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
              <ButtonMedium text="View Lighthouse report" />
            </div>
          </div>
          <DevelopMobileBottom />
        </div>
      </div>
      {/* Desktop */}
      <div className="hidden xl:h-screen xl:flex xl:items-center justify-around w-full mx-auto max-w-7xl ">
        <div className="space-y-4 p-4  mr-auto">
          <h2>
            Web <br />
            Development.
          </h2>
          <h4 className="max-w-3xl 2xl:max-w-xl">
            We build fast, secure, and powerful websites to create world-class
            web experiences using modern technologies. All our websites are
            adaptable to any device, and accesibile for everyone. No matter what
            you need.
          </h4>
          <div className="pt-2">
            <ButtonMedium text="View Lighthouse report" />
          </div>
        </div>
        <StaticImage
          src="../../images/develop-background.png"
          className="w-full h-screen absolute pl-8"
        />
      </div>
    </>
  )
}

export default Develop
