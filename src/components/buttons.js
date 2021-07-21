import React, { useState } from "react"
import { Link } from "gatsby"

import { Dropdown, DropdownWork } from "./dropdown"

export const ButtonCompact = props => {
  return (
    <button type={props.type} className="button w-32 h-7 bg-brand text-white">
      {props.text}
    </button>
  )
}

export const ButtonMedium = props => {
  return (
    <button type={props.type} className="button w-32 h-8 bg-brand text-white">
      {props.text}
    </button>
  )
}

export const ButtonLarge = props => {
  return (
    <Link to={props.to}>
      <button
        type={props.type}
        className="button w-32 h-10 bg-brand text-white z-50"
      >
        {props.text}
      </button>
    </Link>
  )
}

export const ButtonOutline = props => {
  return (
    <button
      type={props.type}
      className="button w-32 h-8 bg-white text-black border border-black"
    >
      {props.text}
    </button>
  )
}

export const ButtonDisabled = props => {
  return (
    <button
      type={props.type}
      className="button w-32 h-8 bg-lt-concrete text-concrete-gray"
    >
      {props.text}
    </button>
  )
}

export const ButtonDropdown = props => {
  const [display, setDisplay] = useState("hidden")
  return (
    <div className="flex flex-col">
      <button
        type={props.type}
        className="button flex justify-around items-center w-32 h-8 bg-white text-black border border-black"
        onClick={() =>
          display === "hidden" ? setDisplay("block") : setDisplay("hidden")
        }
      >
        {props.text}
        <svg
          width="25"
          height="24"
          viewBox="0 0 25 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M19.6293 9L12.1293 16.5L4.62927 9"
            stroke="black"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </button>
      <div className={display}>
        <Dropdown />
      </div>
    </div>
  )
}

export const ButtonDropdownNav = props => {
  const [display, setDisplay] = useState("hidden")
  return (
    <div className="flex flex-col w-52">
      <button
        className="link flex justify-around items-center bg-white text-black "
        onClick={() =>
          display === "hidden" ? setDisplay("block") : setDisplay("hidden")
        }
      >
        {props.text}
        <svg
          className="ml-1"
          width="25"
          height="24"
          viewBox="0 0 25 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M19.6293 9L12.1293 16.5L4.62927 9"
            stroke="#E09143"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </button>
      <div className={display}>
        <DropdownWork />
      </div>
    </div>
  )
}

export const ButtonDropdownIcon = props => {
  const [display, setDisplay] = useState("hidden")
  return (
    <div className="absolute top-3 flex flex-col pl-3 lg:hidden">
      <button
        type={props.type}
        className="button flex justify-around items-center w-10 h-8 bg-white text-black border border-black z-50"
        onClick={() =>
          display === "hidden" ? setDisplay("block") : setDisplay("hidden")
        }
      >
        <svg
          width="25"
          height="24"
          viewBox="0 0 25 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M19.6293 9L12.1293 16.5L4.62927 9"
            stroke="black"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </button>
      <div className={display} onClick={() => setDisplay("hidden")}>
        <Dropdown />
      </div>
    </div>
  )
}

export const ButtonIcon = props => {
  return (
    <button className="button flex justify-center items-center w-full max-w-xs mx-3 h-8 bg-brand text-white border">
      {props.text}
      <svg
        className="ml-3"
        width="25"
        height="25"
        viewBox="0 0 25 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12.5455 20.8474H4.63922C4.4486 20.8474 4.26578 20.7717 4.13099 20.6369C3.9962 20.5021 3.92047 20.3193 3.92047 20.1287V12.2224C3.92047 11.0897 4.14356 9.96819 4.57701 8.92176C5.01046 7.87533 5.64577 6.92451 6.44667 6.12361C7.24757 5.32271 8.19839 4.6874 9.24482 4.25395C10.2912 3.8205 11.4128 3.59741 12.5455 3.59741H12.5455C13.6781 3.59741 14.7997 3.8205 15.8461 4.25395C16.8925 4.6874 17.8434 5.32271 18.6443 6.12362C19.4452 6.92452 20.0805 7.87533 20.5139 8.92177C20.9474 9.9682 21.1705 11.0898 21.1705 12.2224V12.2224C21.1705 14.5099 20.2618 16.7037 18.6443 18.3212C17.0268 19.9387 14.833 20.8474 12.5455 20.8474Z"
          stroke="white"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M12.5455 13.7231C13.1668 13.7231 13.6705 13.2195 13.6705 12.5981C13.6705 11.9768 13.1668 11.4731 12.5455 11.4731C11.9242 11.4731 11.4205 11.9768 11.4205 12.5981C11.4205 13.2195 11.9242 13.7231 12.5455 13.7231Z"
          fill="white"
        />
        <path
          d="M8.04547 13.7231C8.66679 13.7231 9.17047 13.2195 9.17047 12.5981C9.17047 11.9768 8.66679 11.4731 8.04547 11.4731C7.42415 11.4731 6.92047 11.9768 6.92047 12.5981C6.92047 13.2195 7.42415 13.7231 8.04547 13.7231Z"
          fill="white"
        />
        <path
          d="M17.0455 13.7231C17.6668 13.7231 18.1705 13.2195 18.1705 12.5981C18.1705 11.9768 17.6668 11.4731 17.0455 11.4731C16.4242 11.4731 15.9205 11.9768 15.9205 12.5981C15.9205 13.2195 16.4242 13.7231 17.0455 13.7231Z"
          fill="white"
        />
      </svg>
    </button>
  )
}

