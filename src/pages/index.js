import * as React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/hero"
import Create from "../components/sections/create"

const IndexPage = () => (
  <Layout>
    <SEO title="Funksion" />
    <Hero />
    <Create />
  </Layout>
)

export default IndexPage
