import React from "react"
import { StaticImage } from "gatsby-plugin-image"

export const HeroPattern = () => (
  <StaticImage
    width={466}
    height={443}
    src="../images/pattern.png"
    alt="pattern"
    placeholder="tracedSVG"
  />
)

export const HelloPattern = () => (
  <StaticImage
    width={240}
    height={376}
    src="../images/hello-pattern.png"
    alt="mobile patter"
    placeholder="tracedSvg"
    className="z-0 opacity-30 lg:opacity-100 overflow-hidden"
  />
)

export const ReadyPattern = () => (
  <svg
    className="w-full"
    width="2533"
    height="300"
    viewBox="0 0 2533 300"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M0 -397.186V697.72H779.095C799.676 696.841 820.257 695.961 840.639 697.72H929.69C931.273 697.544 932.856 697.544 934.44 697.368C939.387 697.192 944.334 697.368 949.281 697.72H1464.39C1478.84 696.841 1493.08 695.961 1507.53 695.961C1510.1 695.961 1512.08 696.665 1513.47 697.72H2533V-397.186H0V-397.186Z"
      fill="#E09143"
    />
    <path
      d="M1974.35 -395.603C1973.17 -396.658 1971.39 -397.186 1969.61 -397.186H568.54C566.759 -397.186 565.176 -396.658 563.79 -395.603C393.209 -252.605 288.327 -57.8968 288.327 156.687C288.327 366.17 388.459 556.657 551.917 698.599C552.906 698.248 554.094 698.072 555.281 698.072C580.413 697.368 605.743 699.479 630.875 700.534C636.02 700.358 641.166 700.182 646.113 700.007C665.506 699.303 684.899 698.599 704.293 698.599C710.625 698.599 716.958 698.775 723.29 698.951C724.675 698.951 726.259 698.775 727.248 698.072C729.029 696.84 731.602 696.313 734.57 697.016C738.33 697.72 741.892 698.423 745.652 698.951C778.304 698.599 810.956 694.906 843.41 698.072C847.961 697.896 852.711 697.896 857.262 697.896C866.563 697.896 875.864 698.248 885.165 698.599C885.363 698.599 885.561 698.599 885.759 698.599C889.123 698.424 892.685 698.248 896.049 698.248C897.632 698.248 899.017 698.423 900.205 698.951C900.996 699.303 901.788 699.479 902.777 699.479C903.767 699.479 904.756 699.655 905.745 699.655C905.943 699.655 906.141 699.655 906.339 699.655C915.64 699.479 924.941 697.896 934.242 697.544C940.376 697.192 946.511 697.544 952.448 698.072C955.614 697.72 958.78 697.368 961.748 697.192C978.371 696.137 994.796 697.72 1011.42 699.127C1012.61 698.599 1014.19 698.248 1015.97 698.248C1052.58 698.248 1089.19 698.775 1126 699.127C1128.17 699.127 1130.15 699.127 1132.33 699.127C1133.12 699.127 1133.72 699.127 1134.51 698.951C1153.11 698.248 1171.91 698.248 1190.71 698.072C1204.96 698.072 1219.01 698.599 1233.25 699.303C1239.98 699.303 1246.91 699.303 1253.64 699.303C1254.23 698.951 1254.82 698.424 1255.42 697.896C1256.8 696.313 1259.18 695.082 1262.34 695.082C1310.23 695.082 1358.12 697.896 1406.01 700.182C1408.59 700.182 1410.96 700.182 1413.53 700.182C1445 699.655 1476.07 695.961 1507.53 695.785C1511.29 695.785 1513.86 697.368 1515.25 699.655C1530.68 699.303 1546.12 698.775 1561.75 698.424C1606.87 697.368 1651.6 696.841 1696.71 699.479C1741.24 702.117 1785.17 699.127 1829.7 698.775C1864.53 698.599 1899.35 698.424 1934.38 698.775C1942.3 698.775 1950.21 698.951 1958.13 699.303C1964.66 699.303 1971.39 699.655 1978.11 700.358C1978.91 700.358 1979.5 700.71 1980.09 700.886C1982.27 701.062 1984.45 700.534 1985.83 699.303C2149.69 557.185 2250.02 366.346 2250.02 156.511C2249.82 -57.8968 2144.94 -252.605 1974.35 -395.603Z"
      fill="#D07A25"
    />
    <path
      d="M1764.19 -397.186H774.94C563.395 -273.008 425.861 -71.2643 425.861 156.511C425.861 377.251 555.281 573.543 755.744 698.599C785.032 697.896 814.32 695.082 843.41 697.896C847.961 697.72 852.711 697.72 857.262 697.72C866.761 697.72 876.062 698.072 885.561 698.424C889.123 698.248 892.685 698.072 896.247 698.072C898.423 698.072 900.007 698.424 901.392 699.303C902.975 699.303 904.36 699.479 905.943 699.479C906.141 699.479 906.339 699.479 906.537 699.479C915.838 699.303 925.139 697.72 934.44 697.368C940.574 697.016 946.511 697.368 952.645 697.896C955.812 697.544 958.978 697.192 961.946 697.016C978.569 695.961 994.994 697.544 1011.62 698.951C1012.8 698.423 1014.39 698.072 1016.17 698.072C1052.78 698.072 1089.39 698.599 1126.2 698.951C1128.37 698.951 1130.35 698.951 1132.53 698.951C1133.32 698.951 1133.91 698.951 1134.7 698.775C1153.31 698.072 1172.11 698.072 1190.91 697.896C1205.15 697.896 1219.2 698.424 1233.45 699.127C1240.58 699.127 1247.7 699.127 1254.63 699.127C1255.81 696.841 1258.39 694.906 1262.34 694.906C1310.23 694.906 1358.12 697.72 1406.01 700.007C1408.59 700.007 1410.96 700.007 1413.53 700.007C1445 699.479 1476.07 695.785 1507.53 695.609C1511.29 695.609 1513.86 697.192 1515.25 699.479C1530.68 699.127 1546.12 698.599 1561.75 698.248C1606.87 697.192 1651.6 696.665 1696.71 699.303C1725.21 701.062 1753.51 700.358 1781.81 699.655C1983.46 574.774 2113.67 377.955 2113.67 156.335C2113.27 -71.2642 1975.74 -273.008 1764.19 -397.186Z"
      fill="#EA9D57"
    />
    <path
      d="M1482.79 -400L1098.29 -398.241C830.943 -325.247 636.812 -106.266 636.812 152.466C636.812 405.921 823.027 621.208 1082.07 698.599C1096.71 698.775 1111.35 698.951 1126.2 699.127C1190.71 699.83 1255.02 699.479 1319.53 699.479C1350.8 699.479 1382.27 700.886 1413.53 700.358C1445 699.83 1476.07 696.137 1507.53 695.961C1509.11 695.961 1510.5 696.313 1511.69 696.664C1767.36 617.691 1950.81 403.81 1950.81 152.466C1950.81 -108.377 1753.51 -328.765 1482.79 -400Z"
      fill="#EFAD78"
    />
  </svg>
)

