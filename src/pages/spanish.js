import * as React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/hero"
import Create from "../components/sections/create"
import Design from "../components/sections/design"
import Code from "../components/sections/code"
import Contact from "../components/sections/contact"

import { dataES } from "../dataES"

const SpanishPage = () => (
  <Layout>
    <SEO title="Funksion" />
    <Hero data={dataES.hero} />
    <Create data={dataES.create} />
    <Design data={dataES.design} />
    <Code data={dataES.code} />
    <Contact data={dataES.contact} />
  </Layout>
)

export default SpanishPage
