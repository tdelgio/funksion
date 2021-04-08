import React from "react"

const Create = () => {
  return (
    <div id="create" className="w-screen h-screen flex justify-center">
      <div className="w-full flex flex-col max-w-4xl md:flex-row items-center justify-center font-miriam-mono font-bold">
        <div className="w-3/4 flex items-center justify-center my-4 md:transform md:scale-150">
          <div className="flex flex-col ">
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
        <div className="w-3/4 flex flex-col items-center md:transform md:scale-150 pt-6 lg:pt-4">
          <p className="transform -translate-x-8 translate-y-3  ">
            brand & web site
            <br /> design
          </p>
          <svg
            width="200"
            height="227"
            viewBox="0 0 200 227"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <ellipse
              rx="68.3204"
              ry="68.9793"
              transform="matrix(0.663504 -0.748173 0.78318 0.621795 99.8089 114.342)"
              stroke="#873A3A"
              stroke-width="8"
            />
            <path
              d="M145.14 63.2269C138.045 57.5944 129.848 53.3391 121.015 50.7041C112.183 48.0692 102.888 47.106 93.6625 47.8697C84.4366 48.6335 75.46 51.1091 67.2453 55.1552C59.0306 59.2014 51.7386 64.7388 45.7857 71.4514C39.8327 78.164 35.3355 85.9202 32.5506 94.2773C29.7657 102.634 28.7478 111.429 29.555 120.158C30.3621 128.887 32.9785 137.381 37.2549 145.153C41.5312 152.926 47.3836 159.825 54.478 165.458L54.987 164.884C47.9723 159.315 42.1855 152.493 37.9572 144.807C33.7289 137.122 31.1419 128.724 30.3438 120.093C29.5457 111.461 30.5522 102.766 33.3058 94.5026C36.0594 86.2394 40.5062 78.5702 46.3923 71.933C52.2784 65.2958 59.4885 59.8205 67.611 55.8198C75.7334 51.8191 84.6092 49.3713 93.7315 48.6161C102.854 47.861 112.044 48.8133 120.777 51.4187C129.511 54.0241 137.616 58.2315 144.631 63.8008L145.14 63.2269Z"
              stroke="#24617F"
              stroke-width="8"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <line
              x1="97.5239"
              y1="44.6219"
              x2="97.5239"
              y2="0.956879"
              stroke="black"
              stroke-width="2"
            />
            <line
              x1="114.297"
              y1="226"
              x2="114.297"
              y2="183.455"
              stroke="black"
              stroke-width="2"
            />
            <path
              d="M68.0789 2.12732L98.028 2.128"
              stroke="black"
              stroke-width="2"
            />
            <path
              d="M113.484 225.159L143.433 225.159"
              stroke="black"
              stroke-width="2"
            />
          </svg>
          <p className="transform translate-x-20 -translate-y-4 ">code</p>
          <p className="font-bold text-5xl transform -translate-y-40 ">100%</p>
        </div>
      </div>
    </div>
  )
}

export default Create