export const DesignMobileTop = () => (
  <svg
    width="127"
    height="157"
    viewBox="0 0 127 157"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="ml-auto"
  >
    <path
      d="M92.0177 58.4415C94.6157 58.4415 96.7217 56.6799 96.7217 54.5069C96.7217 52.3339 94.6157 50.5723 92.0177 50.5723C89.4198 50.5723 87.3138 52.3339 87.3138 54.5069C87.3138 56.6799 89.4198 58.4415 92.0177 58.4415Z"
      fill="#E09143"
    />
    <path
      d="M121.922 54.5069C121.922 56.6743 119.821 58.4415 117.218 58.4415C114.627 58.4415 112.514 56.6841 112.514 54.5069C112.514 52.3394 114.615 50.5723 117.218 50.5723C119.821 50.5723 121.922 52.3297 121.922 54.5069Z"
      fill="#E09143"
    />
    <path
      d="M92.0177 74.7264C94.6157 74.7264 96.7217 72.9648 96.7217 70.7918C96.7217 68.6188 94.6157 66.8572 92.0177 66.8572C89.4198 66.8572 87.3138 68.6188 87.3138 70.7918C87.3138 72.9648 89.4198 74.7264 92.0177 74.7264Z"
      fill="#E09143"
    />
    <path
      d="M121.922 70.7918C121.922 72.9593 119.821 74.7264 117.218 74.7264C114.627 74.7264 112.514 72.969 112.514 70.7918C112.514 68.6146 114.615 66.8572 117.218 66.8572C119.821 66.8669 121.922 68.6244 121.922 70.7918Z"
      stroke="#E09143"
      stroke-miterlimit="10"
    />
    <path
      d="M92.0177 91.0213C94.6157 91.0213 96.7217 89.2597 96.7217 87.0867C96.7217 84.9137 94.6157 83.1521 92.0177 83.1521C89.4198 83.1521 87.3138 84.9137 87.3138 87.0867C87.3138 89.2597 89.4198 91.0213 92.0177 91.0213Z"
      fill="#797E5E"
    />
    <path
      d="M121.922 87.0867C121.922 89.2542 119.821 91.0213 117.218 91.0213C114.627 91.0213 112.514 89.2639 112.514 87.0867C112.514 84.9095 114.615 83.1521 117.218 83.1521C119.821 83.1521 121.922 84.9193 121.922 87.0867Z"
      stroke="#E09143"
      stroke-miterlimit="10"
    />
    <path
      d="M92.0177 107.316C94.6157 107.316 96.7217 105.555 96.7217 103.382C96.7217 101.209 94.6157 99.447 92.0177 99.447C89.4198 99.447 87.3138 101.209 87.3138 103.382C87.3138 105.555 89.4198 107.316 92.0177 107.316Z"
      fill="#797E5E"
    />
    <path
      d="M121.922 103.382C121.922 105.549 119.821 107.316 117.218 107.316C114.627 107.316 112.514 105.559 112.514 103.382C112.514 101.214 114.615 99.447 117.218 99.447C119.821 99.447 121.922 101.204 121.922 103.382Z"
      stroke="#E09143"
      stroke-miterlimit="10"
    />
    <path
      d="M96.71 119.677C96.71 121.844 94.6089 123.611 92.006 123.611C89.4148 123.611 87.3021 121.854 87.3021 119.677C87.3021 117.509 89.4031 115.742 92.006 115.742C94.6089 115.742 96.71 117.499 96.71 119.677Z"
      fill="#797E5E"
    />
    <path
      d="M121.922 119.677C121.922 121.845 119.821 123.612 117.218 123.612C114.627 123.612 112.514 121.854 112.514 119.677C112.514 117.51 114.615 115.742 117.218 115.742C119.821 115.742 121.922 117.5 121.922 119.677Z"
      stroke="#E09143"
      stroke-miterlimit="10"
    />
    <path
      d="M96.71 135.963C96.71 138.13 94.6089 139.897 92.006 139.897C89.4148 139.897 87.3021 138.14 87.3021 135.963C87.3021 133.795 89.4031 132.028 92.006 132.028C94.6089 132.028 96.71 133.795 96.71 135.963Z"
      fill="#E09143"
    />
    <path
      d="M121.922 135.962C121.922 138.13 119.821 139.897 117.218 139.897C114.627 139.897 112.514 138.14 112.514 135.962C112.514 133.795 114.615 132.028 117.218 132.028C119.821 132.028 121.922 133.795 121.922 135.962Z"
      stroke="#E09143"
      stroke-miterlimit="10"
    />
    <path
      d="M96.71 152.257C96.71 154.425 94.6089 156.192 92.006 156.192C89.4148 156.192 87.3021 154.434 87.3021 152.257C87.3021 150.09 89.4031 148.323 92.006 148.323C94.6089 148.323 96.71 150.08 96.71 152.257Z"
      fill="#E09143"
    />
    <path
      d="M121.922 152.257C121.922 154.425 119.821 156.192 117.218 156.192C114.627 156.192 112.514 154.435 112.514 152.257C112.514 150.09 114.615 148.323 117.218 148.323C119.821 148.323 121.922 150.08 121.922 152.257Z"
      fill="#E09143"
    />
    <path
      d="M6.17927 68.341V56.6511M12.3585 62.4961H0H12.3585Z"
      stroke="#1D262D"
      stroke-miterlimit="10"
    />
    <path
      d="M6.17927 39.5656V27.8757M12.3585 33.7207H0H12.3585Z"
      stroke="#1D262D"
      stroke-miterlimit="10"
    />
    <path
      d="M6.17927 11.6899V0M12.3585 5.84493H0H12.3585Z"
      stroke="#1D262D"
      stroke-miterlimit="10"
    />
    <path
      d="M6.17927 68.341V56.6511M12.3585 62.4961H0H12.3585Z"
      stroke="#797E5E"
      stroke-width="2"
      stroke-miterlimit="10"
    />
    <path
      d="M6.17927 39.5656V27.8757M12.3585 33.7207H0H12.3585Z"
      stroke="#797E5E"
      stroke-width="2"
      stroke-miterlimit="10"
    />
    <path
      d="M6.17927 11.6899V0M12.3585 5.84493H0H12.3585Z"
      stroke="#797E5E"
      stroke-width="2"
      stroke-miterlimit="10"
    />
    <path
      d="M34.6989 68.341V56.6511M40.8782 62.4961H28.5197H40.8782Z"
      stroke="#1D262D"
      stroke-miterlimit="10"
    />
    <path
      d="M34.6989 39.5656V27.8757M40.8782 33.7207H28.5197H40.8782Z"
      stroke="#1D262D"
      stroke-miterlimit="10"
    />
    <path
      d="M34.6989 11.6899V0M40.8782 5.84493H28.5197H40.8782Z"
      stroke="#1D262D"
      stroke-miterlimit="10"
    />
    <path
      d="M34.6989 68.341V56.6511M40.8782 62.4961H28.5197H40.8782Z"
      stroke="#797E5E"
      stroke-width="2"
      stroke-miterlimit="10"
    />
    <path
      d="M34.6989 39.5656V27.8757M40.8782 33.7207H28.5197H40.8782Z"
      stroke="#797E5E"
      stroke-width="2"
      stroke-miterlimit="10"
    />
    <path
      d="M34.6989 11.6899V0M40.8782 5.84493H28.5197H40.8782Z"
      stroke="#797E5E"
      stroke-width="2"
      stroke-miterlimit="10"
    />
    <path
      d="M63.2187 39.5656V27.8757M69.398 33.7207H57.0394H69.398Z"
      stroke="#1D262D"
      stroke-miterlimit="10"
    />
    <path
      d="M63.2187 11.6899V0M69.398 5.84493H57.0394H69.398Z"
      stroke="#1D262D"
      stroke-miterlimit="10"
    />
    <path
      d="M63.2187 39.5656V27.8757M69.398 33.7207H57.0394H69.398Z"
      stroke="#797E5E"
      stroke-width="2"
      stroke-miterlimit="10"
    />
    <path
      d="M63.2187 11.6899V0M69.398 5.84493H57.0394H69.398Z"
      stroke="#797E5E"
      stroke-width="2"
      stroke-miterlimit="10"
    />
    <path
      d="M91.7385 39.5656V27.8757M97.9177 33.7207H85.5592H97.9177Z"
      stroke="#1D262D"
      stroke-miterlimit="10"
    />
    <path
      d="M91.7385 11.6899V0M97.9177 5.84493H85.5592H97.9177Z"
      stroke="#1D262D"
      stroke-miterlimit="10"
    />
    <path
      d="M91.7385 39.5656V27.8757M97.9177 33.7207H85.5592H97.9177Z"
      stroke="#797E5E"
      stroke-width="2"
      stroke-miterlimit="10"
    />
    <path
      d="M91.7385 11.6899V0M97.9177 5.84493H85.5592H97.9177Z"
      stroke="#797E5E"
      stroke-width="2"
      stroke-miterlimit="10"
    />
    <path
      d="M120.258 39.5656V27.8757M126.437 33.7207H114.079H126.437Z"
      stroke="#1D262D"
      stroke-miterlimit="10"
    />
    <path
      d="M120.258 11.6899V0M126.437 5.84493H114.079H126.437Z"
      stroke="#1D262D"
      stroke-miterlimit="10"
    />
    <path
      d="M120.258 39.5656V27.8757M126.437 33.7207H114.079H126.437Z"
      stroke="#797E5E"
      stroke-width="2"
      stroke-miterlimit="10"
    />
    <path
      d="M120.258 11.6899V0M126.437 5.84493H114.079H126.437Z"
      stroke="#797E5E"
      stroke-width="2"
      stroke-miterlimit="10"
    />
  </svg>
)

