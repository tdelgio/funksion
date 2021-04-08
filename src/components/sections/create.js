import React from "react"

const Create = () => {
  return (
    <div
      id="create"
      className="w-full h-screen flex flex-col items-center font-miriam-mono font-bold"
    >
      <div className="w-3/4 flex items-center ml-6 my-4">
        <div className="flex flex-col">
          <svg
            width="11"
            height="199"
            viewBox="0 0 11 199"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.288507 136.749L0.0791016 198.029L9.67833 198.004L9.88773 136.725L0.288507 136.749Z"
              fill="#24617F"
            />
            <path
              d="M0.368341 68.845L0.158936 130.125L9.75816 130.1L9.96757 68.8203L0.368341 68.845Z"
              fill="#CD4536"
            />
            <path
              d="M0.447443 0.941008L0.238037 62.2206L9.83725 62.1958L10.0467 0.916281L0.447443 0.941008Z"
              fill="#E0903A"
            />
          </svg>
        </div>
        <p className="font bold text-4xl pl-2 ">
          /We
          <br />
          create
          <br />
          visual
          <br />
          content. <br />
        </p>
      </div>
    </div>
  )
}

export default Create
