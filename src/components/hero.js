import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from "gatsby"

const Hero = props => {
  return (
    <>
      <div className="w-screen h-screen flex items-center justify-center">
        <div className="absolute right-4 top-4 text-concrete-green font-work-reg tracking-wider leading-5 space-x-3">
          <Link to="/">EN</Link>
          <Link to="/spanish">ES</Link>
        </div>
        <div className="w-full mx-4 lg:mx-0 h-3/4 md:h-3/4 max-w-lg flex ">
          <div className="w-1/2 h-full flex flex-col items-center justify-center px-2 ">
            <StaticImage
              height={880}
              alt="logo funksion"
              objectFit="contain"
              placeholder="tracedSVG"
              src="../images/logoo.png"
              style={{ height: "100%" }}
            />
          </div>
          <div className="w-1/2 flex flex-col items-center justify-between space-y-4 md:space-y-6 mr-4 md:mr-6 lg:mr-8 border-green-400 font-work-reg tracking-wide text-white">
            <a
              href="#create"
              className="flex items-end h-full w-full bg-autumn-green rounded-3xl"
            >
              <p className="ml-2 mb-1 text-2xl md:text-3xl">
                {props.data.button1}
              </p>
            </a>
            <a
              href="#design"
              className="flex items-end h-full w-full bg-ocean-denim-blue rounded-3xl"
            >
              <p className="ml-2 mb-1 text-2xl md:text-3xl">
                {props.data.button2}
              </p>
            </a>
            <a
              href="#code"
              className="flex items-end h-full w-full bg-bordeaux-brick rounded-3xl"
            >
              <p className="ml-2 mb-1 text-2xl md:text-3xl">
                {props.data.button3.text1}
                <br />
                {props.data.button3.text2}
              </p>
            </a>
          </div>
        </div>
      </div>
    </>
  )
}

export default Hero