export const DesignMobileBottom = () => (
  <div className="flex justify-between w-full">
    <div>
      <svg
        width="155"
        height="152"
        viewBox="0 0 155 152"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M77.3369 75.1145H0V150.229H77.3369V75.1145Z"
          stroke="#797E5E"
          stroke-width="2"
          stroke-miterlimit="10"
        />
        <path
          d="M116.005 37.5569H38.6685V112.671H116.005V37.5569Z"
          fill="#E09143"
        />
      </svg>
    </div>
    <div>
      <svg
        width="73"
        height="160"
        viewBox="0 0 73 160"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="-mr-2"
      >
        <path
          d="M71.2392 157.34C33.8831 157.576 3.32638 122.778 2.98522 79.6323C2.64406 36.4862 32.6611 1.32158 70.0172 1.08563"
          stroke="#E09143"
          stroke-width="2"
          stroke-miterlimit="10"
        />
        <path
          d="M20.77 79.5132C20.5204 47.8018 42.4295 22.036 69.6715 21.5555L70.5722 136.862C43.3378 136.722 21.0198 111.239 20.77 79.5132Z"
          fill="#4B512B"
          stroke="#D07A25"
        />
      </svg>
    </div>
  </div>
)

export const DevelopMobileTop = () => (
  <svg
    width="21"
    height="79"
    viewBox="0 0 21 79"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="ml-auto mr-16"
  >
    <path
      d="M11.4104 49.2081C11.5532 49.2599 11.6815 49.3707 11.7744 49.5225C11.8674 49.6743 11.9194 49.858 11.922 50.0437L12.0692 60.0943L16.1423 58.7791C16.2619 58.7404 16.3905 58.7482 16.5121 58.8014C16.6337 58.8547 16.7431 58.9512 16.8266 59.0789C16.9101 59.2067 16.9642 59.3601 16.9821 59.5202C17.0001 59.6804 16.9811 59.8403 16.9276 59.9802L10.542 76.7096C10.4802 76.8716 10.3756 76.998 10.2451 77.0682C10.1146 77.1384 9.96592 77.1483 9.82335 77.0963C9.68078 77.0443 9.55269 76.9334 9.45997 76.7817C9.36726 76.63 9.31537 76.4464 9.31278 76.261L9.1652 66.2088L5.09211 67.524C4.97243 67.5627 4.84385 67.5549 4.72223 67.5017C4.60062 67.4484 4.49131 67.3519 4.40778 67.2242C4.32426 67.0964 4.27018 66.943 4.25222 66.7829C4.23427 66.6227 4.25322 66.4628 4.30674 66.3229L10.6924 49.5935C10.754 49.4317 10.8585 49.3055 10.9888 49.2352C11.1191 49.1649 11.2675 49.1548 11.41 49.2065L11.4104 49.2081Z"
      fill="#E09143"
    />
    <path
      d="M10.1935 20.6468L14.9579 15.5547L16.3429 17.0728L10.1783 23.671L4.08036 16.987L5.48738 15.4885L10.1935 20.6468Z"
      fill="#797E5E"
    />
    <path
      d="M10.2406 11.6835L15.005 6.59136L16.39 8.10941L10.2254 14.7076L4.12745 8.0236L5.53448 6.52509L10.2406 11.6835Z"
      fill="#797E5E"
    />
    <path
      d="M10.2883 2.61479L15.0528 -2.48482L16.4377 -0.959253L10.2731 5.63141L4.17514 -1.04506L5.58221 -2.55108L10.2883 2.61479Z"
      fill="#797E5E"
    />
    <path
      d="M10.0987 38.6768L14.863 33.599L16.2481 35.116L10.0836 41.6957L3.98519 35.0161L5.3922 33.5218L10.0987 38.6768Z"
      fill="#797E5E"
    />
    <path
      d="M10.1458 29.7134L14.9101 24.6356L16.2952 26.1526L10.1308 32.7323L4.03231 26.0527L5.43932 24.5584L10.1458 29.7134Z"
      fill="#797E5E"
    />
  </svg>
)

