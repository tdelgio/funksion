import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { ButtonIconChat, ButtonIconCode, ButtonLink } from "./buttons"

export const CardTD = props => {
  return (
    <>
      <div className="flex flex-col items-center justify-around px-2 mt-8 lg:m-8 py-8 w-full max-w-lg rounded-lg shadow-card border-card border-gray-50 space-y-2">
        <StaticImage
          height={100}
          width={100}
          src="../images/avatar-td.png"
          className="rounded-full"
          placeholder="tracedSVG"
          alt="avatar"
        />
        <p>Tomás</p>
        <p className="lg:hidden strong text-brand">Web Developer</p>
        <h3 className="hidden lg:block text-brand">Web Developer</h3>
        <p className="max-w-md pt-2 px-3 sm:px-6">
          Coding is one of my passions, I’m always improving and learning new
          skills. The sea and the mountains are my favourites playgrounds. Let's
          build some cool things!
        </p>
        <div className="w-full px-1 sm:px-6 lg:px-10">
          <ButtonIconCode
            link="http://tdelgio.gatsbyjs.io"
            text="Check out my portfolio"
          />
        </div>
      </div>
    </>
  )
}

export const CardLD = props => {
  return (
    <>
      <div className="flex flex-col items-center justify-around px-2 mt-8 lg:m-8 py-8 w-full max-w-lg rounded-lg shadow-card border-card border-gray-50 space-y-2">
        <StaticImage
          height={100}
          width={100}
          src="../images/avatar-lu.png"
          className="rounded-full"
          placeholder="tracedSVG"
          alt="avatar"
        />
        <p>Ludmila</p>
        <p className="lg:hidden strong text-brand">Designer</p>
        <h3 className="hidden lg:block text-brand">Designer</h3>
        <p className="max-w-md pt-2 px-3 sm:px-6">
          Inspiration is everywhere and I love to see it all around me: in the
          colors of the sunset, in the sounds of the ocean or the texture of a
          leave. Nature is my main muse.
        </p>
        <div className="w-full px-1 sm:px-6 lg:px-10">
          <ButtonIconChat link="/comingsoon" text="Say Hi" />
        </div>
      </div>
    </>
  )
}
