import React from "react"

import { LogoFooter } from "../components/logo"

const Footer = () => (
  <footer className="flex items-center justify-center lg:text-md mt-8">
    © {new Date().getFullYear()} <LogoFooter />, All rights reserved.
  </footer>
)

export default Footer
