import * as React from "react"

import SEO from "../components/seo"
import GetInTouch from "../components/sections/get-in-touch"

import { data } from "../data"

const Contact = () => (
  <div className="mx-auto">
    <SEO title="Funksion" />
    <GetInTouch data={data.getInTouch} />
  </div>
)

export default Contact
