import * as React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/sections/hero"
import Hello from "../components/sections/hello"
import About from "../components/sections/about"
import Ready from "../components/sections/ready"
import Work from "../components/sections/work"
// import Create from "../components/sections/create"
// import Design from "../components/sections/design"
// import Code from "../components/sections/code"
// import Contact from "../components/sections/contact"

const IndexPage = () => (
  <Layout>
    <SEO title="Funksion" />
    <Hero />
    <Hello />
    <About />
    <Ready />
    <Work />
  </Layout>
)

export default IndexPage
