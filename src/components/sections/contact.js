import React from "react"

import { ButtonIconSend } from "../buttons"
import SelectCountries from "../select"
import { HeroPattern } from "../patterns"

const Contact = () => {
  return (
    <div id="contact" className="relative w-screen overflow-x-hidden">
      <div className="absolute top-0 right-0 lg:left-0  transform translate-x-52 lg:-translate-x-40 xl:translate-x-0 xl:scale-125">
        <HeroPattern />
      </div>
      <div className="pt-16 mx-auto w-screen px-2 sm:px-4 max-w-md lg:max-w-full flex flex-col items-center space-y-4 lg:flex-row lg:justify-between lg:min-h-screen overflow-x-hidden max-w-screen lg:shadow-md">
        <div className="flex flex-col items-center z-20">
          <div>
            <h2 className="">Contact us.</h2>
            <h4 className="hidden lg:block md:mt-2">
              Don’t be shy. We would love to <br className="hidden lg:block" />
              help you bring your ideas to life.
            </h4>
            <p className="mt-4 lg:hidden">
              Don’t be shy. We would love to <br className="hidden lg:block" />
              help you bring your ideas to life.
            </p>
          </div>
        </div>
        <form
          method="post"
          netlify-honeypot="bot-field"
          data-netlify="true"
          name="contact"
          className="w-full max-w-md lg:max-w-2xl h-full flex flex-col justify-center mx-auto lg:shadow-lg lg:p-8 lg:rounded-lg"
        >
          <div className="flex flex-col lg:flex-row">
            <div className="flex flex-col lg:w-1/2">
              <input type="hidden" name="bot-field" />
              <input type="hidden" name="form-name" value="contact" />
              <label for="name" className="label block" for="name">
                <span className="text-orange-autumn-dk">*</span>Name:{" "}
              </label>
              <input
                id="name"
                type="text"
                name="firstname"
                className="input "
                required
              />
            </div>
            <div className="flex flex-col lg:w-1/2 lg:pl-4">
              <label className="label" for="lastname">
                Last Name:
              </label>
              <input
                id="lastname"
                type="text"
                name="lastname"
                className="input"
              />
            </div>
          </div>

          <div className="flex flex-col lg:flex-row">
            <div className="flex flex-col lg:w-1/2">
              <label className="label" for="email">
                <span className="text-orange-autumn-dk">*</span>Email:
              </label>
              <input
                id="email"
                type="email"
                name="email"
                className="input "
                required
              />
            </div>
            <div className="flex flex-col lg:w-1/2 lg:pl-4">
              <label className="label" for="phone">
                Phone:
              </label>
              <input id="phone" type="number" name="phone" className="input" />
            </div>
          </div>

          <label className="label" name="country">
            Country / Region:
          </label>
          <SelectCountries className="input" />

          <label className="label" for="subject">
            <span className="text-orange-autumn-dk">*</span>Subject:
          </label>
          <input
            id="subject"
            type="text"
            name="subjet"
            className="input"
            required
          />

          <label className="label" for="message">
            <span className="text-orange-autumn-dk">*</span>Message:
          </label>
          <textarea
            id="message"
            rows="4"
            cols="50"
            name="message"
            className="input"
            required
          />
          <div className="mt-4 lg:ml-auto lg:hidden">
            <ButtonIconSend type="submit" text="Submit" />
          </div>
          <div className=" hidden lg:block mt-4 lg:ml-auto">
            <ButtonIconSend type="submit" text="Send" />
          </div>
        </form>
      </div>
    </div>
  )
}

export default Contact
