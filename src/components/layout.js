/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"

import Navbar from "./navbar"

const Layout = ({ children }) => {
  return (
    <>
      <div className="my-0 p-0">
        <Navbar />
        <main>{children}</main>
        <footer className="block text-center lg:text-md">
          © {new Date().getFullYear()}, Built with {"\u2728"}
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
