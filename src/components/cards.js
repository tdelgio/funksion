import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { ButtonIcon } from "./buttons"

const Card = props => {
  return (
    <div className="mx-4">
      <div className="flex flex-col items-center justify-around px-6 py-6 w-full max-w-md rounded-lg shadow-card border-card border-gray-50 space-y-3">
        <StaticImage
          height={64}
          width={64}
          src="../images/avatar-lu.png"
          className="rounded-full"
        />
        <p>Ludmila</p>
        <h3 className="text-brand">Designer</h3>
        <p className="max-w-sm px-10 pt-3">
          Inspiration is everywhere and I love to see it all around me: in the
          colors of the sunset, in the sounds of the ocean or the texture of a
          leave. Nature is my main muse.
        </p>
        <span className="w-3/4">
          <ButtonIcon text="Say Hi" />
        </span>
      </div>
    </div>
  )
}

export default Card
