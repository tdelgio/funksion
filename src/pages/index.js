import * as React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/hero"
// import Create from "../components/sections/create"
// import Design from "../components/sections/design"
// import Code from "../components/sections/code"
// import Contact from "../components/sections/contact"

const IndexPage = () => (
  <Layout>
    <SEO title="Funksion" />
    <Hero />
    {/* <Create />
    <Design/>
    <Code/>
    <Contact  /> */}
  </Layout>
)

export default IndexPage
