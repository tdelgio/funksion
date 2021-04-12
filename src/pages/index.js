import * as React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/hero"
import Create from "../components/sections/create"
import Design from "../components/sections/design"
import Code from "../components/sections/code"

const IndexPage = () => (
  <Layout>
    <SEO title="Funksion" />
    <Hero />
    <Create />
    <Design />
    <Code />
  </Layout>
)

export default IndexPage
