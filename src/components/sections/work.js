import React from "react"
import { IconOne, IconTwo, IconThree, IconLine } from "../icons"

const ItemOne = () => {
  return (
    <div className="mx-auto max-w-sm space-y-4">
      <IconOne />
      <h3>Reasearch</h3>
      <p className="p-3">
        Analysis of competitor’s websites and general industry web design
        trends. We create a report for you, covering best practices and our
        recomendations, with some design inspiration mood boards.
        <IconLine />
      </p>
    </div>
  )
}

const ItemTwo = () => {
  return (
    <div className="mx-auto max-w-sm space-y-4">
      <IconTwo />
      <h3>Design</h3>
      <p className="p-3">
        We design not only the look and feel of your website based on our
        research and your brand identity, but also we create a customer journey
        map to define how the user will navigate on your site, designing their
        experience.
        <IconLine />
      </p>
    </div>
  )
}

const ItemThree = () => {
  return (
    <div className="mx-auto max-w-sm space-y-4">
      <IconThree />
      <h3>Web Development</h3>
      <p className="p-3">
        We will convert the chosen desing into code. We use the latest
        technologies to make it fast, secure and accesible for everyone in any
        device.
      </p>
    </div>
  )
}

const Work = () => {
  return (
    <div className="text-center flex flex-col items-center my-10 border ">
      <h2>
        How we <br className="lg:hidden" /> work.
      </h2>
      <hr className="hidden xl:block w-1/2 border-b-2 border-t-0 border-dotted py-4 border-gray-500 z-0 transform translate-y-24" />

      <div className="container-lg my-8 xl:flex lg:py-6 lg:flex-rowb order z-10 border">
        <ItemOne />
        <ItemTwo />
        <ItemThree />
      </div>
    </div>
  )
}

export default Work
