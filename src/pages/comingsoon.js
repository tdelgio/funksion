import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import { ButtonLarge } from "../components/buttons"

const ComingSoonPage = () => (
  <Layout>
    <SEO title="CoomingSoon" />
    <div className="h-screen flex flex-col items-center justify-center space-y-4 text-center">
      <h1>Under Construction...</h1>
      <h4>
        Come back in a few days!{" "}
        <span className="transform scale-150"> 🚀</span>{" "}
      </h4>

      <Link to="/">
        <ButtonLarge text="Home" />
      </Link>
    </div>
  </Layout>
)

export default ComingSoonPage
