import React from "react"
import { StaticImage } from "gatsby-plugin-image"

const Design = () => {
  return (
    <div
      id="design"
      className="w-full lg:h-screen flex items-center font-miriam-mono font-bold"
    >
      <div className="xl:hidden">
        <StaticImage
          height={320}
          alt="logo funksion"
          objectFit="contain"
          placeholder="tracedSVG"
          src="../../images/logoo.png"
          style={{ marginLeft: "-20px", opacity: "0.8" }}
        />
      </div>
      <div className="hidden xl:block">
        <StaticImage
          height={528}
          alt="logo funksion"
          objectFit="contain"
          placeholder="tracedSVG"
          src="../../images/logoo.png"
          style={{ marginLeft: "-20px", opacity: "0.8" }}
        />
      </div>
      <div className="w-full -ml-12">
        <div className="flex flex-col items-center justify-center md:flex-row md:justify-around my-4 md:space-x-6 xl:space-x-24">
          <div className="flex items-center ">
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
            <p className="font-bold text-4xl md:text-4xl lg:text-5xl md:pl-10 xl:text-6xl pl-2 xl:transform xl:translate-x-24">
              /our
              <br />
              latest
              <br />
              projects.
              <br />
            </p>
          </div>
          <div className="flex flex-col md:flex-row py-8 xl:transform xl:-translate-x-24 xl:-translate-y-4">
            <div className="flex flex-col items-center py-8 md:py-0 md:px-4">
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
              <p className="font-work-reg pt-2">construction.</p>
              <a className="flex items-center h-10 bg-autumn-green rounded-md px-2 text-center">
                check it out
              </a>
            </div>
            <div className="flex flex-col items-center py-8 md:py-0 md:px-4">
              <div className="h-32 w-32 border-4 border-black rounded-full">
                <div className="transform translate-x-3 translate-y-4">
                  <StaticImage
                    height={90}
                    alt="contruction icon"
                    placeholder="tracedSVG"
                    src="../../images/surf-board.png"
                  />
                </div>
              </div>
              <p className="font-work-reg pt-2">surf.</p>
              <a className="flex items-center h-10 bg-ocean-denim-blue rounded-md px-2 text-center">
                do you like it?
              </a>
            </div>
            <div className="flex flex-col items-center py-8 md:py-0 md:px-4">
              <div className="h-32 w-32 border-4 border-black rounded-full">
                <div className="transform translate-x-4 translate-y-3">
                  <StaticImage
                    height={90}
                    alt="contruction icon"
                    placeholder="tracedSVG"
                    src="../../images/bread.png"
                  />
                </div>
              </div>
              <p className="font-work-reg pt-2">bread.</p>
              <a className="flex items-center h-10 bg-bordeaux-brick rounded-md px-2 text-center">
                nice & yummy
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Design
