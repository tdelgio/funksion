import * as React from "react"
import { Link } from "gatsby"

const GetInTouch = props => (
  <>
    <div className="w-full min-h-screen flex items-center justify-center">
      <div className=" flex flex-col items-center justify-center font-miriam-mono font-bold md:transform md:scale-150">
        <p className="font-bold text-4xl pl-2">
          {props.data.title}
          <p className="font-work-reg text-2xl pl-2 text-autum-orange">
            {" "}
            {props.data.subtitle1}
            <br />
            {props.data.subtitle2}
          </p>
        </p>
        <form
          className="w-screen md:w-96 flex flex-col items-center justify-center pt-5"
          method="post"
          netlify-honeypot="bot-field"
          data-netlify="true"
          name="mobile"
          action="/thanks"
        >
          <input type="hidden" name="bot-field" />
          <input type="hidden" name="form-name" value="mobile" />
          <label className="w-3/4">
            <input
              className="w-full border-2 font-miriam-mono text-xl rounded-md my-2 p-2"
              placeholder="Name: "
              type="text"
              name="name"
              id="name"
              required
            />
          </label>
          <label className="w-3/4">
            <input
              className="w-full border-2 font-miriam-mono text-xl rounded-md my-2 p-2"
              placeholder="E-mail: "
              type="email"
              name="email"
              id="email"
              required
            />
          </label>
          <label className="w-3/4">
            <textarea
              className="w-full border-2 font-miriam-mono text-xl rounded-md my-2 p-2"
              placeholder="Message: "
              name="message"
              id="message"
              rows="7"
            />
          </label>

          <button
            className="text-white font-work-reg tracking-wide leading-5 flex items-center h-8 bg-concrete-green rounded-md px-4 text-center lg:transform lg:scale-125"
            type="submit"
          >
            {props.data.button}
          </button>
        </form>
        <Link className="pt-4 underline text-autum-orange" to="/">
          {props.data.goBack}
        </Link>
      </div>
    </div>
  </>
)

export default GetInTouch
