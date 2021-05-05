import * as React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/hero"
import Create from "../components/sections/create"
import Design from "../components/sections/design"
import Code from "../components/sections/code"
import Contact from "../components/sections/contact"

import { data } from "../data"

const IndexPage = () => (
  <Layout>
    <SEO title="Funksion" />
    <Hero data={data.hero} />
    <Create data={data.create} />
    <Design data={data.design} />
    <Code data={data.code} />
    <Contact data={data.contact} />
  </Layout>
)

export default IndexPage
