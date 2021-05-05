import React from "react"
import { StaticImage } from "gatsby-plugin-image"

const Code = props => {
  return (
    <div
      id="code"
      className="w-full h-full overflow-hidden md:h-screen flex flex-col xl:flex-row items-center justify-center md:justify-center"
    >
      <div className="w-3/4 lg:w-full flex flex-col lg:flex-row items-center justify-around my-8 ">
        <div className="flex items-center justify-center font-miriam-mono font-bold ">
          <div className="lg:hidden">
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
          <p className="font-roboto-bold text-4xl md:text-4xl lg:text-5xl 2xl:text-7xl pl-2">
            {props.data.title1}
            <br />
            {props.data.title2}
            <br />
            {props.data.title3}
            <br />
          </p>
        </div>
        <div className="flex flex-col 2xl:w-2/3 lg:flex-row items-center justify-center lg:items-start text-lg tracking-wider leading-6 font-work-reg pt-8 lg:pt-0 lg:space-x-20  2xl:transform 2xl:scale-150 2xl:-translate-x-5">
          <div className="flex flex-col items-center text-center py-8 hover:bg-red-700">
            <p className="font-miriam-mono font-bold text-4xl lg:text-5xl py-1">
              100%
            </p>
            <p className="font-work-md">{props.data.lighthouse1.textBlack}</p>
            <p className="text-vitamin-c">
              {props.data.lighthouse1.textYellow}
            </p>
          </div>
          <div className="flex flex-col items-center text-center py-8">
            <p className="font-miriam-mono font-bold text-4xl lg:text-5xl py-1">
              100%
            </p>
            <p className="font-work-md">{props.data.lighthouse2.textBlack}</p>
            <p className="text-vitamin-c">
              {props.data.lighthouse2.textYellow}
            </p>
          </div>
          <div className="flex flex-col items-center text-center py-8">
            <p className="font-miriam-mono font-bold text-4xl lg:text-5xl py-1">
              100%
            </p>
            <p className="font-work-md">{props.data.lighthouse3.textBlack}</p>
            <p className="text-vitamin-c text-center">
              {props.data.lighthouse3.textYellow1} <br />
              {props.data.lighthouse3.textYellow2}
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
