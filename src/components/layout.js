/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"

import Navbar from "./navbar"
import Footer from "./footer"
import "../styles/global.css"

const Layout = ({ children }) => {
  return (
    <>
      <div className="my-0 p-0">
        <Navbar />
        <main className="space-y-16 lg:space-y-32">{children}</main>
        <Footer />
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
