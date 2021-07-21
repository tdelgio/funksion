import * as React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/hero"
import Hello from "../components/hello"
import About from "../components/about"
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
    {/* <Create />
    <Design/>
    <Code/>
    <Contact  /> */}
  </Layout>
)

export default IndexPage
