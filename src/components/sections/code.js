import React from "react"
import { StaticImage } from "gatsby-plugin-image"

const Code = () => {
  return (
    <div
      id="code"
      className="w-full md:h-screen flex flex-col xl:flex-row items-center md:justify-center"
    >
      <div className="w-3/4 lg:w-full flex flex-col lg:flex-row items-center justify-around  my-4 ">
        <div className="flex items-center justify-center font-miriam-mono font-bold ">
          <div className="">
            <svg
              width="11"
              height="198"
              viewBox="0 0 11 198"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.288507 135.737L0.0791016 197.016L9.67833 196.992L9.88773 135.712L0.288507 135.737Z"
                fill="#24617F"
              />
              <path
                d="M0.368341 67.8327L0.158936 129.112L9.75816 129.088L9.96757 67.808L0.368341 67.8327Z"
                fill="#873A3A"
              />
              <path
                d="M0.447443 0.0247174L0.238037 61.3043L9.83725 61.2795L10.0467 -9.76368e-06L0.447443 0.0247174Z"
                fill="#E0903A"
              />
            </svg>
          </div>
          <p className="font-bold text-4xl md:text-4xl lg:text-5xl xl:text-6xl pl-2">
            /we make
            <br />
            a digital
            <br />
            experience.
            <br />
          </p>
        </div>
        <div className="flex flex-col lg:flex-row items-center lg:items-start text-xl tracking-widest leading-6 font-work-reg pt-8 lg:pt-0 lg:space-x-20  ">
          <div className="flex flex-col items-center text-center py-8">
            <p className="font-miriam-mono font-bold text-4xl lg:text-5xl py-1">
              100%
            </p>
            <p>performance</p>
            <p className="text-autum-orange">fully optimized</p>
          </div>
          <div className="flex flex-col items-center text-center py-8">
            <p className="font-miriam-mono font-bold text-4xl lg:text-5xl py-1">
              100%
            </p>
            <p>accessibility</p>
            <p className="text-autum-orange">for everyone</p>
          </div>
          <div className="flex flex-col items-center text-center py-8">
            <p className="font-miriam-mono font-bold text-4xl lg:text-5xl py-1">
              100%
            </p>
            <p>responsive design</p>
            <p className="text-autum-orange text-center">
              for a good experience in <br />
              any device
            </p>
          </div>
        </div>
      </div>
      <div className="hidden xl:block">
        <StaticImage
          height={528}
          alt="logo funksion"
          objectFit="contain"
          placeholder="tracedSVG"
          src="../../images/logoo.png"
          style={{ marginRight: "-20px", opacity: "0.8" }}
        />
      </div>
    </div>
  )
}

export default Code
