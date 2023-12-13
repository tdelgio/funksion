import React from "react"

import {
  CardTD,
  CardLD,
  CardAbout,
  CardDevelopment,
  CardTechnology,
  CardDesign,
} from "../cards"
import { StaticImage } from "gatsby-plugin-image"

const Pricing = () => {
  return (
    <>
      <section id="pricing" className="py-24">
        <div className=" mx-auto text-center ">
          <div className="flex flex-col lg:flex-row items-center justify-center mb-20">
            <StaticImage src="../../images/logoo.png" width={248} />
            <h2 className="ml-8 mt-4 lg:mt-0">Pricing.</h2>
          </div>
          <div className="flex flex-wrap justify-center bg-brand py-24">
            {/* <!-- Pricing Card 1: Basic --> */}
            <div className="max-w-sm mx-4 mb-8 lg:mb-0 bg-white shadow-card p-6 rounded-lg border-black border-2">
              <h3 className="text-3xl mb-4 text-tertiary">Starter</h3>
              <p className="text-gray-700 mb-4">
                For those who want a professional and effective web presence.
                Perfect for getting started.
              </p>
              <p className="text-2xl font-bold">$999</p>
              <p className="text-gray-700 mb-4">+ $29.99 per month</p>
              <ul className="text-left text-gray-700 mb-8">
                <li>- Up to 4 Pages</li>
                <li>- Responsive Design</li>
                <li>- Advanced SEO</li>
                <li>- Domain and Hosting</li>
              </ul>
              <a href="#contact" className="button p-3">
                Get started
              </a>
            </div>

            {/* <!-- Pricing Card 2: Pro --> */}
            <div className="max-w-sm mx-4 mb-8 lg:mb-0 bg-white shadow-card p-6 rounded-lg border-black border-2">
              <h3 className="text-3xl mb-4 text-tertiary">Pro</h3>
              <p className="text-gray-700 mb-4">
                Best for small e-commerce stores and agencies.
              </p>
              <p className="text-2xl font-bold">$1999</p>
              <p className="text-gray-700 mb-4">+ $49.99 per month</p>
              <ul className="text-left text-gray-700 mb-4">
                <li>- Max. 10 Pages</li>
                <li>- Responsive Design</li>
                <li>- Advanced SEO</li>
                <li>- Domain and Hosting</li>
                <li>- SSL Secure</li>
                <li>- 3 Revisions</li>
              </ul>
              <a href="#contact" className="button p-3">
                Get started
              </a>
            </div>

            {/* <!-- Pricing Card 3: Business --> */}
            <div className="max-w-sm mx-4 lg:mb-0 bg-white p-6 rounded-lg shadow-card border-black border-2">
              <h3 className="text-3xl mb-4 text-tertiary">Business</h3>
              <p className="text-gray-700 mb-4">
                Perfect for established brands who want to take it to the next
                level.
              </p>
              <p className="text-2xl font-bold">$3599</p>
              <p className="text-gray-700 mb-4">+ $59.99 per month</p>
              <ul className="text-left text-gray-700 mb-4">
                <li>- Unlimited Pages</li>
                <li>- Responsive Design</li>
                <li>- Elite SEO</li>
                <li>- Domain and Hosting</li>
                <li>- SSL Secure</li>
                <li>- Unlimited Revisions</li>
              </ul>
              <a href="#contact" className="button p-3">
                Get started
              </a>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center mt-8 lg:mt-20">
            <h2 className="ml-8 mt-4 lg:mt-0">Ready to Get Started?</h2>
            <p className="big-copy ma   max-w-6xl mt-8">
              Click "Get Started" now and embark on your online journey with
              confidence. This packages are perfect for those who are new to the
              digital landscape and want a hassle-free, professional start.
            </p>
            <p className="font-semibold big-copy">
              {" "}
              Let's build your online presence together!.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

export default Pricing
