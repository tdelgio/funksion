import * as React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/hero"
import Create from "../components/sections/create"
import Design from "../components/sections/design"
import Code from "../components/sections/code"
import Form from "../components/sections/form"

import { dataES } from "../dataES"

const IndexPage = () => (
  <Layout>
    <SEO title="Funksion" />
    <Hero data={dataES.hero} />
    <Create data={dataES.create} />
    <Design data={dataES.design} />
    <Code data={dataES.code} />
    <Form data={dataES.form} />
  </Layout>
)

export default IndexPage
