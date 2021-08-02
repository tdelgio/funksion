import React from "react"
import { IconOne, IconTwo, IconThree, IconLine } from "../icons"

const ItemOne = () => {
  return (
    <div className="mx-auto max-w-sm space-y-4">
      <IconOne />
      <h3>Research</h3>
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
    <div
      id="work"
      className="py-10 text-center flex flex-col items-center justify-center  mx-auto xl:max-w-7xl lg:shadow-lg rounded-lg lg:pt-24"
    >
      <h2>
        How we <br className="lg:hidden" /> work.
      </h2>
      <span className="hidden lg:block w-1/2 border-b-2 border-t-0 border-dotted py-4  z-0 transform translate-y-24  lg:scale-125 lg:translate-x-4 xl:-translate-x-2 xl:scale-125" />

      <div className="container-lg mt-8 lg:flex lg:pt-6 lg:flex-row z-10">
        <ItemOne />
        <ItemTwo />
        <ItemThree />
      </div>
    </div>
  )
}

export default Work
