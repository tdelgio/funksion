import React from "react"

import { ButtonIconSend } from "../buttons"
import SelectCountries from "../select"
import { HeroPattern } from "../patterns"

const Contact = () => {
  return (
    <>
      <div
        id="contact"
        className="pt-8 relative mx-auto w-screen px-2 sm:px-4 max-w-md lg:max-w-full flex flex-col items-center space-y-4 lg:flex-row lg:justify-between lg:min-h-screen overflow-x-hidden max-w-screen lg:shadow-md"
      >
        <div className="absolute top-16 lg:-left-12  transform translate-x-12 lg:translate-y-16 scale-150">
          <HeroPattern />
        </div>
        <div className="flex flex-col items-center z-20">
          <div className="flex items-center justify-end -mt-8 transform translate-y-3 lg:-translate-x-52 "></div>
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
                First Name:
              </label>
              <input
                id="name"
                type="text"
                name="first-name"
                className="input "
                required
              />
            </div>
            <div className="flex flex-col lg:w-1/2 lg:pl-4">
              <label id="lastname" className="label" for="lastname">
                Last Name:
              </label>
              <input
                id="lastname"
                type="text"
                name="last-name"
                className="input"
                required
              />
            </div>
          </div>

          <div className="flex flex-col lg:flex-row">
            <div className="flex flex-col lg:w-1/2">
              <label className="label" for="email">
                Email:
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
              <input
                id="phone"
                type="number"
                name="phone"
                className="input"
                required
              />
            </div>
          </div>

          <label className="label" name="country">
            Country / Region:
          </label>
          <SelectCountries className="input" />

          <label className="label" for="subject">
            Subject:
          </label>
          <input
            id="subject"
            type="text"
            name="subjet"
            className="input"
            required
          />

          <label className="label" for="message">
            Message:
          </label>
          <textarea
            id="message"
            rows="4"
            cols="50"
            name="message"
            className="input"
          />
          <div className="mt-4 lg:ml-auto lg:hidden">
            <ButtonIconSend type="submit" text="Submit" />
          </div>
          <div className=" hidden lg:block mt-4 lg:ml-auto">
            <ButtonIconSend type="submit" text="Send" />
          </div>
        </form>
      </div>
    </>
  )
}

export default Contact
