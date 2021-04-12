import React from "react"
import { StaticImage } from "gatsby-plugin-image"

const Form = () => {
  return (
    <div className="w-full flex items-center justify-between border-2 border-red-400">
      <div className="transform translate-x-4 flex flex-col items-center py-4">
        <p className="text-center text-lg font-work-md leading-6  tracking-wider">
          Don't be shy &
          <br /> contact us
        </p>
        <u className="text-lg font-work-reg leading-6  tracking-wider text-center py-3">
          ASK FOR YOUR BADGET
        </u>
        <a className="flex font-work-reg leading-6  tracking-wider items-center h-8 bg-autumn-green rounded-md px-3 mt-4 text-center">
          get in touch
        </a>
      </div>
      <div className="block xl:hidden transform translate-x-10">
        <StaticImage
          height={320}
          alt="logo funksion"
          objectFit="contain"
          placeholder="tracedSVG"
          src="../../images/logoo.png"
          style={{ opacity: "0.5" }}
        />
      </div>
    </div>
  )
}

export default Form
