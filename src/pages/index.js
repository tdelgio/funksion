import * as React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/hero"
import Create from "../components/sections/create"
import Design from "../components/sections/design"
import Code from "../components/sections/code"
import Form from "../components/sections/form"

const IndexPage = () => (
  <Layout>
    <SEO title="Funksion" />
    <Hero />
    <Create />
    <Design />
    <Code />
    <Form />
  </Layout>
)

export default IndexPage
