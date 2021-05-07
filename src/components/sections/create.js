import React from "react"

const Create = props => {
  return (
    <div id="create" className="w-screen min-h-screen flex justify-center">
      <div className="w-full flex flex-col max-w-4xl md:flex-row items-center justify-center font-work-bold">
        <div className="w-3/4 flex items-center justify-center my-4 md:transform md:scale-150">
          <div className="flex flex-col ">
            <div className="md:hidden">
              <svg
                width="11"
                height="198"
                viewBox="0 0 11 198"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.288507 135.737L0.0791016 197.016L9.67833 196.992L9.88773 135.712L0.288507 135.737Z"
                  fill="#24617F"
                />
                <path
                  d="M0.368341 67.8327L0.158936 129.112L9.75816 129.088L9.96757 67.808L0.368341 67.8327Z"
                  fill="#873A3A"
                />
                <path
                  d="M0.447443 0.0247174L0.238037 61.3043L9.83725 61.2795L10.0467 -9.76368e-06L0.447443 0.0247174Z"
                  fill="#E0903A"
                />
              </svg>
            </div>
            <div className="hidden md:block">
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
          </div>
          <h1>
            {props.data.title1}
            <br />
            {props.data.title2}
            <br />
            {props.data.title3}
            <br />
            {props.data.title4}
            <br />
          </h1>
        </div>
        <div className="w-3/4 flex flex-col items-center md:transform md:scale-150 pt-6 lg:pt-8">
          <p className="transform -translate-x-8 translate-y-3  ">
            {props.data.text1}
            <br /> {props.data.text2}
          </p>
          <div>
            <svg
              width="199"
              height="226"
              viewBox="0 0 199 226"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <ellipse
                rx="68.3204"
                ry="68.9793"
                transform="matrix(0.663504 -0.748173 0.78318 0.621795 99.354 113.385)"
                stroke="#873A3A"
                stroke-width="8"
              />
              <path
                d="M145.896 63.2542C138.939 57.4711 130.845 53.0414 122.078 50.2178C113.311 47.3943 104.042 46.2323 94.7999 46.7982C85.5581 47.3641 76.5246 49.6467 68.2151 53.5159C59.9057 57.385 52.4831 62.7648 46.3711 69.3481C40.259 75.9315 35.5773 83.5894 32.5931 91.8847C29.609 100.18 28.3809 108.95 28.979 117.695C29.577 126.439 31.9896 134.986 36.0788 142.848C40.168 150.711 45.8538 157.734 52.8117 163.517L53.3343 162.954C46.4546 157.236 40.8326 150.291 36.7893 142.518C32.7459 134.744 30.3605 126.292 29.7692 117.646C29.1778 109 30.3921 100.328 33.3428 92.1261C36.2934 83.924 40.9226 76.352 46.966 69.8426C53.0094 63.3332 60.3487 58.0138 68.5648 54.1881C76.7809 50.3624 85.713 48.1054 94.851 47.5459C103.989 46.9863 113.154 48.1353 121.823 50.9271C130.491 53.7189 138.494 58.099 145.374 63.8171L145.896 63.2542Z"
                stroke="#24617F"
                stroke-width="8"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <line
                x1="98"
                y1="43.665"
                x2="98"
                y2="-3.05176e-05"
                stroke="#24617F"
                stroke-width="2"
              />
              <path
                d="M113.842 225.074V182.498"
                stroke="#873A3A"
                stroke-width="2"
              />
              <path
                d="M114 224.073L143.949 224.073"
                stroke="#873A3A"
                stroke-width="2"
              />
              <path d="M98 1L71 1" stroke="#24617F" stroke-width="2" />
            </svg>
          </div>
          <p className="transform translate-x-24 -translate-y-4 pl-3">
            {props.data.text3}
          </p>
          <p className="font-work-semi tracking-normal text-5xl transform -translate-y-40">
            {props.data.text4}
          </p>
        </div>
      </div>
    </div>
  )
}

export default Create
