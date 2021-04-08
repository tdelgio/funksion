import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const Header = ({ siteTitle }) => (
  <header className="bg-purple-900">
    <div className=" my-0 mx-auto p-4 max-w-2xl">
      <h1 style={{ margin: 0 }}>
        <Link to="/" className="text-white font-bold no-underline">
          {siteTitle}
        </Link>
      </h1>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
