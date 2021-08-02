import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"

import { ButtonMediumLink } from "../buttons"
import { DevelopMobileTop, DevelopMobileBottom } from "../patterns"

const Develop = () => {
  return (
    <div id="develop" className="max-w-screen lg:max-h-screen lg:pt-8">
      {/* Mobile */}
      <div className="h-full py-5 w-screen flex-col items-center mx-auto justify-end lg:hidden ">
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
          <div className=" w-full flex items-center justify-end">
            <StaticImage
              height={475}
              src="../../images/develop-mobile.png"
              alt="background pattern"
              placeholder="tracedSVG"
              className="lg:shadow-lg"
            />
          </div>
        </div>
      </div>
      {/* Desktop */}
      <div className="hidden lg:relative h-full lg:min-h-screen lg:flex lg:items-center justify-around w-full max-w-screen mx-auto lg:shadow-lg">
        <div className=" w-full max-w-7xl z-20 mx-auto ">
          <div className="max-w-2xl space-y-4 p-4  mr-auto">
            <h2>
              Web <br />
              Development.
            </h2>
            <h4 className="max-w-3xl lg:max-w-lg 2xl:max-w-xl">
              We build fast, secure, and powerful websites to create world-class
              web experiences using modern technologies. All our websites are
              adaptable to any device, and accesibile for everyone. No matter
              what you need.
            </h4>
            <div className="pt-2">
              <ButtonMediumLink
                link="https://build-c5bbe0b2-be79-4cde-a4df-4ba5cc193d6d.gtsb.io/reports/lighthouse/index.html"
                text="View Lighthouse report"
              />
            </div>
          </div>
        </div>
        <div className="z-0 w-full max-w-screen absolute top-0 right-0 left-0">
          <StaticImage
            width={1280}
            height={676}
            layout="constrained"
            src="../../images/develop-background.png"
            alt="image background with patterns"
            placeholder="tracedSvg"
            className="min-h-screen max-h-screen w-full"
          />
        </div>
      </div>
    </div>
  )
}

export default Develop
