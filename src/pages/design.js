import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Draft from "../components/sections/draft"
import {
  DesignSystemDesktop,
  DesignSystemMobile,
} from "../components/sections/design-system"
import { ButtonMedium } from "../components/buttons"

const DesignPage = () => (
  <div className="h-full flex flex-col items-center justify-center w-full pb-8">
    <SEO title="Design System" />

    <DesignSystemMobile />
    <DesignSystemDesktop />

    <Link className="border button" to="/">
      <ButtonMedium text="Back to website" />
    </Link>
  </div>
)

export default DesignPage