export const DevelopMobileBottom = () => (
  <div className="flex justify-between w-full">
    <div>
      <svg
        width="94"
        height="35"
        viewBox="0 0 94 35"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M76.5001 35C86.1651 35 94.0001 27.165 94.0001 17.5C94.0001 7.83502 86.1651 0 76.5001 0C66.8351 0 59.0001 7.83502 59.0001 17.5C59.0001 27.165 66.8351 35 76.5001 35Z"
          fill="#E09143"
          fill-opacity="0.8"
        />
        <path
          d="M70.5289 21.4914L71.0877 21.8219L77.2536 11.0205L76.7044 10.6997L70.5386 21.4914H70.5289Z"
          fill="#142932"
        />
        <path
          d="M82.745 20.6353H70.4133V21.2769H82.745V20.6353V20.6353Z"
          fill="#142932"
        />
        <path
          d="M70.6542 20.9957L76.82 24.5929L77.1476 24.0387L70.9721 20.4415L70.6542 20.9957V20.9957ZM76.0108 11.6235L82.1862 15.2207L82.5042 14.6568L76.3383 11.0596L76.0108 11.6235Z"
          fill="#142932"
        />
        <path
          d="M70.6542 14.6568L70.9721 15.2207L77.1379 11.6235L76.8297 11.0596L70.6542 14.6568V14.6568Z"
          fill="#142932"
        />
        <path
          d="M75.9048 11.0303L82.0706 21.8219L82.6294 21.4914L76.4635 10.6997L75.9048 11.0303ZM71.5309 14.2289H70.895V21.4233H71.5309V14.2289V14.2289Z"
          fill="#142932"
        />
        <path
          d="M82.2633 14.229H81.6274V21.4235H82.2633V14.229V14.229Z"
          fill="#142932"
        />
        <path
          d="M76.4347 23.8342L76.7237 24.3203L82.0803 21.1897L81.8009 20.7036L76.4347 23.8342Z"
          fill="#142932"
        />
        <path
          d="M83.1111 21.637C83.0282 21.802 82.9127 21.9482 82.7719 22.0666C82.631 22.1851 82.4677 22.2733 82.2919 22.326C82.1161 22.3786 81.9316 22.3945 81.7495 22.3727C81.5674 22.3509 81.3916 22.2919 81.2329 22.1992C81.0742 22.1066 80.9359 21.9822 80.8264 21.8338C80.7169 21.6854 80.6386 21.516 80.5962 21.336C80.5537 21.156 80.5481 20.9691 80.5797 20.7868C80.6112 20.6046 80.6793 20.4307 80.7797 20.2759C80.9685 19.9846 81.2607 19.7774 81.5963 19.6969C81.9318 19.6163 82.2852 19.6686 82.5837 19.8429C82.8823 20.0172 83.1033 20.3003 83.2014 20.634C83.2995 20.9677 83.2672 21.3266 83.1111 21.637V21.637ZM72.3787 15.3759C72.2957 15.5409 72.1803 15.6871 72.0395 15.8055C71.8986 15.924 71.7353 16.0122 71.5595 16.0648C71.3837 16.1175 71.1992 16.1334 71.0171 16.1116C70.835 16.0898 70.6592 16.0308 70.5005 15.9381C70.3418 15.8455 70.2035 15.7211 70.094 15.5727C69.9845 15.4243 69.9062 15.2549 69.8637 15.0749C69.8213 14.8948 69.8157 14.708 69.8473 14.5257C69.8788 14.3435 69.9469 14.1696 70.0473 14.0147C70.2361 13.7235 70.5283 13.5163 70.8639 13.4358C71.1994 13.3552 71.5528 13.4075 71.8513 13.5818C72.1499 13.7561 72.3709 14.0392 72.469 14.3729C72.5671 14.7065 72.5348 15.0655 72.3787 15.3759V15.3759ZM70.0473 21.637C69.9587 21.4818 69.9013 21.3106 69.8783 21.1331C69.8553 20.9556 69.8672 20.7753 69.9132 20.6024C69.9593 20.4295 70.0387 20.2675 70.1468 20.1255C70.2549 19.9836 70.3897 19.8645 70.5434 19.7752C70.8539 19.5947 71.2226 19.546 71.5686 19.6399C71.74 19.6864 71.9005 19.7665 72.0412 19.8756C72.1818 19.9847 72.2998 20.1207 72.3883 20.2759C72.5672 20.5891 72.6154 20.9613 72.5224 21.3105C72.4293 21.6596 72.2026 21.9572 71.8922 22.1377C71.5817 22.3182 71.213 22.3668 70.867 22.2729C70.521 22.179 70.2261 21.9503 70.0473 21.637ZM80.7797 15.3759C80.6008 15.0626 80.5526 14.6904 80.6456 14.3413C80.7387 13.9921 80.9654 13.6945 81.2758 13.5141C81.5863 13.3336 81.9551 13.2849 82.301 13.3788C82.647 13.4727 82.9419 13.7015 83.1208 14.0147C83.2996 14.328 83.3478 14.7002 83.2548 15.0493C83.1617 15.3985 82.9351 15.6961 82.6246 15.8766C82.3142 16.057 81.9454 16.1057 81.5994 16.0118C81.2534 15.9179 80.9585 15.6891 80.7797 15.3759V15.3759ZM76.5792 25.4384C76.3931 25.4543 76.2058 25.431 76.0291 25.3701C75.8524 25.3092 75.6902 25.2119 75.5527 25.0844C75.4152 24.9569 75.3055 24.802 75.2304 24.6294C75.1553 24.4569 75.1165 24.2705 75.1165 24.0821C75.1165 23.8937 75.1553 23.7073 75.2304 23.5348C75.3055 23.3623 75.4152 23.2073 75.5527 23.0798C75.6902 22.9524 75.8524 22.8551 76.0291 22.7941C76.2058 22.7332 76.3931 22.7099 76.5792 22.7259C76.9369 22.7259 77.28 22.8693 77.5329 23.1245C77.7859 23.3798 77.928 23.726 77.928 24.087C77.928 24.448 77.7859 24.7942 77.5329 25.0494C77.28 25.3047 76.9369 25.4481 76.5792 25.4481V25.4384ZM76.5792 12.9259C76.3931 12.9418 76.2058 12.9185 76.0291 12.8576C75.8524 12.7967 75.6902 12.6994 75.5527 12.5719C75.4152 12.4444 75.3055 12.2895 75.2304 12.1169C75.1553 11.9444 75.1165 11.758 75.1165 11.5696C75.1165 11.3812 75.1553 11.1948 75.2304 11.0223C75.3055 10.8497 75.4152 10.6948 75.5527 10.5673C75.6902 10.4399 75.8524 10.3426 76.0291 10.2816C76.2058 10.2207 76.3931 10.1974 76.5792 10.2134C76.916 10.2422 77.2298 10.3975 77.4585 10.6487C77.6872 10.8999 77.8141 11.2285 77.8141 11.5696C77.8141 11.9107 77.6872 12.2394 77.4585 12.4905C77.2298 12.7417 76.916 12.8971 76.5792 12.9259Z"
          fill="#142932"
        />
        <path
          d="M48.6183 7.89502L-31.9225 7.56056"
          stroke="#E09143"
          stroke-width="2"
          stroke-miterlimit="10"
        />
        <path
          d="M58.703 14.6816L-31.9483 14.3052"
          stroke="#BF6363"
          stroke-width="2"
          stroke-miterlimit="10"
        />
        <path
          d="M68.7805 21.4683L-31.9742 21.0499"
          stroke="#8C8CA1"
          stroke-width="2"
          stroke-miterlimit="10"
        />
        <path
          d="M78.8582 28.2554L-32.0001 27.795"
          stroke="#8C8CA1"
          stroke-width="2"
          stroke-miterlimit="10"
        />
      </svg>
    </div>
    <div>
      <svg
        width="241"
        height="263"
        viewBox="0 0 241 263"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g filter="url(#filter0_d)">
          <rect x="12" y="4" width="276" height="259" rx="8" fill="#C4C4C4" />
        </g>
        <rect
          x="13"
          y="11.8857"
          width="281"
          height="256"
          rx="8"
          fill="#142932"
        />
        <path
          d="M14 12C14 8.13402 17.134 5 21 5H439.766C443.632 5 446.766 8.13401 446.766 12V296.62C446.766 300.486 443.632 303.62 439.766 303.62H21C17.134 303.62 14 300.486 14 296.62V12Z"
          stroke="#444444"
          stroke-width="2"
        />
        <path
          d="M15.1719 11.2577C15.1719 10.1045 15.4444 9.10939 15.8333 8.43706C16.2373 7.7387 16.6463 7.56055 16.8892 7.56055H446.22C446.463 7.56055 446.872 7.73871 447.276 8.43706C447.665 9.10939 447.938 10.1045 447.938 11.2577V24.3493H15.1719V11.2577Z"
          fill="#0D0D0D"
          stroke="#444444"
          stroke-width="2"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M39.1594 19.4784C40.6136 19.4784 41.7924 17.9011 41.7924 15.9555C41.7924 14.0099 40.6136 12.4326 39.1594 12.4326C37.7052 12.4326 36.5263 14.0099 36.5263 15.9555C36.5263 17.9011 37.7052 19.4784 39.1594 19.4784Z"
          fill="#85A56C"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M30.0598 19.4784C31.514 19.4784 32.6929 17.9011 32.6929 15.9555C32.6929 14.0099 31.514 12.4326 30.0598 12.4326C28.6056 12.4326 27.4268 14.0099 27.4268 15.9555C27.4268 17.9011 28.6056 19.4784 30.0598 19.4784Z"
          fill="#E09143"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M20.8786 19.4784C22.3328 19.4784 23.5117 17.9011 23.5117 15.9555C23.5117 14.0099 22.3328 12.4326 20.8786 12.4326C19.4244 12.4326 18.2456 14.0099 18.2456 15.9555C18.2456 17.9011 19.4244 19.4784 20.8786 19.4784Z"
          fill="#BF5959"
        />
        <defs>
          <filter
            id="filter0_d"
            x="0"
            y="0"
            width="288"
            height="267"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feOffset dx="-8" />
            <feGaussianBlur stdDeviation="2" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.4 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow"
              result="shape"
            />
          </filter>
        </defs>
      </svg>
    </div>
  </div>
)

