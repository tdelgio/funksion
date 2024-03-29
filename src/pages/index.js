import * as React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/sections/hero"
import Hello from "../components/sections/hello"
import About from "../components/sections/about"
import Ready from "../components/sections/ready"
import Work from "../components/sections/work"
import Design from "../components/sections/design"
import Develop from "../components/sections/develop"
import Contact from "../components/sections/contact"
import Pricing from "../components/sections/pricing"

const IndexPage = () => (
  <Layout>
    <SEO title="We Are" />
    <Hero />
    <Hello />
    <About />
    <Ready />
    <Work />
    <Design />
    <Develop />
    <Pricing />
    <Contact />
  </Layout>
)

export default IndexPage
