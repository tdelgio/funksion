import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import { ButtonOutline } from "../components/buttons"

const ComingSoonPage = () => (
  <Layout>
    <SEO title="CoomingSoon" />
    <span className="lg:hidden absolute top-0 right-0"></span>
    <div className="h-screen flex flex-col items-center justify-center space-y-4 text-center">
      <h1 className="hidden lg:block">
        This section is under <br /> construction.
      </h1>
      <h3 className="sm:transform sm:scale-125 block lg:hidden">
        This section is under <br /> construction.
      </h3>
      <p className="text-brand">
        Please come back again later.{" "}
        <span className="transform scale-150"> 🚀</span>{" "}
      </p>

      <Link className="z-20" to="/">
        <ButtonOutline text="Home" />
      </Link>
    </div>
  </Layout>
)

export default ComingSoonPage
