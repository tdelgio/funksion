import React from "react"
import { StaticImage } from "gatsby-plugin-image"

const Design = props => {
  return (
    <div
      id="design"
      className="overflow-hidden w-full lg:h-screen flex items-center"
    >
      <div className="transform translate-y-24 md:translate-y-0 xl:hidden">
        <StaticImage
          height={320}
          alt="logo funksion"
          objectFit="contain"
          placeholder="tracedSVG"
          src="../../images/logoo.png"
          style={{ marginLeft: "-20px", opacity: "0.8" }}
        />
      </div>
      <div className="hidden xl:block ">
        <StaticImage
          height={528}
          alt="logo funksion"
          objectFit="contain"
          placeholder="tracedSVG"
          src="../../images/logoo.png"
          style={{ marginLeft: "-20px", opacity: "0.8" }}
        />
      </div>
      <div className="w-full -ml-14 md:ml-0">
        <div className="w-auto py-4 flex flex-col items-center justify-center md:flex-row md:justify-around">
          <div className="flex items-center 2xl:transform 2xl:scale-150 ">
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
            <p className="font-work-bold text-4xl md:text-4xl lg:text-5xl xl:pr-24  xl:text-6xl pl-2">
              {props.data.title1}
              <br />
              {props.data.title2}
              <br />
              {props.data.title3}
              <br />
            </p>
          </div>
          <div className="flex flex-col md:flex-row pt-10 md:pt-0 md:my-4 space-y-10 md:space-y-0 md:space-x-10 lg:space-x-20 2xl:transform 2xl:-translate-x-20 2xl:scale-150 ">
            <div className="flex flex-col items-center">
              <div className="h-32 w-32 border-4 border-concrete-green rounded-full">
                <div className="transform translate-x-3 translate-y-5">
                  <svg
                    width="90"
                    height="85"
                    viewBox="0 0 108 108"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M82.3993 11.2356L95.5947 3.02073C97.6498 1.7414 99.4001 1.77202 99.9632 2.52124C101.676 4.79995 105.75 8.47132 102.332 10.6359C98.5485 13.0323 94.7403 15.5309 90.7694 17.5909C88.6688 18.6809 86.8624 19.3661 86.09 18.9728C81.6916 16.7339 82.1005 11.4217 82.3993 11.2356V11.2356Z"
                      stroke="#595D45"
                      stroke-width="4"
                      stroke-miterlimit="22.9256"
                    />
                    <path
                      d="M82.9939 15.7155C80.7227 17.2771 77.5023 15.515 78.5664 20.7167C79.3698 24.6493 79.9297 24.4576 77.4139 27.9727C77.2477 28.2046 75.8102 30.3099 74.032 31.4962C72.4503 32.5512 70.5291 32.6888 70.0457 33.0821"
                      stroke="#595D45"
                      stroke-width="4"
                      stroke-miterlimit="22.9256"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M76.7016 28.7172C75.8962 27.5715 74.5815 25.2379 73.2058 23.6706C71.6166 21.86 70.4186 21.2667 68.8815 24.3121C65.74 30.5362 53.1736 41.4791 64.4779 39.9655L78.163 38.133C80.0568 37.8793 80.8949 35.9883 80.5657 34.3726C80.5282 34.1888 76.8463 28.9232 76.7016 28.7172V28.7172Z"
                      stroke="#595D45"
                      stroke-width="4"
                      stroke-miterlimit="22.9256"
                    />
                    <path
                      d="M27.5039 19.39C30.4151 19.39 58.3105 18.6145 58.5094 19.6867L58.5839 32.414C58.5548 33.1056 58.0706 33.4611 57.7526 33.4631L29.567 33.6723"
                      stroke="#595D45"
                      stroke-width="4"
                      stroke-miterlimit="22.9256"
                    />
                    <path
                      d="M37.4566 19.0582L37.4512 33.6137"
                      stroke="#595D45"
                      stroke-width="4"
                      stroke-miterlimit="22.9256"
                    />
                    <path
                      d="M44.6353 34.0386L44.6875 42.8889"
                      stroke="#595D45"
                      stroke-width="4"
                      stroke-miterlimit="22.9256"
                    />
                    <path
                      d="M49.1852 48.194L48.9756 47.5708L53.9949 47.617L85.8808 47.2388C87.0102 47.2252 87.6466 46.8327 87.6605 46.484C87.7323 44.7075 88.2268 38.3809 88.0834 34.8837"
                      stroke="#595D45"
                      stroke-width="4"
                      stroke-miterlimit="22.9256"
                    />
                    <path
                      d="M66.4514 40.3135L66.2865 46.8756L65.8262 47.0438"
                      stroke="#595D45"
                      stroke-width="4"
                      stroke-miterlimit="22.9256"
                    />
                    <path
                      d="M56.5817 47.5471L56.0979 62.0532"
                      stroke="#595D45"
                      stroke-width="4"
                      stroke-miterlimit="22.9256"
                    />
                    <path
                      d="M78.5583 47.5238C78.7349 50.3795 78.7134 58.8429 78.7134 62.1504"
                      stroke="#595D45"
                      stroke-width="4"
                      stroke-miterlimit="22.9256"
                    />
                    <path
                      d="M53.6663 62.5956L103.223 62.7634C105.887 62.7721 105.47 62.3681 105.528 65.1296L105.708 73.6176C105.735 74.8691 105.318 75.7023 104.84 75.7162L96.1064 75.9795L77.7862 76.0117"
                      stroke="#595D45"
                      stroke-width="4"
                      stroke-miterlimit="22.9256"
                    />
                    <path
                      d="M87.0193 61.95C86.9344 64.4498 86.9264 73.3502 86.9464 75.9952"
                      stroke="#595D45"
                      stroke-width="4"
                      stroke-miterlimit="22.9256"
                    />
                    <path
                      d="M65.5276 62.4572C65.5305 64.5422 65.5288 66.6268 65.5288 68.7119"
                      stroke="#595D45"
                      stroke-width="4"
                      stroke-miterlimit="22.9256"
                    />
                    <path
                      d="M98.7516 75.792C98.6201 76.5269 98.6113 87.8604 98.6113 89.887"
                      stroke="#595D45"
                      stroke-width="4"
                      stroke-miterlimit="22.9256"
                    />
                    <path
                      d="M80.4224 90.6764L102.96 90.8868C105.254 90.9086 104.978 90.4752 104.943 92.6839L104.781 102.878C104.741 105.404 105.364 105.504 103.094 105.473L93.4049 105.341"
                      stroke="#595D45"
                      stroke-width="4"
                      stroke-miterlimit="22.9256"
                    />
                    <path
                      d="M49.3171 57.6635C49.3171 72.2149 72.5539 63.3833 79.2363 78.6963C81.2209 83.2442 78.4249 101.261 75.6683 106.059"
                      stroke="#595D45"
                      stroke-width="4"
                      stroke-miterlimit="22.9256"
                    />
                    <path
                      d="M17.4211 13.6031C36.1989 21.2609 24.3446 26.6343 30.9628 36.9167C34.722 42.7574 49.4488 38.3984 49.4488 51.0876C49.4488 51.3946 49.4488 51.7012 49.4488 52.0082"
                      stroke="#595D45"
                      stroke-width="4"
                      stroke-miterlimit="22.9256"
                    />
                    <path
                      d="M2 26.2291L2.03387 6.65378C2.03547 5.80633 2.39573 5.17919 2.63643 4.80179C2.67947 4.73379 3.2637 4.67612 4.23608 4.6288C9.58579 4.36792 26.7069 4.39616 30.4693 4.39616"
                      stroke="#595D45"
                      stroke-width="4"
                      stroke-miterlimit="22.9256"
                    />
                    <path
                      d="M23.4834 4.56177L23.22 15.6419"
                      stroke="#595D45"
                      stroke-width="4"
                      stroke-miterlimit="22.9256"
                    />
                    <path
                      d="M2.65479 13.6855L11.9151 13.623"
                      stroke="#595D45"
                      stroke-width="4"
                      stroke-miterlimit="22.9256"
                    />
                    <path
                      d="M37.3228 4.79088L43.2495 4.69385C43.5384 4.75907 43.9904 4.79963 43.9924 5.0796L44.0776 18.3708"
                      stroke="#595D45"
                      stroke-width="4"
                      stroke-miterlimit="22.9256"
                    />
                  </svg>
                </div>
              </div>
              <p className="font-work-reg leading-7 pt-2">
                {props.data.project1}
              </p>
              <a
                href="http://klarc.gatsbyjs.io"
                target="blank_"
                className="text-white font-work-reg tracking-wide leading-5 flex items-center h-8 bg-concrete-green rounded-md px-3 text-center"
              >
                {props.data.button1}
              </a>
            </div>
            <div className="flex flex-col items-center">
              <div className="h-32 w-32 border-4 border-ocean-denim-blue rounded-full">
                <div className="transform z-10 translate-x-7 translate-y-4">
                  <svg
                    width="66"
                    height="85"
                    viewBox="0 0 66 85"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1 25H64"
                      stroke="#3E6E8E"
                      stroke-width="4"
                      stroke-miterlimit="22.9256"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M9 24C12.9754 9.23599 16.4206 1.99991 33.9412 2C48.8912 2 52.6664 9.94223 57 24"
                      stroke="#3E6E8E"
                      stroke-width="4"
                      stroke-miterlimit="22.9256"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M9.38142 32.6321C9.44324 32.1468 9.86225 31.7827 10.3515 31.7802L55.2977 31.5507C55.7647 31.5483 56.175 31.871 56.2578 32.3306C58.3639 44.0172 46.866 55.1715 34.3522 55.0358C21.1468 54.8925 7.38724 48.2876 9.38142 32.6321Z"
                      stroke="#3E6E8E"
                      stroke-width="4"
                      stroke-miterlimit="22.9256"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M2.0504 81.3491C2.00505 81.9301 2.46414 82.4267 3.04691 82.4269L62.7637 82.454C63.3686 82.4543 63.8349 81.9195 63.7587 81.3194C62.1422 68.584 62.6161 62.9497 50.1662 56.8124C49.8951 56.6788 49.5592 56.6795 49.286 56.809C32.181 64.9166 33.3348 64.4428 16.9924 56.787C16.7123 56.6559 16.3714 56.6589 16.098 56.8035C4.95895 62.6913 3.3835 70.0624 2.09513 80.776L2.0504 81.3491Z"
                      stroke="#3E6E8E"
                      stroke-width="4"
                      stroke-miterlimit="22.9256"
                    />
                  </svg>
                </div>
              </div>
              <p className="font-work-reg leading-7 pt-2">
                {props.data.project2}
              </p>
              <a
                href="http://benalcons.netlify.app"
                target="blank_"
                className="text-white font-work-reg tracking-wide leading-5  flex items-center h-8 bg-ocean-denim-blue rounded-md px-3 text-center"
              >
                {props.data.button2}
              </a>
            </div>
            <div className="flex flex-col items-center">
              <div className="h-32 w-32 border-4 border-bordeaux-brick rounded-full">
                <div className="transform translate-x-3 translate-y-6">
                  <svg
                    width="95"
                    height="68"
                    viewBox="0 0 95 68"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M20.1882 16.2533C23.2051 12.3098 28.2602 10.4112 32.3796 8.86877"
                      stroke="#BF6363"
                      stroke-width="4"
                      stroke-miterlimit="22.9256"
                    />
                    <path
                      d="M44.6343 4.91912C48.7723 4.18457 50.7814 4.0652 54.9542 4.32985"
                      stroke="#BF6363"
                      stroke-width="4"
                      stroke-miterlimit="22.9256"
                    />
                    <path
                      d="M64.8999 6.91541C66.2403 7.14541 73.7923 10.3183 74.9633 11.0741"
                      stroke="#BF6363"
                      stroke-width="4"
                      stroke-miterlimit="22.9256"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M33.9419 4.29815C32.219 4.94827 32.571 4.59802 32.4683 6.9417C32.2463 11.9944 32.0097 16.3327 31.0628 19.1993C27.3086 30.5703 19.5233 26.3538 19.868 18.0831C19.9261 16.71 20.6725 14.5946 21.3307 12.6786C22.0645 10.544 22.7758 11.4506 20.7854 11.4122C10.1665 11.1999 -28.084 62.1902 49.6886 65C83.7163 63.4276 111.782 44.0021 77.161 10.9283C75.1971 9.05276 75.5111 8.83877 74.7682 11.896C73.7841 15.942 73.242 19.6654 71.6058 21.8009C67.892 26.6458 62.731 25.2672 63.4455 14.6395L64.8797 7.0241C65.3118 4.72933 65.667 5.0292 64.0627 4.13599C61.0083 2.43456 60.2674 2.19001 57.1579 2.02639C54.7599 1.90207 55.3348 2.09655 54.7829 5.32122C53.3846 13.4865 52.4356 20.8859 50.6326 24.8427C47.0686 32.6651 42.0936 29.7447 41.3814 21.3549C41.0282 17.1992 42.4467 13.0932 44.1514 5.51046C44.6366 3.35486 44.9643 3.52634 43.3493 3.30216C38.8119 2.67359 38.2138 2.68727 33.9419 4.29815Z"
                      stroke="#BF6363"
                      stroke-width="4"
                      stroke-miterlimit="22.9256"
                    />
                  </svg>
                </div>
              </div>
              <p className="font-work-reg leading-7 pt-2">
                {props.data.project3}
              </p>
              <a
                href="http://barcaza.netlify.app"
                target="blank_"
                className="text-white font-work-reg tracking-wide leading-5 flex items-center h-8 bg-bordeaux-brick rounded-md px-3 text-center"
              >
                {props.data.button3}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Design
