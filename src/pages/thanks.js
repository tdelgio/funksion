import * as React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

const ThanksPage = () => (
  <Layout>
    <SEO title="Thanks" />
    <div className="w-full h-screen flex items-center justify-center">
      <div className=" flex items-center justify-center font-work-bold md:transform md:scale-150">
        <div className="flex flex-col ">
          <svg
            width="18"
            height="333"
            viewBox="0 0 18 333"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.387743 203.749L0.0791626 265.029L16.5788 264.992L16.8874 203.712L0.387743 203.749Z"
              fill="#24617F"
            />
            <path
              d="M0.467944 135.845L0.159363 197.125L16.659 197.088L16.9676 135.808L0.467944 135.845Z"
              fill="#873A3A"
            />
            <path
              d="M0.546923 67.9409L0.238342 129.221L16.738 129.184L17.0466 67.9039L0.546923 67.9409Z"
              fill="#E0903A"
            />
            <path
              d="M0.308763 271.653L0.000183105 332.933L16.4998 332.896L16.8084 271.616L0.308763 271.653Z"
              fill="#14223C"
            />
            <path
              d="M0.625964 0.0369721L0.317383 61.3167L16.817 61.2798L17.1256 5.50012e-05L0.625964 0.0369721Z"
              fill="#E8D5AA"
            />
          </svg>
        </div>
        <p className="font bold text-4xl pl-2 ">
          /thank you!
          <p className="text-2xl pl-2">
            {" "}
            your form has been
            <br />
            received.
          </p>
        </p>
      </div>
    </div>
  </Layout>
)

export default ThanksPage
