import React from "react"
import { StaticImage } from "gatsby-plugin-image"

const Design = props => {
  return (
    <div
      id="design"
      className="overflow-hidden w-full lg:h-screen flex items-center font-miriam-mono font-bold"
    >
      <div className="transform translate-y-24 md:translate-y-0 xl:hidden">
        <StaticImage
          height={320}
          alt="logo funksion"
          objectFit="contain"
          placeholder="tracedSVG"
          src="../../images/logoo.png"
          style={{ marginLeft: "-20px", opacity: "0.8" }}
        />
      </div>
      <div className="hidden xl:block ">
        <StaticImage
          height={528}
          alt="logo funksion"
          objectFit="contain"
          placeholder="tracedSVG"
          src="../../images/logoo.png"
          style={{ marginLeft: "-20px", opacity: "0.8" }}
        />
      </div>
      <div className="w-full -ml-14 md:ml-0">
        <div className="w-auto py-4 flex flex-col items-center justify-center md:flex-row md:justify-around">
          <div className="flex items-center 2xl:transform 2xl:scale-150 ">
            <div className="md:hidden">
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
            <p className="font-roboto-bold text-4xl md:text-4xl lg:text-5xl xl:pr-24  xl:text-6xl pl-2">
              {props.data.title1}
              <br />
              {props.data.title2}
              <br />
              {props.data.title3}
              <br />
            </p>
          </div>
          <div className="flex flex-col md:flex-row pt-10 md:pt-0 md:my-4 space-y-10 md:space-y-0 md:space-x-10 lg:space-x-20 2xl:transform 2xl:-translate-x-20 2xl:scale-150 ">
            <div className="flex flex-col items-center">
              <div className="h-32 w-32 border-4 border-black rounded-full">
                <div className="transform translate-x-4 translate-y-3">
                  <StaticImage
                    height={90}
                    alt="contruction icon"
                    placeholder="tracedSVG"
                    src="../../images/brickwall.png"
                  />
                </div>
              </div>
              <p className="font-work-reg leading-7 pt-2">
                {props.data.project1}
              </p>
              <a
                href="http://klarc.gatsbyjs.io"
                target="blank_"
                className="text-white font-work-reg tracking-wide leading-5 flex items-center h-8 bg-concrete-green rounded-md px-3 text-center"
              >
                {props.data.button1}
              </a>
            </div>
            <div className="flex flex-col items-center">
              <div className="h-32 w-32 border-4 border-black rounded-full">
                <div className="transform z-10 translate-x-3 translate-y-4">
                  <StaticImage
                    height={90}
                    alt="surfboard icon"
                    placeholder="tracedSVG"
                    src="../../images/surf-board.png"
                  />
                </div>
              </div>
              <p className="font-work-reg leading-7 pt-2">
                {props.data.project2}
              </p>
              <a
                href="http://escuelasurf.gtsb.io"
                target="blank_"
                className="text-white font-work-reg tracking-wide leading-5  flex items-center h-8 bg-navy-blue rounded-md px-3 text-center"
              >
                {props.data.button2}
              </a>
            </div>
            <div className="flex flex-col items-center">
              <div className="h-32 w-32 border-4 border-black rounded-full">
                <div className="transform translate-x-4 translate-y-3">
                  <StaticImage
                    height={90}
                    alt="bread icon"
                    placeholder="tracedSVG"
                    src="../../images/bread.png"
                  />
                </div>
              </div>
              <p className="font-work-reg leading-7 pt-2">
                {props.data.project3}
              </p>
              <a
                href="http://barcaza.netlify.app"
                target="blank_"
                className="text-white font-work-reg tracking-wide leading-5 flex items-center h-8 bg-royal-bordeaux rounded-md px-3 text-center"
              >
                {props.data.button3}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Design
