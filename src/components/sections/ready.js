import React from "react"

import { ButtonOutline } from "../buttons"
import { ReadyPattern } from "../patterns"

const Ready = () => (
  <div id="ready" className="relative w-full h-78 rounded-sm">
    {/* Mobile */}

    {/* Desktop */}
    <div className="h-full mx-0 max-w-screen lg:block">
      <ReadyPattern />
    </div>

    <div className="absolute top-20 md:top-28 text-center w-full">
      <h2 className="mt-2 mb-4 sm:mb-4 text-center text-3xl sm:text-4xl md:text-5xl lg:mt-0 xl:text-6xl">
        <span className="sm:whitespace-nowrap ">Ready for your next </span>
        <br className="md:hidden" />
        website?
      </h2>
      <ButtonOutline scrollId="#contact" text="Let's do it" />
    </div>
  </div>
)

export default Ready
