import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { ButtonIcon } from "./buttons"

export const CardTD = props => {
  return (
    <>
      <div className="sm:mx-4 my-8 md:mx-auto lg:h-80">
        <div className="flex flex-col items-center justify-around sm:px-2 py-6 w-full max-w-md rounded-lg shadow-card border-card border-gray-50 space-y-3">
          <StaticImage
            height={64}
            width={64}
            src="../images/avatar-td.png"
            className="rounded-full"
          />
          <p>Tomás</p>
          <p className="strong text-brand">Web Developer</p>
          <p className="max-w-sm pt-2 px-6">
            Coding is one of my passions, I’m always improving and learning new
            skills. The sea and the mountains are my favourites playgrounds. L
            orem ipsun orem ipsun orem ipsun
            <ButtonIcon className="ml-auto" text="Check out my portfolio" />
          </p>
        </div>
      </div>
    </>
  )
}

export const CardLD = props => {
  return (
    <>
      <div className="sm:mx-4 my-8 md:mx-auto lg:h-80">
        <div className="flex flex-col items-center justify-around sm:px-2 py-6 w-full max-w-md rounded-lg shadow-card border-card border-gray-50 space-y-3">
          <StaticImage
            height={64}
            width={64}
            src="../images/avatar-lu.png"
            className="rounded-full"
          />
          <p>Ludmila</p>
          <p className="strong text-brand">Designer</p>
          <p className="max-w-sm pt-2 px-6">
            Inspiration is everywhere and I love to see it all around me: in the
            colors of the sunset, in the sounds of the ocean or the texture of a
            leave. Nature is my main muse.
            <div className="w-full">
              <ButtonIcon text="Say Hi" />
            </div>
          </p>
        </div>
      </div>
    </>
  )
}