export const ContactMobile = () => (
  <svg
    width="164"
    height="404"
    viewBox="0 0 164 404"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M0 0H4V4H0V0Z" fill="#E09143" fill-opacity="0.3" />
    <path d="M20 0H24V4H20V0Z" fill="#E09143" fill-opacity="0.3" />
    <path d="M40 0H44V4H40V0Z" fill="#E09143" fill-opacity="0.3" />
    <path d="M60 0H64V4H60V0Z" fill="#E09143" fill-opacity="0.3" />
    <path d="M80 0H84V4H80V0Z" fill="#E09143" fill-opacity="0.3" />
    <path d="M100 0H104V4H100V0Z" fill="#E09143" fill-opacity="0.3" />
    <path d="M120 0H124V4H120V0Z" fill="#E09143" fill-opacity="0.3" />
    <path d="M140 0H144V4H140V0Z" fill="#E09143" fill-opacity="0.3" />
    <path d="M160 0H164V4H160V0Z" fill="#E09143" fill-opacity="0.3" />
    <path d="M0 20H4V24H0V20Z" fill="#E09143" fill-opacity="0.3" />
    <path d="M20 20H24V24H20V20Z" fill="#E09143" fill-opacity="0.3" />
    <path d="M40 20H44V24H40V20Z" fill="#E09143" fill-opacity="0.3" />
    <path d="M60 20H64V24H60V20Z" fill="#E09143" fill-opacity="0.3" />
    <path d="M80 20H84V24H80V20Z" fill="#E09143" fill-opacity="0.3" />
    <path d="M100 20H104V24H100V20Z" fill="#E09143" fill-opacity="0.3" />
    <path d="M120 20H124V24H120V20Z" fill="#E09143" fill-opacity="0.3" />
    <path d="M140 20H144V24H140V20Z" fill="#E09143" fill-opacity="0.3" />
    <path d="M160 20H164V24H160V20Z" fill="#E09143" fill-opacity="0.3" />
    <path d="M0 40H4V44H0V40Z" fill="#E09143" fill-opacity="0.3" />
    <path d="M20 40H24V44H20V40Z" fill="#E09143" fill-opacity="0.3" />
    <path d="M40 40H44V44H40V40Z" fill="#E09143" fill-opacity="0.3" />
    <path d="M60 40H64V44H60V40Z" fill="#E09143" fill-opacity="0.3" />
    <path d="M80 40H84V44H80V40Z" fill="#E09143" fill-opacity="0.3" />
    <path d="M100 40H104V44H100V40Z" fill="#E09143" fill-opacity="0.3" />
    <path d="M120 40H124V44H120V40Z" fill="#E09143" fill-opacity="0.3" />
    <path d="M140 40H144V44H140V40Z" fill="#E09143" fill-opacity="0.3" />
    <path d="M160 40H164V44H160V40Z" fill="#E09143" fill-opacity="0.3" />
    <path d="M0 60H4V64H0V60Z" fill="#E09143" fill-opacity="0.3" />
    <path d="M20 60H24V64H20V60Z" fill="#E09143" fill-opacity="0.3" />
    <path d="M40 60H44V64H40V60Z" fill="#E09143" fill-opacity="0.3" />
    <path d="M60 60H64V64H60V60Z" fill="#E09143" fill-opacity="0.3" />
    <path d="M80 60H84V64H80V60Z" fill="#E09143" fill-opacity="0.3" />
    <path d="M100 60H104V64H100V60Z" fill="#E09143" fill-opacity="0.3" />
    <path d="M120 60H124V64H120V60Z" fill="#E09143" fill-opacity="0.3" />
    <path d="M140 60H144V64H140V60Z" fill="#E09143" fill-opacity="0.3" />
    <path d="M160 60H164V64H160V60Z" fill="#E09143" fill-opacity="0.3" />
    <path d="M0 80H4V84H0V80Z" fill="#E09143" fill-opacity="0.3" />
    <path d="M20 80H24V84H20V80Z" fill="#E09143" fill-opacity="0.3" />
    <path d="M40 80H44V84H40V80Z" fill="#E09143" fill-opacity="0.3" />
    <path d="M60 80H64V84H60V80Z" fill="#E09143" fill-opacity="0.3" />
    <path d="M80 80H84V84H80V80Z" fill="#E09143" fill-opacity="0.3" />
    <path d="M100 80H104V84H100V80Z" fill="#E09143" fill-opacity="0.3" />
    <path d="M120 80H124V84H120V80Z" fill="#E09143" fill-opacity="0.3" />
    <path d="M140 80H144V84H140V80Z" fill="#E09143" fill-opacity="0.3" />
    <path d="M160 80H164V84H160V80Z" fill="#E09143" fill-opacity="0.3" />
    <path d="M0 100H4V104H0V100Z" fill="#E09143" fill-opacity="0.3" />
    <path d="M20 100H24V104H20V100Z" fill="#E09143" fill-opacity="0.3" />
    <path d="M40 100H44V104H40V100Z" fill="#E09143" fill-opacity="0.3" />
    <path d="M60 100H64V104H60V100Z" fill="#E09143" fill-opacity="0.3" />
    <path d="M80 100H84V104H80V100Z" fill="#E09143" fill-opacity="0.3" />
    <path d="M100 100H104V104H100V100Z" fill="#E09143" fill-opacity="0.3" />
    <path d="M120 100H124V104H120V100Z" fill="#E09143" fill-opacity="0.3" />
    <path d="M140 100H144V104H140V100Z" fill="#E09143" fill-opacity="0.3" />
    <path d="M160 100H164V104H160V100Z" fill="#E09143" fill-opacity="0.3" />
    <path d="M0 120H4V124H0V120Z" fill="#E09143" fill-opacity="0.3" />
    <path d="M20 120H24V124H20V120Z" fill="#E09143" fill-opacity="0.3" />
    <path d="M40 120H44V124H40V120Z" fill="#E09143" fill-opacity="0.3" />
    <path d="M60 120H64V124H60V120Z" fill="#E09143" fill-opacity="0.3" />
    <path d="M80 120H84V124H80V120Z" fill="#E09143" fill-opacity="0.3" />
    <path d="M100 120H104V124H100V120Z" fill="#E09143" fill-opacity="0.3" />
    <path d="M120 120H124V124H120V120Z" fill="#E09143" fill-opacity="0.3" />
    <path d="M140 120H144V124H140V120Z" fill="#E09143" fill-opacity="0.3" />
    <path d="M160 120H164V124H160V120Z" fill="#E09143" fill-opacity="0.3" />
    <path d="M0 140H4V144H0V140Z" fill="#E09143" fill-opacity="0.3" />
    <path d="M20 140H24V144H20V140Z" fill="#E09143" fill-opacity="0.3" />
    <path d="M40 140H44V144H40V140Z" fill="#E09143" fill-opacity="0.3" />
    <path d="M60 140H64V144H60V140Z" fill="#E09143" fill-opacity="0.3" />
    <path d="M80 140H84V144H80V140Z" fill="#E09143" fill-opacity="0.3" />
    <path d="M100 140H104V144H100V140Z" fill="#E09143" fill-opacity="0.3" />
    <path d="M120 140H124V144H120V140Z" fill="#E09143" fill-opacity="0.3" />
    <path d="M140 140H144V144H140V140Z" fill="#E09143" fill-opacity="0.3" />
    <path d="M160 140H164V144H160V140Z" fill="#E09143" fill-opacity="0.3" />
    <path d="M0 160H4V164H0V160Z" fill="#E09143" fill-opacity="0.3" />
    <path d="M20 160H24V164H20V160Z" fill="#E09143" fill-opacity="0.3" />
    <path d="M40 160H44V164H40V160Z" fill="#E09143" fill-opacity="0.3" />
    <path d="M60 160H64V164H60V160Z" fill="#E09143" fill-opacity="0.3" />
    <path d="M80 160H84V164H80V160Z" fill="#E09143" fill-opacity="0.3" />
    <path d="M100 160H104V164H100V160Z" fill="#E09143" fill-opacity="0.3" />
    <path d="M120 160H124V164H120V160Z" fill="#E09143" fill-opacity="0.3" />
    <path d="M140 160H144V164H140V160Z" fill="#E09143" fill-opacity="0.3" />
    <path d="M160 160H164V164H160V160Z" fill="#E09143" fill-opacity="0.3" />
    <path d="M0 180H4V184H0V180Z" fill="#E09143" fill-opacity="0.3" />
    <path d="M20 180H24V184H20V180Z" fill="#E09143" fill-opacity="0.3" />
    <path d="M40 180H44V184H40V180Z" fill="#E09143" fill-opacity="0.3" />
    <path d="M60 180H64V184H60V180Z" fill="#E09143" fill-opacity="0.3" />
    <path d="M80 180H84V184H80V180Z" fill="#E09143" fill-opacity="0.3" />
    <path d="M100 180H104V184H100V180Z" fill="#E09143" fill-opacity="0.3" />
    <path d="M120 180H124V184H120V180Z" fill="#E09143" fill-opacity="0.3" />
    <path d="M140 180H144V184H140V180Z" fill="#E09143" fill-opacity="0.3" />
    <path d="M160 180H164V184H160V180Z" fill="#E09143" fill-opacity="0.3" />
    <path d="M0 200H4V204H0V200Z" fill="#E09143" fill-opacity="0.3" />
    <path d="M20 200H24V204H20V200Z" fill="#E09143" fill-opacity="0.3" />
    <path d="M40 200H44V204H40V200Z" fill="#E09143" fill-opacity="0.3" />
    <path d="M60 200H64V204H60V200Z" fill="#E09143" fill-opacity="0.3" />
    <path d="M80 200H84V204H80V200Z" fill="#E09143" fill-opacity="0.3" />
    <path d="M100 200H104V204H100V200Z" fill="#E09143" fill-opacity="0.3" />
    <path d="M120 200H124V204H120V200Z" fill="#E09143" fill-opacity="0.3" />
    <path d="M140 200H144V204H140V200Z" fill="#E09143" fill-opacity="0.3" />
    <path d="M160 200H164V204H160V200Z" fill="#E09143" fill-opacity="0.3" />
    <path d="M0 220H4V224H0V220Z" fill="#E09143" fill-opacity="0.3" />
    <path d="M20 220H24V224H20V220Z" fill="#E09143" fill-opacity="0.3" />
    <path d="M40 220H44V224H40V220Z" fill="#E09143" fill-opacity="0.3" />
    <path d="M60 220H64V224H60V220Z" fill="#E09143" fill-opacity="0.3" />
    <path d="M80 220H84V224H80V220Z" fill="#E09143" fill-opacity="0.3" />
    <path d="M100 220H104V224H100V220Z" fill="#E09143" fill-opacity="0.3" />
    <path d="M120 220H124V224H120V220Z" fill="#E09143" fill-opacity="0.3" />
    <path d="M140 220H144V224H140V220Z" fill="#E09143" fill-opacity="0.3" />
    <path d="M160 220H164V224H160V220Z" fill="#E09143" fill-opacity="0.3" />
    <path d="M0 240H4V244H0V240Z" fill="#E09143" fill-opacity="0.3" />
    <path d="M20 240H24V244H20V240Z" fill="#E09143" fill-opacity="0.3" />
    <path d="M40 240H44V244H40V240Z" fill="#E09143" fill-opacity="0.3" />
    <path d="M60 240H64V244H60V240Z" fill="#E09143" fill-opacity="0.3" />
    <path d="M80 240H84V244H80V240Z" fill="#E09143" fill-opacity="0.3" />
    <path d="M100 240H104V244H100V240Z" fill="#E09143" fill-opacity="0.3" />
    <path d="M120 240H124V244H120V240Z" fill="#E09143" fill-opacity="0.3" />
    <path d="M140 240H144V244H140V240Z" fill="#E09143" fill-opacity="0.3" />
    <path d="M160 240H164V244H160V240Z" fill="#E09143" fill-opacity="0.3" />
    <path d="M0 260H4V264H0V260Z" fill="#E09143" fill-opacity="0.3" />
    <path d="M20 260H24V264H20V260Z" fill="#E09143" fill-opacity="0.3" />
    <path d="M40 260H44V264H40V260Z" fill="#E09143" fill-opacity="0.3" />
    <path d="M60 260H64V264H60V260Z" fill="#E09143" fill-opacity="0.3" />
    <path d="M80 260H84V264H80V260Z" fill="#E09143" fill-opacity="0.3" />
    <path d="M100 260H104V264H100V260Z" fill="#E09143" fill-opacity="0.3" />
    <path d="M120 260H124V264H120V260Z" fill="#E09143" fill-opacity="0.3" />
    <path d="M140 260H144V264H140V260Z" fill="#E09143" fill-opacity="0.3" />
    <path d="M160 260H164V264H160V260Z" fill="#E09143" fill-opacity="0.3" />
    <path d="M0 280H4V284H0V280Z" fill="#E09143" fill-opacity="0.3" />
    <path d="M20 280H24V284H20V280Z" fill="#E09143" fill-opacity="0.3" />
    <path d="M40 280H44V284H40V280Z" fill="#E09143" fill-opacity="0.3" />
    <path d="M60 280H64V284H60V280Z" fill="#E09143" fill-opacity="0.3" />
    <path d="M80 280H84V284H80V280Z" fill="#E09143" fill-opacity="0.3" />
    <path d="M100 280H104V284H100V280Z" fill="#E09143" fill-opacity="0.3" />
    <path d="M120 280H124V284H120V280Z" fill="#E09143" fill-opacity="0.3" />
    <path d="M140 280H144V284H140V280Z" fill="#E09143" fill-opacity="0.3" />
    <path d="M160 280H164V284H160V280Z" fill="#E09143" fill-opacity="0.3" />
    <path d="M0 300H4V304H0V300Z" fill="#E09143" fill-opacity="0.3" />
    <path d="M20 300H24V304H20V300Z" fill="#E09143" fill-opacity="0.3" />
    <path d="M40 300H44V304H40V300Z" fill="#E09143" fill-opacity="0.3" />
    <path d="M60 300H64V304H60V300Z" fill="#E09143" fill-opacity="0.3" />
    <path d="M80 300H84V304H80V300Z" fill="#E09143" fill-opacity="0.3" />
    <path d="M100 300H104V304H100V300Z" fill="#E09143" fill-opacity="0.3" />
    <path d="M120 300H124V304H120V300Z" fill="#E09143" fill-opacity="0.3" />
    <path d="M140 300H144V304H140V300Z" fill="#E09143" fill-opacity="0.3" />
    <path d="M160 300H164V304H160V300Z" fill="#E09143" fill-opacity="0.3" />
    <path d="M0 320H4V324H0V320Z" fill="#E09143" fill-opacity="0.3" />
    <path d="M20 320H24V324H20V320Z" fill="#E09143" fill-opacity="0.3" />
    <path d="M40 320H44V324H40V320Z" fill="#E09143" fill-opacity="0.3" />
    <path d="M60 320H64V324H60V320Z" fill="#E09143" fill-opacity="0.3" />
    <path d="M80 320H84V324H80V320Z" fill="#E09143" fill-opacity="0.3" />
    <path d="M100 320H104V324H100V320Z" fill="#E09143" fill-opacity="0.3" />
    <path d="M120 320H124V324H120V320Z" fill="#E09143" fill-opacity="0.3" />
    <path d="M140 320H144V324H140V320Z" fill="#E09143" fill-opacity="0.3" />
    <path d="M160 320H164V324H160V320Z" fill="#E09143" fill-opacity="0.3" />
    <path d="M0 340H4V344H0V340Z" fill="#E09143" fill-opacity="0.3" />
    <path d="M20 340H24V344H20V340Z" fill="#E09143" fill-opacity="0.3" />
    <path d="M40 340H44V344H40V340Z" fill="#E09143" fill-opacity="0.3" />
    <path d="M60 340H64V344H60V340Z" fill="#E09143" fill-opacity="0.3" />
    <path d="M80 340H84V344H80V340Z" fill="#E09143" fill-opacity="0.3" />
    <path d="M100 340H104V344H100V340Z" fill="#E09143" fill-opacity="0.3" />
    <path d="M120 340H124V344H120V340Z" fill="#E09143" fill-opacity="0.3" />
    <path d="M140 340H144V344H140V340Z" fill="#E09143" fill-opacity="0.3" />
    <path d="M160 340H164V344H160V340Z" fill="#E09143" fill-opacity="0.3" />
    <path d="M0 360H4V364H0V360Z" fill="#E09143" fill-opacity="0.3" />
    <path d="M20 360H24V364H20V360Z" fill="#E09143" fill-opacity="0.3" />
    <path d="M40 360H44V364H40V360Z" fill="#E09143" fill-opacity="0.3" />
    <path d="M60 360H64V364H60V360Z" fill="#E09143" fill-opacity="0.3" />
    <path d="M80 360H84V364H80V360Z" fill="#E09143" fill-opacity="0.3" />
    <path d="M100 360H104V364H100V360Z" fill="#E09143" fill-opacity="0.3" />
    <path d="M120 360H124V364H120V360Z" fill="#E09143" fill-opacity="0.3" />
    <path d="M140 360H144V364H140V360Z" fill="#E09143" fill-opacity="0.3" />
    <path d="M160 360H164V364H160V360Z" fill="#E09143" fill-opacity="0.3" />
    <path d="M0 380H4V384H0V380Z" fill="#E09143" fill-opacity="0.3" />
    <path d="M20 380H24V384H20V380Z" fill="#E09143" fill-opacity="0.3" />
    <path d="M40 380H44V384H40V380Z" fill="#E09143" fill-opacity="0.3" />
    <path d="M60 380H64V384H60V380Z" fill="#E09143" fill-opacity="0.3" />
    <path d="M80 380H84V384H80V380Z" fill="#E09143" fill-opacity="0.3" />
    <path d="M100 380H104V384H100V380Z" fill="#E09143" fill-opacity="0.3" />
    <path d="M120 380H124V384H120V380Z" fill="#E09143" fill-opacity="0.3" />
    <path d="M140 380H144V384H140V380Z" fill="#E09143" fill-opacity="0.3" />
    <path d="M160 380H164V384H160V380Z" fill="#E09143" fill-opacity="0.3" />
    <path d="M0 400H4V404H0V400Z" fill="#E09143" fill-opacity="0.3" />
    <path d="M20 400H24V404H20V400Z" fill="#E09143" fill-opacity="0.3" />
    <path d="M40 400H44V404H40V400Z" fill="#E09143" fill-opacity="0.3" />
    <path d="M60 400H64V404H60V400Z" fill="#E09143" fill-opacity="0.3" />
    <path d="M80 400H84V404H80V400Z" fill="#E09143" fill-opacity="0.3" />
    <path d="M100 400H104V404H100V400Z" fill="#E09143" fill-opacity="0.3" />
    <path d="M120 400H124V404H120V400Z" fill="#E09143" fill-opacity="0.3" />
    <path d="M140 400H144V404H140V400Z" fill="#E09143" fill-opacity="0.3" />
    <path d="M160 400H164V404H160V400Z" fill="#E09143" fill-opacity="0.3" />
  </svg>
)