export const ButtonIconOnly = props => {
  return (
    <button
      type={props.type}
      className="button flex items-center justify-center w-12 h-8 bg-brand text-white border"
    >
      <svg
        width="25"
        height="24"
        viewBox="0 0 25 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g clip-path="url(#clip0)">
          <path
            d="M23.0764 11.4173L20.7592 12.5759L17.7592 6.83076L20.1 5.66033C20.2759 5.57239 20.4793 5.55704 20.6663 5.61758C20.8534 5.67811 21.0092 5.8097 21.1003 5.98399L23.4058 10.3993C23.4519 10.4876 23.48 10.5842 23.4884 10.6835C23.4967 10.7827 23.4853 10.8826 23.4546 10.9774C23.4239 11.0722 23.3747 11.1599 23.3098 11.2354C23.2448 11.3109 23.1655 11.3728 23.0764 11.4173V11.4173Z"
            stroke="white"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M4.25921 12.4755L1.94193 11.3169C1.85285 11.2723 1.77353 11.2105 1.7086 11.1349C1.64367 11.0594 1.59444 10.9717 1.56377 10.8769C1.53311 10.7822 1.52163 10.6823 1.53 10.583C1.53837 10.4838 1.56642 10.3872 1.61252 10.2989L3.91811 5.88353C4.00912 5.70924 4.16495 5.57765 4.35202 5.51711C4.5391 5.45658 4.74247 5.47193 4.91834 5.55986L7.25921 6.7303L4.25921 12.4755Z"
            stroke="white"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M20.7592 12.576L19.2592 14.3308L15.8094 17.7805C15.7178 17.8721 15.6041 17.9384 15.4793 17.973C15.3545 18.0075 15.2228 18.0092 15.0972 17.9778L9.66373 16.6194C9.56182 16.594 9.46639 16.5473 9.38364 16.4826L4.25916 12.4755"
            stroke="white"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M19.2592 14.3308L15.1342 11.3308L13.9342 12.2308C13.4149 12.6202 12.7833 12.8308 12.1342 12.8308C11.4851 12.8308 10.8535 12.6202 10.3342 12.2308L9.826 11.8496C9.74004 11.7852 9.66893 11.703 9.6175 11.6086C9.56607 11.5143 9.53551 11.41 9.52789 11.3028C9.52027 11.1956 9.53577 11.088 9.57335 10.9874C9.61092 10.8867 9.66969 10.7953 9.74567 10.7193L13.4145 7.05045C13.4842 6.98081 13.5668 6.92556 13.6578 6.88787C13.7488 6.85018 13.8464 6.83078 13.9449 6.83078H17.7592"
            stroke="white"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M7.31299 6.73029L12.1242 5.32764C12.2961 5.27754 12.4802 5.29056 12.6433 5.36436L15.8841 6.83077"
            stroke="white"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M11.0092 19.9558L8.18358 19.2494C8.06892 19.2207 7.96266 19.1654 7.87346 19.0878L5.75916 17.25"
            stroke="white"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </g>
        <defs>
          <clipPath id="clip0">
            <rect
              width="24"
              height="24"
              fill="white"
              transform="translate(0.509155)"
            />
          </clipPath>
        </defs>
      </svg>
    </button>
  )
}

export const ToggleOn = () => {
  return (
    <>
      <div className="flex items-center w-11 h-6 bg-brand rounded-full p-0.5">
        <div className="flex items-center justify-center w-5 h-5 bg-white rounded-full">
          <svg
            width="14"
            height="13"
            viewBox="0 0 14 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M7 0C7.16877 0 7.33064 0.0622563 7.44998 0.173073C7.56932 0.28389 7.63636 0.43419 7.63636 0.590909V1.77273C7.63636 1.92945 7.56932 2.07975 7.44998 2.19056C7.33064 2.30138 7.16877 2.36364 7 2.36364C6.83123 2.36364 6.66936 2.30138 6.55002 2.19056C6.43068 2.07975 6.36364 1.92945 6.36364 1.77273V0.590909C6.36364 0.43419 6.43068 0.28389 6.55002 0.173073C6.66936 0.0622563 6.83123 0 7 0ZM3.18182 6.5C3.18182 5.55969 3.58409 4.65789 4.30014 3.99299C5.01619 3.32808 5.98736 2.95455 7 2.95455C8.01264 2.95455 8.98381 3.32808 9.69986 3.99299C10.4159 4.65789 10.8182 5.55969 10.8182 6.5C10.8182 7.44031 10.4159 8.34211 9.69986 9.00702C8.98381 9.67192 8.01264 10.0455 7 10.0455C5.98736 10.0455 5.01619 9.67192 4.30014 9.00702C3.58409 8.34211 3.18182 7.44031 3.18182 6.5ZM7 4.13636C6.3249 4.13636 5.67746 4.38539 5.20009 4.82866C4.72273 5.27192 4.45455 5.87312 4.45455 6.5C4.45455 7.12687 4.72273 7.72808 5.20009 8.17134C5.67746 8.61461 6.3249 8.86364 7 8.86364C7.6751 8.86364 8.32254 8.61461 8.79991 8.17134C9.27727 7.72808 9.54545 7.12687 9.54545 6.5C9.54545 5.87312 9.27727 5.27192 8.79991 4.82866C8.32254 4.38539 7.6751 4.13636 7 4.13636ZM7.63636 11.2273C7.63636 11.0706 7.56932 10.9203 7.44998 10.8094C7.33064 10.6986 7.16877 10.6364 7 10.6364C6.83123 10.6364 6.66936 10.6986 6.55002 10.8094C6.43068 10.9203 6.36364 11.0706 6.36364 11.2273V12.4091C6.36364 12.5658 6.43068 12.7161 6.55002 12.8269C6.66936 12.9377 6.83123 13 7 13C7.16877 13 7.33064 12.9377 7.44998 12.8269C7.56932 12.7161 7.63636 12.5658 7.63636 12.4091V11.2273ZM14 6.5C14 6.65672 13.933 6.80702 13.8136 6.91784C13.6943 7.02865 13.5324 7.09091 13.3636 7.09091H12.0909C11.9221 7.09091 11.7603 7.02865 11.6409 6.91784C11.5216 6.80702 11.4545 6.65672 11.4545 6.5C11.4545 6.34328 11.5216 6.19298 11.6409 6.08216C11.7603 5.97135 11.9221 5.90909 12.0909 5.90909H13.3636C13.5324 5.90909 13.6943 5.97135 13.8136 6.08216C13.933 6.19298 14 6.34328 14 6.5ZM1.90909 7.09091C2.07787 7.09091 2.23973 7.02865 2.35907 6.91784C2.47841 6.80702 2.54545 6.65672 2.54545 6.5C2.54545 6.34328 2.47841 6.19298 2.35907 6.08216C2.23973 5.97135 2.07787 5.90909 1.90909 5.90909H0.636364C0.467589 5.90909 0.305728 5.97135 0.186387 6.08216C0.0670452 6.19298 0 6.34328 0 6.5C0 6.65672 0.0670452 6.80702 0.186387 6.91784C0.305728 7.02865 0.467589 7.09091 0.636364 7.09091H1.90909ZM11.9496 1.90391C12.0689 2.01472 12.136 2.16499 12.136 2.32168C12.136 2.47837 12.0689 2.62864 11.9496 2.73945L11.0498 3.575C10.9911 3.63144 10.9209 3.67645 10.8433 3.70742C10.7656 3.73839 10.6821 3.75469 10.5976 3.75538C10.5131 3.75606 10.4293 3.74111 10.3511 3.71139C10.2729 3.68168 10.2019 3.63781 10.1421 3.58232C10.0824 3.52684 10.0351 3.46087 10.0031 3.38825C9.97112 3.31562 9.95501 3.23781 9.95575 3.15935C9.95648 3.08089 9.97404 3.00335 10.0074 2.93126C10.0407 2.85917 10.0892 2.79396 10.15 2.73945L11.0498 1.90391C11.1692 1.79313 11.331 1.7309 11.4997 1.7309C11.6685 1.7309 11.8303 1.79313 11.9496 1.90391ZM3.85 10.2605C3.91078 10.206 3.95926 10.1408 3.99261 10.0687C4.02596 9.99664 4.04352 9.91911 4.04425 9.84064C4.04498 9.76218 4.02888 9.68437 3.99689 9.61175C3.96489 9.53913 3.91764 9.47316 3.85789 9.41768C3.79814 9.36219 3.72709 9.31832 3.64888 9.28861C3.57067 9.25889 3.48688 9.24394 3.40238 9.24462C3.31788 9.24531 3.23438 9.26161 3.15674 9.29258C3.0791 9.32354 3.00888 9.36856 2.95018 9.425L2.05036 10.2605C1.98958 10.3151 1.9411 10.3803 1.90775 10.4524C1.8744 10.5244 1.85685 10.602 1.85611 10.6804C1.85538 10.7589 1.87148 10.8367 1.90348 10.9093C1.93547 10.982 1.98273 11.0479 2.04248 11.1034C2.10223 11.1589 2.17328 11.2028 2.25148 11.2325C2.32969 11.2622 2.41349 11.2771 2.49798 11.2765C2.58248 11.2758 2.66598 11.2595 2.74362 11.2285C2.82126 11.1975 2.89148 11.1525 2.95018 11.0961L3.85 10.2605ZM2.05036 1.90391C2.1697 1.79313 2.33153 1.7309 2.50027 1.7309C2.66901 1.7309 2.83085 1.79313 2.95018 1.90391L3.85 2.73945C3.91078 2.79396 3.95926 2.85917 3.99261 2.93126C4.02596 3.00335 4.04352 3.08089 4.04425 3.15935C4.04498 3.23781 4.02888 3.31562 3.99689 3.38825C3.96489 3.46087 3.91764 3.52684 3.85789 3.58232C3.79814 3.63781 3.72709 3.68168 3.64888 3.71139C3.57067 3.74111 3.48688 3.75606 3.40238 3.75538C3.31788 3.75469 3.23438 3.73839 3.15674 3.70742C3.0791 3.67645 3.00888 3.63144 2.95018 3.575L2.05036 2.73945C1.93106 2.62864 1.86404 2.47837 1.86404 2.32168C1.86404 2.16499 1.93106 2.01472 2.05036 1.90391ZM11.0498 9.425C10.9298 9.31736 10.7691 9.2578 10.6022 9.25915C10.4353 9.26049 10.2757 9.32264 10.1578 9.4322C10.0398 9.54176 9.97284 9.68996 9.97139 9.8449C9.96994 9.99983 10.0341 10.1491 10.15 10.2605L11.0498 11.0961C11.1698 11.2037 11.3306 11.2633 11.4974 11.2619C11.6643 11.2606 11.8239 11.1985 11.9419 11.0889C12.0599 10.9793 12.1268 10.8311 12.1282 10.6762C12.1297 10.5213 12.0656 10.372 11.9496 10.2605L11.0498 9.425Z"
              fill="#FFA144"
            />
          </svg>
        </div>
      </div>

      <div className="flex items-center w-11 h-6 bg-gray-200 rounded-full p-0.5">
        <div className="flex items-center transform translate-x-5 justify-center w-5 h-5 bg-white rounded-full" />
      </div>
    </>
  )
}

export const ButtonCTAWhite = props => {
  return (
    <>
      <button className="button w-72 h-9 border border-black bg-white text-black z-20">
        {props.text}
      </button>
    </>
  )
}
export const ButtonCTAOrange = props => {
  return (
    <>
      <button className="button w-72 h-9  bg-brand text-white">
        {props.text}
      </button>
    </>
  )
}
