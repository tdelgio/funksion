import React from "react"
import { StaticImage } from "gatsby-plugin-image"
import { ButtonIconChat, ButtonIconCode, ButtonLink } from "./buttons"

export const CardTD = props => {
  return (
    <>
      <div className="flex flex-col items-center justify-around px-2 mt-8 lg:m-8 py-8 w-full max-w-lg rounded-lg shadow-card border-card border-gray-50 space-y-2">
        <StaticImage
          height={100}
          width={100}
          src="../images/avatar-td.png"
          className="rounded-full"
          placeholder="tracedSVG"
          alt="avatar"
        />
        <p>Tomás</p>
        <div className="lg:hidden strong text-brand">
          <svg
            width="119"
            height="16"
            viewBox="0 0 119 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3.69631 12L0.624313 1.44H2.97631L5.05631 10.16L7.16831 1.44H9.28031L11.4243 10.16L13.4883 1.44H15.7443L12.6723 12H10.1923L8.72031 6.24L8.22431 3.744H8.19231L7.69631 6.24L6.24031 12H3.69631ZM20.1999 12.16C18.9413 12.16 17.9333 11.7973 17.1759 11.072C16.4186 10.336 16.0399 9.312 16.0399 8C16.0399 7.12533 16.2106 6.37867 16.5519 5.76C16.8933 5.14133 17.3679 4.66667 17.9759 4.336C18.5946 4.00533 19.2986 3.84 20.0879 3.84C20.8986 3.84 21.5866 4.00533 22.1519 4.336C22.7173 4.656 23.1493 5.09867 23.4479 5.664C23.7466 6.21867 23.8959 6.85333 23.8959 7.568C23.8959 7.78133 23.8906 7.984 23.8799 8.176C23.8693 8.368 23.8533 8.53867 23.8319 8.688H18.1839C18.2693 9.30667 18.4826 9.77067 18.8239 10.08C19.1759 10.3787 19.6293 10.528 20.1839 10.528C20.6533 10.528 21.0319 10.4373 21.3199 10.256C21.6079 10.0747 21.8319 9.824 21.9919 9.504L23.7359 10.176C23.4799 10.8053 23.0319 11.296 22.3919 11.648C21.7519 11.9893 21.0213 12.16 20.1999 12.16ZM20.0719 5.456C19.0373 5.456 18.4133 6.02667 18.1999 7.168H21.7999C21.7359 6.61333 21.5546 6.192 21.2559 5.904C20.9679 5.60533 20.5733 5.456 20.0719 5.456ZM30.4576 12.16C29.8176 12.16 29.2629 11.9947 28.7936 11.664C28.3349 11.3227 27.9936 10.88 27.7696 10.336L27.6896 12H25.7536V0.495999H27.9456V5.36C28.1802 4.912 28.5109 4.54933 28.9376 4.272C29.3749 3.984 29.9029 3.84 30.5216 3.84C31.1616 3.84 31.7322 4.00533 32.2336 4.336C32.7456 4.66667 33.1456 5.14667 33.4336 5.776C33.7322 6.39467 33.8816 7.14133 33.8816 8.016C33.8816 8.89067 33.7322 9.63733 33.4336 10.256C33.1456 10.864 32.7402 11.3333 32.2176 11.664C31.7056 11.9947 31.1189 12.16 30.4576 12.16ZM29.8016 10.48C30.3989 10.48 30.8629 10.272 31.1936 9.856C31.5242 9.42933 31.6896 8.81067 31.6896 8C31.6896 7.18933 31.5242 6.576 31.1936 6.16C30.8629 5.73333 30.4042 5.52 29.8176 5.52C29.2522 5.52 28.7989 5.74933 28.4576 6.208C28.1162 6.656 27.9456 7.25867 27.9456 8.016C27.9456 8.79467 28.1162 9.40267 28.4576 9.84C28.7989 10.2667 29.2469 10.48 29.8016 10.48ZM44.9794 1.44C46.6328 1.44 47.9128 1.89867 48.8194 2.816C49.7261 3.73333 50.1794 5.03467 50.1794 6.72C50.1794 8.40533 49.7261 9.70667 48.8194 10.624C47.9128 11.5413 46.6328 12 44.9794 12H40.8994V1.44H44.9794ZM44.8674 10.24C45.8701 10.24 46.6221 9.94133 47.1234 9.344C47.6354 8.736 47.8914 7.86133 47.8914 6.72C47.8914 5.57867 47.6354 4.70933 47.1234 4.112C46.6221 3.504 45.8701 3.2 44.8674 3.2H43.1074V10.24H44.8674ZM55.8874 12.16C54.6288 12.16 53.6208 11.7973 52.8634 11.072C52.1061 10.336 51.7274 9.312 51.7274 8C51.7274 7.12533 51.8981 6.37867 52.2394 5.76C52.5808 5.14133 53.0554 4.66667 53.6634 4.336C54.2821 4.00533 54.9861 3.84 55.7754 3.84C56.5861 3.84 57.2741 4.00533 57.8394 4.336C58.4048 4.656 58.8368 5.09867 59.1354 5.664C59.4341 6.21867 59.5834 6.85333 59.5834 7.568C59.5834 7.78133 59.5781 7.984 59.5674 8.176C59.5568 8.368 59.5408 8.53867 59.5194 8.688H53.8714C53.9568 9.30667 54.1701 9.77067 54.5114 10.08C54.8634 10.3787 55.3168 10.528 55.8714 10.528C56.3408 10.528 56.7194 10.4373 57.0074 10.256C57.2954 10.0747 57.5194 9.824 57.6794 9.504L59.4234 10.176C59.1674 10.8053 58.7194 11.296 58.0794 11.648C57.4394 11.9893 56.7088 12.16 55.8874 12.16ZM55.7594 5.456C54.7248 5.456 54.1008 6.02667 53.8874 7.168H57.4874C57.4234 6.61333 57.2421 6.192 56.9434 5.904C56.6554 5.60533 56.2608 5.456 55.7594 5.456ZM66.4391 4H68.7111L65.6711 12H63.1431L60.1031 4H62.4551L64.4231 10.32L66.4391 4ZM73.5437 12.16C72.285 12.16 71.277 11.7973 70.5197 11.072C69.7624 10.336 69.3837 9.312 69.3837 8C69.3837 7.12533 69.5544 6.37867 69.8957 5.76C70.237 5.14133 70.7117 4.66667 71.3197 4.336C71.9384 4.00533 72.6424 3.84 73.4317 3.84C74.2424 3.84 74.9304 4.00533 75.4957 4.336C76.061 4.656 76.493 5.09867 76.7917 5.664C77.0904 6.21867 77.2397 6.85333 77.2397 7.568C77.2397 7.78133 77.2344 7.984 77.2237 8.176C77.213 8.368 77.197 8.53867 77.1757 8.688H71.5277C71.613 9.30667 71.8264 9.77067 72.1677 10.08C72.5197 10.3787 72.973 10.528 73.5277 10.528C73.997 10.528 74.3757 10.4373 74.6637 10.256C74.9517 10.0747 75.1757 9.824 75.3357 9.504L77.0797 10.176C76.8237 10.8053 76.3757 11.296 75.7357 11.648C75.0957 11.9893 74.365 12.16 73.5437 12.16ZM73.4157 5.456C72.381 5.456 71.757 6.02667 71.5437 7.168H75.1437C75.0797 6.61333 74.8984 6.192 74.5997 5.904C74.3117 5.60533 73.917 5.456 73.4157 5.456ZM81.2573 0.495999V9.536C81.2573 9.90933 81.3213 10.1707 81.4493 10.32C81.5773 10.4693 81.7906 10.544 82.0893 10.544C82.2706 10.544 82.42 10.5333 82.5373 10.512C82.6546 10.4907 82.804 10.448 82.9853 10.384L82.7933 11.824C82.612 11.9307 82.3826 12.0107 82.1053 12.064C81.8386 12.128 81.572 12.16 81.3053 12.16C80.5266 12.16 79.956 11.9733 79.5933 11.6C79.2413 11.216 79.0653 10.608 79.0653 9.776V0.495999H81.2573ZM87.8547 3.84C88.6547 3.84 89.364 4.00533 89.9827 4.336C90.6014 4.66667 91.0814 5.14133 91.4227 5.76C91.7747 6.37867 91.9507 7.12533 91.9507 8C91.9507 8.87467 91.7747 9.62133 91.4227 10.24C91.0814 10.8587 90.6014 11.3333 89.9827 11.664C89.364 11.9947 88.6547 12.16 87.8547 12.16C87.044 12.16 86.3294 11.9947 85.7107 11.664C85.1027 11.3333 84.6227 10.8587 84.2707 10.24C83.9294 9.62133 83.7587 8.87467 83.7587 8C83.7587 7.12533 83.9294 6.37867 84.2707 5.76C84.6227 5.14133 85.1027 4.66667 85.7107 4.336C86.3294 4.00533 87.044 3.84 87.8547 3.84ZM87.8547 5.472C87.2574 5.472 86.788 5.68533 86.4467 6.112C86.116 6.528 85.9507 7.15733 85.9507 8C85.9507 8.84267 86.116 9.47733 86.4467 9.904C86.788 10.32 87.2574 10.528 87.8547 10.528C88.4414 10.528 88.9 10.32 89.2307 9.904C89.572 9.47733 89.7427 8.84267 89.7427 8C89.7427 7.15733 89.572 6.528 89.2307 6.112C88.9 5.68533 88.4414 5.472 87.8547 5.472ZM93.7848 15.36V4H95.7528L95.8488 5.568C96.0728 5.056 96.4141 4.64 96.8728 4.32C97.3421 4 97.8915 3.84 98.5208 3.84C99.1715 3.84 99.7528 4.00533 100.265 4.336C100.777 4.66667 101.177 5.14133 101.465 5.76C101.763 6.368 101.913 7.10933 101.913 7.984C101.913 8.85867 101.763 9.61067 101.465 10.24C101.166 10.8587 100.755 11.3333 100.233 11.664C99.7208 11.9947 99.1341 12.16 98.4728 12.16C97.8861 12.16 97.3795 12.0213 96.9528 11.744C96.5368 11.4667 96.2115 11.0987 95.9768 10.64V15.36H93.7848ZM97.8328 10.48C98.4195 10.48 98.8781 10.272 99.2088 9.856C99.5501 9.42933 99.7208 8.81067 99.7208 8C99.7208 7.18933 99.5555 6.576 99.2248 6.16C98.9048 5.73333 98.4515 5.52 97.8648 5.52C97.2995 5.52 96.8408 5.73867 96.4888 6.176C96.1475 6.61333 95.9768 7.22133 95.9768 8C95.9768 8.768 96.1421 9.376 96.4728 9.824C96.8141 10.2613 97.2675 10.48 97.8328 10.48ZM107.528 12.16C106.269 12.16 105.261 11.7973 104.504 11.072C103.747 10.336 103.368 9.312 103.368 8C103.368 7.12533 103.539 6.37867 103.88 5.76C104.221 5.14133 104.696 4.66667 105.304 4.336C105.923 4.00533 106.627 3.84 107.416 3.84C108.227 3.84 108.915 4.00533 109.48 4.336C110.045 4.656 110.477 5.09867 110.776 5.664C111.075 6.21867 111.224 6.85333 111.224 7.568C111.224 7.78133 111.219 7.984 111.208 8.176C111.197 8.368 111.181 8.53867 111.16 8.688H105.512C105.597 9.30667 105.811 9.77067 106.152 10.08C106.504 10.3787 106.957 10.528 107.512 10.528C107.981 10.528 108.36 10.4373 108.648 10.256C108.936 10.0747 109.16 9.824 109.32 9.504L111.064 10.176C110.808 10.8053 110.36 11.296 109.72 11.648C109.08 11.9893 108.349 12.16 107.528 12.16ZM107.4 5.456C106.365 5.456 105.741 6.02667 105.528 7.168H109.128C109.064 6.61333 108.883 6.192 108.584 5.904C108.296 5.60533 107.901 5.456 107.4 5.456ZM113.082 12V4H114.986L115.13 5.568C115.332 5.024 115.636 4.60267 116.042 4.304C116.458 3.99467 116.98 3.84 117.61 3.84C117.983 3.84 118.271 3.89867 118.474 4.016L118.218 5.856C118.111 5.824 117.978 5.79733 117.818 5.776C117.668 5.744 117.471 5.728 117.226 5.728C116.895 5.728 116.58 5.808 116.282 5.968C115.994 6.11733 115.754 6.352 115.562 6.672C115.37 6.98133 115.274 7.376 115.274 7.856V12H113.082Z"
              fill="#D07A25"
            />
          </svg>
        </div>
        <div className="hidden lg:block text-brand">
          <svg
            width="173"
            height="23"
            viewBox="0 0 173 23"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.25812 17.6769L0.698122 1.83688H5.09012L7.77812 14.3409L10.6101 1.83688H14.3541L17.2581 14.3169L19.8981 1.83688H24.1461L19.5621 17.6769H15.0741L13.2021 9.99688L12.4821 6.13288H12.4341L11.7381 9.99688L9.89012 17.6769H5.25812ZM29.9622 17.9169C27.9622 17.9169 26.3782 17.3729 25.2102 16.2849C24.0582 15.1969 23.4822 13.6609 23.4822 11.6769C23.4822 10.3649 23.7462 9.24488 24.2742 8.31688C24.8182 7.37288 25.5542 6.66088 26.4822 6.18088C27.4262 5.68488 28.5222 5.43688 29.7702 5.43688C31.0342 5.43688 32.1062 5.68488 32.9862 6.18088C33.8822 6.66088 34.5622 7.33288 35.0262 8.19688C35.4902 9.04488 35.7222 10.0209 35.7222 11.1249C35.7222 11.4289 35.7062 11.7249 35.6742 12.0129C35.6582 12.2849 35.6422 12.5169 35.6262 12.7089H27.4422C27.5542 13.5409 27.8262 14.1409 28.2582 14.5089C28.6902 14.8609 29.2582 15.0369 29.9622 15.0369C30.5702 15.0369 31.0502 14.9169 31.4022 14.6769C31.7702 14.4369 32.0422 14.1009 32.2182 13.6689L35.4822 14.7489C35.2582 15.4369 34.8662 16.0209 34.3062 16.5009C33.7622 16.9649 33.1062 17.3169 32.3382 17.5569C31.5862 17.7969 30.7942 17.9169 29.9622 17.9169ZM29.7702 8.29288C28.4742 8.29288 27.7062 9.03688 27.4662 10.5249H31.8582C31.6822 9.03688 30.9862 8.29288 29.7702 8.29288ZM45.2286 17.9169C44.2526 17.9169 43.4206 17.6529 42.7326 17.1249C42.0446 16.5969 41.5486 15.9009 41.2446 15.0369L41.1006 17.6769H37.5246V0.58888H41.6046V7.74088C41.9246 7.05288 42.3966 6.50088 43.0206 6.08488C43.6606 5.65288 44.4446 5.43688 45.3726 5.43688C46.3006 5.43688 47.1246 5.68488 47.8446 6.18088C48.5646 6.67688 49.1326 7.39688 49.5486 8.34088C49.9646 9.26888 50.1726 10.3969 50.1726 11.7249C50.1726 13.6769 49.7166 15.1969 48.8046 16.2849C47.8926 17.3729 46.7006 17.9169 45.2286 17.9169ZM43.8126 14.9169C44.5166 14.9169 45.0686 14.6609 45.4686 14.1489C45.8686 13.6209 46.0686 12.7969 46.0686 11.6769C46.0686 10.5569 45.8686 9.74088 45.4686 9.22888C45.0686 8.70088 44.5166 8.43688 43.8126 8.43688C43.1246 8.43688 42.5806 8.72488 42.1806 9.30088C41.7966 9.87688 41.6046 10.6769 41.6046 11.7009C41.6046 12.7409 41.8046 13.5409 42.2046 14.1009C42.6046 14.6449 43.1406 14.9169 43.8126 14.9169ZM65.4867 1.83688C67.9667 1.83688 69.8627 2.52488 71.1747 3.90088C72.5027 5.27688 73.1667 7.22888 73.1667 9.75688C73.1667 12.2849 72.5027 14.2369 71.1747 15.6129C69.8627 16.9889 67.9667 17.6769 65.4867 17.6769H58.7667V1.83688H65.4867ZM65.0787 14.5569C66.4227 14.5569 67.3987 14.1569 68.0067 13.3569C68.6307 12.5409 68.9427 11.3409 68.9427 9.75688C68.9427 8.17288 68.6307 6.98088 68.0067 6.18088C67.3987 5.36488 66.4227 4.95688 65.0787 4.95688H62.8947V14.5569H65.0787ZM81.0812 17.9169C79.0812 17.9169 77.4972 17.3729 76.3292 16.2849C75.1772 15.1969 74.6012 13.6609 74.6012 11.6769C74.6012 10.3649 74.8652 9.24488 75.3932 8.31688C75.9372 7.37288 76.6732 6.66088 77.6012 6.18088C78.5452 5.68488 79.6412 5.43688 80.8892 5.43688C82.1532 5.43688 83.2252 5.68488 84.1052 6.18088C85.0012 6.66088 85.6812 7.33288 86.1452 8.19688C86.6092 9.04488 86.8412 10.0209 86.8412 11.1249C86.8412 11.4289 86.8252 11.7249 86.7932 12.0129C86.7772 12.2849 86.7612 12.5169 86.7452 12.7089H78.5612C78.6732 13.5409 78.9452 14.1409 79.3772 14.5089C79.8092 14.8609 80.3772 15.0369 81.0812 15.0369C81.6892 15.0369 82.1692 14.9169 82.5212 14.6769C82.8892 14.4369 83.1612 14.1009 83.3372 13.6689L86.6012 14.7489C86.3772 15.4369 85.9852 16.0209 85.4252 16.5009C84.8812 16.9649 84.2252 17.3169 83.4572 17.5569C82.7052 17.7969 81.9132 17.9169 81.0812 17.9169ZM80.8892 8.29288C79.5932 8.29288 78.8252 9.03688 78.5852 10.5249H82.9772C82.8012 9.03688 82.1052 8.29288 80.8892 8.29288ZM96.0687 5.67688H100.293L95.9727 17.6769H91.1007L86.7807 5.67688H91.0767L93.5487 14.8209L96.0687 5.67688ZM106.887 17.9169C104.887 17.9169 103.303 17.3729 102.135 16.2849C100.983 15.1969 100.407 13.6609 100.407 11.6769C100.407 10.3649 100.671 9.24488 101.199 8.31688C101.743 7.37288 102.479 6.66088 103.407 6.18088C104.351 5.68488 105.447 5.43688 106.695 5.43688C107.959 5.43688 109.031 5.68488 109.911 6.18088C110.807 6.66088 111.487 7.33288 111.951 8.19688C112.415 9.04488 112.647 10.0209 112.647 11.1249C112.647 11.4289 112.631 11.7249 112.599 12.0129C112.583 12.2849 112.567 12.5169 112.551 12.7089H104.367C104.479 13.5409 104.751 14.1409 105.183 14.5089C105.615 14.8609 106.183 15.0369 106.887 15.0369C107.495 15.0369 107.975 14.9169 108.327 14.6769C108.695 14.4369 108.967 14.1009 109.143 13.6689L112.407 14.7489C112.183 15.4369 111.791 16.0209 111.231 16.5009C110.687 16.9649 110.031 17.3169 109.263 17.5569C108.511 17.7969 107.719 17.9169 106.887 17.9169ZM106.695 8.29288C105.399 8.29288 104.631 9.03688 104.391 10.5249H108.783C108.607 9.03688 107.911 8.29288 106.695 8.29288ZM118.481 0.58888V13.5969C118.481 14.1249 118.569 14.5009 118.745 14.7249C118.921 14.9489 119.217 15.0609 119.633 15.0609C119.873 15.0609 120.073 15.0449 120.233 15.0129C120.393 14.9809 120.585 14.9329 120.809 14.8689L120.545 17.3169C120.257 17.4929 119.881 17.6369 119.417 17.7489C118.953 17.8609 118.497 17.9169 118.049 17.9169C116.769 17.9169 115.841 17.6209 115.265 17.0289C114.689 16.4369 114.401 15.4689 114.401 14.1249V0.58888H118.481ZM127.533 5.43688C128.797 5.43688 129.901 5.68488 130.845 6.18088C131.805 6.67688 132.549 7.38888 133.077 8.31688C133.621 9.24488 133.893 10.3649 133.893 11.6769C133.893 12.9889 133.621 14.1089 133.077 15.0369C132.549 15.9649 131.805 16.6769 130.845 17.1729C129.901 17.6689 128.797 17.9169 127.533 17.9169C126.285 17.9169 125.181 17.6689 124.221 17.1729C123.277 16.6769 122.533 15.9649 121.989 15.0369C121.461 14.1089 121.197 12.9889 121.197 11.6769C121.197 10.3649 121.461 9.24488 121.989 8.31688C122.533 7.38888 123.277 6.67688 124.221 6.18088C125.181 5.68488 126.285 5.43688 127.533 5.43688ZM127.533 8.34088C126.829 8.34088 126.277 8.60488 125.877 9.13288C125.493 9.64488 125.301 10.4929 125.301 11.6769C125.301 12.8449 125.493 13.6929 125.877 14.2209C126.277 14.7489 126.829 15.0129 127.533 15.0129C128.253 15.0129 128.805 14.7489 129.189 14.2209C129.589 13.6929 129.789 12.8449 129.789 11.6769C129.789 10.4929 129.589 9.64488 129.189 9.13288C128.805 8.60488 128.253 8.34088 127.533 8.34088ZM135.708 22.7169V5.67688H139.38L139.5 8.10088C139.836 7.30088 140.34 6.66088 141.012 6.18088C141.7 5.68488 142.508 5.43688 143.436 5.43688C144.908 5.43688 146.092 5.98088 146.988 7.06888C147.9 8.15688 148.356 9.67688 148.356 11.6289C148.356 13.6129 147.892 15.1569 146.964 16.2609C146.052 17.3649 144.86 17.9169 143.388 17.9169C142.524 17.9169 141.788 17.7089 141.18 17.2929C140.572 16.8609 140.108 16.3009 139.788 15.6129V22.7169H135.708ZM141.996 14.9169C142.7 14.9169 143.252 14.6609 143.652 14.1489C144.052 13.6209 144.252 12.7969 144.252 11.6769C144.252 10.5569 144.052 9.74088 143.652 9.22888C143.268 8.70088 142.724 8.43688 142.02 8.43688C141.332 8.43688 140.788 8.71688 140.388 9.27688C139.988 9.82088 139.788 10.6209 139.788 11.6769C139.788 12.6849 139.98 13.4769 140.364 14.0529C140.748 14.6289 141.292 14.9169 141.996 14.9169ZM156.131 17.9169C154.131 17.9169 152.547 17.3729 151.379 16.2849C150.227 15.1969 149.651 13.6609 149.651 11.6769C149.651 10.3649 149.915 9.24488 150.443 8.31688C150.987 7.37288 151.723 6.66088 152.651 6.18088C153.595 5.68488 154.691 5.43688 155.939 5.43688C157.203 5.43688 158.275 5.68488 159.155 6.18088C160.051 6.66088 160.731 7.33288 161.195 8.19688C161.659 9.04488 161.891 10.0209 161.891 11.1249C161.891 11.4289 161.875 11.7249 161.843 12.0129C161.827 12.2849 161.811 12.5169 161.795 12.7089H153.611C153.723 13.5409 153.995 14.1409 154.427 14.5089C154.859 14.8609 155.427 15.0369 156.131 15.0369C156.739 15.0369 157.219 14.9169 157.571 14.6769C157.939 14.4369 158.211 14.1009 158.387 13.6689L161.651 14.7489C161.427 15.4369 161.035 16.0209 160.475 16.5009C159.931 16.9649 159.275 17.3169 158.507 17.5569C157.755 17.7969 156.963 17.9169 156.131 17.9169ZM155.939 8.29288C154.643 8.29288 153.875 9.03688 153.635 10.5249H158.027C157.851 9.03688 157.155 8.29288 155.939 8.29288ZM163.693 17.6769V5.67688H167.293L167.461 8.26888C167.749 7.38888 168.189 6.70088 168.781 6.20488C169.389 5.69288 170.165 5.43688 171.109 5.43688C171.413 5.43688 171.669 5.46888 171.877 5.53288C172.101 5.58088 172.277 5.63688 172.405 5.70088L171.997 9.06088C171.837 9.01288 171.629 8.96488 171.373 8.91688C171.133 8.86888 170.837 8.84488 170.485 8.84488C169.749 8.84488 169.109 9.07688 168.565 9.54088C168.037 10.0049 167.773 10.7009 167.773 11.6289V17.6769H163.693Z"
              fill="#D07A25"
            />
          </svg>
        </div>
        <p className="max-w-md pt-2 px-3 sm:px-6">
          Coding is one of my passions, I’m always improving and learning new
          skills. The sea and the mountains are my favourites playgrounds. Let's
          have fun creating!
        </p>
        <div className="w-full px-1 sm:px-6 lg:px-10">
          <ButtonIconCode
            link="http://tdelgio.gatsbyjs.io"
            text="Check out my portfolio"
          />
        </div>
      </div>
    </>
  )
}

export const CardLD = props => {
  return (
    <>
      <div className="flex flex-col items-center justify-around px-2 mt-8 lg:m-8 py-8 w-full max-w-lg rounded-lg shadow-card border-card border-gray-50 space-y-2">
        <StaticImage
          height={100}
          width={100}
          src="../images/avatar-lu.png"
          className="rounded-full"
          placeholder="tracedSVG"
          alt="avatar"
        />
        <p>Ludmila</p>
        <div className="lg:hidden strong">
          <svg
            width="68"
            height="16"
            viewBox="0 0 68 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4.71381 1.44C6.36715 1.44 7.64715 1.89867 8.55381 2.816C9.46048 3.73333 9.91381 5.03467 9.91381 6.72C9.91381 8.40533 9.46048 9.70667 8.55381 10.624C7.64715 11.5413 6.36715 12 4.71381 12H0.633813V1.44H4.71381ZM4.60181 10.24C5.60448 10.24 6.35648 9.94133 6.85781 9.344C7.36981 8.736 7.62581 7.86133 7.62581 6.72C7.62581 5.57867 7.36981 4.70933 6.85781 4.112C6.35648 3.504 5.60448 3.2 4.60181 3.2H2.84181V10.24H4.60181ZM15.6218 12.16C14.3631 12.16 13.3551 11.7973 12.5978 11.072C11.8405 10.336 11.4618 9.312 11.4618 8C11.4618 7.12533 11.6325 6.37867 11.9738 5.76C12.3151 5.14133 12.7898 4.66667 13.3978 4.336C14.0165 4.00533 14.7205 3.84 15.5098 3.84C16.3205 3.84 17.0085 4.00533 17.5738 4.336C18.1391 4.656 18.5711 5.09867 18.8698 5.664C19.1685 6.21867 19.3178 6.85333 19.3178 7.568C19.3178 7.78133 19.3125 7.984 19.3018 8.176C19.2911 8.368 19.2751 8.53867 19.2538 8.688H13.6058C13.6911 9.30667 13.9045 9.77067 14.2458 10.08C14.5978 10.3787 15.0511 10.528 15.6058 10.528C16.0751 10.528 16.4538 10.4373 16.7418 10.256C17.0298 10.0747 17.2538 9.824 17.4138 9.504L19.1578 10.176C18.9018 10.8053 18.4538 11.296 17.8138 11.648C17.1738 11.9893 16.4431 12.16 15.6218 12.16ZM15.4938 5.456C14.4591 5.456 13.8351 6.02667 13.6218 7.168H17.2218C17.1578 6.61333 16.9765 6.192 16.6778 5.904C16.3898 5.60533 15.9951 5.456 15.4938 5.456ZM24.3754 12.16C23.5648 12.16 22.8234 12.016 22.1514 11.728C21.4901 11.44 20.9514 11.0347 20.5354 10.512L21.7994 9.232C22.0554 9.616 22.3968 9.93067 22.8234 10.176C23.2501 10.4213 23.7568 10.544 24.3434 10.544C24.7594 10.544 25.0901 10.4853 25.3354 10.368C25.5914 10.24 25.7194 10.0427 25.7194 9.776C25.7194 9.60533 25.6608 9.46133 25.5434 9.344C25.4261 9.216 25.1914 9.11467 24.8394 9.04L23.4314 8.752C22.5034 8.56 21.8421 8.272 21.4474 7.888C21.0634 7.49333 20.8714 6.98667 20.8714 6.368C20.8714 5.93067 20.9994 5.52 21.2554 5.136C21.5221 4.752 21.9168 4.44267 22.4394 4.208C22.9621 3.96267 23.6128 3.84 24.3914 3.84C26.0128 3.84 27.1754 4.336 27.8794 5.328L26.5674 6.608C26.3328 6.23467 26.0234 5.952 25.6394 5.76C25.2661 5.55733 24.8714 5.456 24.4554 5.456C23.5168 5.456 23.0474 5.71733 23.0474 6.24C23.0474 6.41067 23.1221 6.56 23.2714 6.688C23.4208 6.80533 23.6928 6.90667 24.0874 6.992L25.7194 7.328C26.5088 7.488 27.0741 7.76 27.4154 8.144C27.7568 8.51733 27.9274 8.97067 27.9274 9.504C27.9274 10.272 27.6181 10.9067 26.9994 11.408C26.3914 11.9093 25.5168 12.16 24.3754 12.16ZM30.7794 2.848C29.8728 2.848 29.4194 2.45867 29.4194 1.68C29.4194 0.890666 29.8728 0.495999 30.7794 0.495999C31.6861 0.495999 32.1394 0.890666 32.1394 1.68C32.1394 2.45867 31.6861 2.848 30.7794 2.848ZM31.8674 4V12H29.6754V4H31.8674ZM38.9431 10.496C39.8071 10.496 40.4737 10.6827 40.9431 11.056C41.4124 11.4293 41.6471 11.952 41.6471 12.624C41.6471 13.2427 41.4711 13.76 41.1191 14.176C40.7671 14.592 40.2711 14.9067 39.6311 15.12C39.0017 15.3333 38.2711 15.44 37.4391 15.44C36.0631 15.44 35.0551 15.248 34.4151 14.864C33.7857 14.48 33.4711 13.9787 33.4711 13.36C33.4711 12.9973 33.5831 12.6773 33.8071 12.4C34.0417 12.1333 34.4151 11.9467 34.9271 11.84C34.2124 11.5733 33.8551 11.072 33.8551 10.336C33.8551 9.97333 33.9617 9.65333 34.1751 9.376C34.3991 9.09867 34.7031 8.89067 35.0871 8.752C34.2444 8.28267 33.8231 7.552 33.8231 6.56C33.8231 5.71733 34.1484 5.056 34.7991 4.576C35.4497 4.08533 36.3404 3.84 37.4711 3.84C38.1111 3.84 38.6871 3.92533 39.1991 4.096C39.2737 3.54133 39.4977 3.072 39.8711 2.688C40.2444 2.29333 40.7511 2.096 41.3911 2.096C41.4124 2.096 41.4391 2.096 41.4711 2.096C41.5031 2.096 41.5351 2.096 41.5671 2.096L41.8231 3.664C41.7377 3.65333 41.6417 3.648 41.5351 3.648C41.1297 3.648 40.8044 3.728 40.5591 3.888C40.3137 4.03733 40.1591 4.256 40.0951 4.544C40.7777 5.024 41.1191 5.696 41.1191 6.56C41.1191 7.392 40.7884 8.05333 40.1271 8.544C39.4764 9.024 38.5911 9.264 37.4711 9.264C36.9804 9.264 36.5324 9.22133 36.1271 9.136C35.8817 9.2 35.7057 9.296 35.5991 9.424C35.5031 9.54133 35.4551 9.67467 35.4551 9.824C35.4551 10.272 35.7964 10.496 36.4791 10.496H38.9431ZM37.4711 5.216C37.0444 5.216 36.6924 5.33333 36.4151 5.568C36.1377 5.80267 35.9991 6.128 35.9991 6.544C35.9991 6.96 36.1377 7.29067 36.4151 7.536C36.6924 7.77067 37.0444 7.888 37.4711 7.888C37.8871 7.888 38.2337 7.77067 38.5111 7.536C38.7884 7.29067 38.9271 6.96 38.9271 6.544C38.9271 6.128 38.7884 5.80267 38.5111 5.568C38.2337 5.33333 37.8871 5.216 37.4711 5.216ZM37.4551 13.936C38.2764 13.936 38.8844 13.8347 39.2791 13.632C39.6844 13.44 39.8871 13.2053 39.8871 12.928C39.8871 12.7253 39.8071 12.56 39.6471 12.432C39.4871 12.3147 39.1991 12.256 38.7831 12.256H36.0791C35.8231 12.256 35.6097 12.32 35.4391 12.448C35.2791 12.5867 35.1991 12.7627 35.1991 12.976C35.1991 13.2747 35.3964 13.5093 35.7911 13.68C36.1964 13.8507 36.7511 13.936 37.4551 13.936ZM42.9723 12V4H44.9403L45.0203 5.504C45.2656 4.94933 45.623 4.53333 46.0923 4.256C46.5723 3.97867 47.1216 3.84 47.7403 3.84C48.5723 3.84 49.2603 4.08533 49.8043 4.576C50.3483 5.056 50.6203 5.78133 50.6203 6.752V12H48.4283V7.376C48.4283 6.69333 48.2896 6.224 48.0123 5.968C47.7456 5.70133 47.4043 5.568 46.9883 5.568C46.6896 5.568 46.3963 5.64267 46.1083 5.792C45.831 5.93067 45.6016 6.16 45.4203 6.48C45.2496 6.8 45.1643 7.22667 45.1643 7.76V12H42.9723ZM56.5906 12.16C55.3319 12.16 54.3239 11.7973 53.5666 11.072C52.8092 10.336 52.4306 9.312 52.4306 8C52.4306 7.12533 52.6012 6.37867 52.9426 5.76C53.2839 5.14133 53.7586 4.66667 54.3666 4.336C54.9852 4.00533 55.6892 3.84 56.4786 3.84C57.2892 3.84 57.9772 4.00533 58.5426 4.336C59.1079 4.656 59.5399 5.09867 59.8386 5.664C60.1372 6.21867 60.2866 6.85333 60.2866 7.568C60.2866 7.78133 60.2812 7.984 60.2706 8.176C60.2599 8.368 60.2439 8.53867 60.2226 8.688H54.5746C54.6599 9.30667 54.8732 9.77067 55.2146 10.08C55.5666 10.3787 56.0199 10.528 56.5746 10.528C57.0439 10.528 57.4226 10.4373 57.7106 10.256C57.9986 10.0747 58.2226 9.824 58.3826 9.504L60.1266 10.176C59.8706 10.8053 59.4226 11.296 58.7826 11.648C58.1426 11.9893 57.4119 12.16 56.5906 12.16ZM56.4626 5.456C55.4279 5.456 54.8039 6.02667 54.5906 7.168H58.1906C58.1266 6.61333 57.9452 6.192 57.6466 5.904C57.3586 5.60533 56.9639 5.456 56.4626 5.456ZM62.1442 12V4H64.0482L64.1922 5.568C64.3949 5.024 64.6989 4.60267 65.1042 4.304C65.5202 3.99467 66.0429 3.84 66.6722 3.84C67.0455 3.84 67.3335 3.89867 67.5362 4.016L67.2802 5.856C67.1735 5.824 67.0402 5.79733 66.8802 5.776C66.7309 5.744 66.5335 5.728 66.2882 5.728C65.9575 5.728 65.6429 5.808 65.3442 5.968C65.0562 6.11733 64.8162 6.352 64.6242 6.672C64.4322 6.98133 64.3362 7.376 64.3362 7.856V12H62.1442Z"
              fill="#D07A25"
            />
          </svg>
        </div>
        <div className="hidden lg:block">
          <svg
            width="99"
            height="23"
            viewBox="0 0 99 23"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.93716 1.83688C9.41716 1.83688 11.3132 2.52488 12.6252 3.90088C13.9532 5.27688 14.6172 7.22888 14.6172 9.75688C14.6172 12.2849 13.9532 14.2369 12.6252 15.6129C11.3132 16.9889 9.41716 17.6769 6.93716 17.6769H0.217157V1.83688H6.93716ZM6.52916 14.5569C7.87316 14.5569 8.84916 14.1569 9.45716 13.3569C10.0812 12.5409 10.3932 11.3409 10.3932 9.75688C10.3932 8.17288 10.0812 6.98088 9.45716 6.18088C8.84916 5.36488 7.87316 4.95688 6.52916 4.95688H4.34516V14.5569H6.52916ZM22.5317 17.9169C20.5317 17.9169 18.9477 17.3729 17.7797 16.2849C16.6277 15.1969 16.0517 13.6609 16.0517 11.6769C16.0517 10.3649 16.3157 9.24488 16.8437 8.31688C17.3877 7.37288 18.1237 6.66088 19.0517 6.18088C19.9957 5.68488 21.0917 5.43688 22.3397 5.43688C23.6037 5.43688 24.6757 5.68488 25.5557 6.18088C26.4517 6.66088 27.1317 7.33288 27.5957 8.19688C28.0597 9.04488 28.2917 10.0209 28.2917 11.1249C28.2917 11.4289 28.2757 11.7249 28.2437 12.0129C28.2277 12.2849 28.2117 12.5169 28.1957 12.7089H20.0117C20.1237 13.5409 20.3957 14.1409 20.8277 14.5089C21.2597 14.8609 21.8277 15.0369 22.5317 15.0369C23.1397 15.0369 23.6197 14.9169 23.9717 14.6769C24.3397 14.4369 24.6117 14.1009 24.7877 13.6689L28.0517 14.7489C27.8277 15.4369 27.4357 16.0209 26.8757 16.5009C26.3317 16.9649 25.6757 17.3169 24.9077 17.5569C24.1557 17.7969 23.3637 17.9169 22.5317 17.9169ZM22.3397 8.29288C21.0437 8.29288 20.2757 9.03688 20.0357 10.5249H24.4277C24.2517 9.03688 23.5557 8.29288 22.3397 8.29288ZM35.1342 17.9169C33.9342 17.9169 32.8222 17.7249 31.7982 17.3409C30.7742 16.9409 29.9182 16.3729 29.2302 15.6369L31.1502 13.3809C31.5502 13.8929 32.0782 14.3249 32.7342 14.6769C33.4062 15.0129 34.1502 15.1809 34.9662 15.1809C35.4622 15.1809 35.8702 15.1089 36.1902 14.9649C36.5102 14.8209 36.6702 14.5969 36.6702 14.2929C36.6702 14.0849 36.5902 13.9089 36.4302 13.7649C36.2702 13.6209 35.9502 13.5009 35.4702 13.4049L33.7902 13.0689C32.2862 12.7649 31.2142 12.3169 30.5742 11.7249C29.9502 11.1169 29.6382 10.3249 29.6382 9.34888C29.6382 8.69288 29.8382 8.06888 30.2382 7.47688C30.6382 6.88488 31.2542 6.39688 32.0862 6.01288C32.9182 5.62888 33.9822 5.43688 35.2782 5.43688C37.7582 5.43688 39.5662 6.12488 40.7022 7.50088L38.7582 9.70888C38.3742 9.22888 37.8782 8.85288 37.2702 8.58088C36.6622 8.30888 36.0542 8.17288 35.4462 8.17288C34.2782 8.17288 33.6942 8.46888 33.6942 9.06088C33.6942 9.26888 33.7902 9.45288 33.9822 9.61288C34.1902 9.77288 34.5662 9.90088 35.1102 9.99688L37.2942 10.4289C38.5262 10.6689 39.4142 11.0849 39.9582 11.6769C40.5022 12.2529 40.7742 12.9569 40.7742 13.7889C40.7742 14.9569 40.3022 15.9409 39.3582 16.7409C38.4302 17.5249 37.0222 17.9169 35.1342 17.9169ZM44.451 4.28488C43.619 4.28488 43.011 4.13288 42.627 3.82888C42.259 3.50888 42.075 3.01288 42.075 2.34088C42.075 1.65288 42.259 1.15688 42.627 0.852879C43.011 0.532879 43.619 0.37288 44.451 0.37288C45.267 0.37288 45.867 0.532879 46.251 0.852879C46.635 1.15688 46.827 1.65288 46.827 2.34088C46.827 3.01288 46.635 3.50888 46.251 3.82888C45.867 4.13288 45.267 4.28488 44.451 4.28488ZM46.491 5.67688V17.6769H42.411V5.67688H46.491ZM56.4034 15.0129C57.7954 15.0129 58.8594 15.3089 59.5954 15.9009C60.3474 16.4769 60.7234 17.3089 60.7234 18.3969C60.7234 19.9009 60.1234 21.0129 58.9234 21.7329C57.7394 22.4689 56.1394 22.8369 54.1234 22.8369C51.9474 22.8369 50.3794 22.5649 49.4194 22.0209C48.4594 21.4769 47.9794 20.7409 47.9794 19.8129C47.9794 19.2689 48.1554 18.8049 48.5074 18.4209C48.8754 18.0369 49.4594 17.7729 50.2594 17.6289C49.0914 17.1969 48.5074 16.3889 48.5074 15.2049C48.5074 14.6449 48.6754 14.1569 49.0114 13.7409C49.3474 13.3089 49.8114 12.9969 50.4034 12.8049C49.1234 12.1009 48.4834 11.0049 48.4834 9.51688C48.4834 8.22088 48.9874 7.22088 49.9954 6.51688C51.0194 5.79688 52.4514 5.43688 54.2914 5.43688C55.2194 5.43688 56.0594 5.53288 56.8114 5.72488C56.8754 5.14888 57.0354 4.61288 57.2914 4.11688C57.5634 3.62088 57.9314 3.22088 58.3954 2.91688C58.8754 2.59688 59.4594 2.43688 60.1474 2.43688C60.1954 2.43688 60.2514 2.44488 60.3154 2.46088C60.3794 2.46088 60.4514 2.46088 60.5314 2.46088L60.8674 5.19688C60.6914 5.14888 60.4994 5.12488 60.2914 5.12488C59.7314 5.12488 59.2834 5.23688 58.9474 5.46088C58.6114 5.68488 58.3874 5.97288 58.2754 6.32488C59.4754 7.02888 60.0754 8.09288 60.0754 9.51688C60.0754 10.8129 59.5634 11.8129 58.5394 12.5169C57.5314 13.2209 56.1154 13.5729 54.2914 13.5729C53.4594 13.5729 52.7074 13.5009 52.0354 13.3569C51.5074 13.5169 51.2434 13.7969 51.2434 14.1969C51.2434 14.7409 51.6914 15.0129 52.5874 15.0129H56.4034ZM54.2914 7.76488C53.7634 7.76488 53.3314 7.91688 52.9954 8.22088C52.6754 8.52488 52.5154 8.95688 52.5154 9.51688C52.5154 10.0609 52.6754 10.4849 52.9954 10.7889C53.3314 11.0929 53.7634 11.2449 54.2914 11.2449C54.8034 11.2449 55.2274 11.0929 55.5634 10.7889C55.8994 10.4849 56.0674 10.0609 56.0674 9.51688C56.0674 8.95688 55.8994 8.52488 55.5634 8.22088C55.2274 7.91688 54.8034 7.76488 54.2914 7.76488ZM54.1474 20.1969C55.2994 20.1969 56.1554 20.0769 56.7154 19.8369C57.2914 19.6129 57.5794 19.3249 57.5794 18.9729C57.5794 18.7329 57.4834 18.5409 57.2914 18.3969C57.1154 18.2689 56.8034 18.2049 56.3554 18.2049H52.0594C51.7554 18.2049 51.5074 18.2849 51.3154 18.4449C51.1394 18.6049 51.0514 18.8049 51.0514 19.0449C51.0514 19.4129 51.3234 19.6929 51.8674 19.8849C52.4114 20.0929 53.1714 20.1969 54.1474 20.1969ZM61.8651 17.6769V5.67688H65.5131L65.6331 8.10088C66.0011 7.22088 66.5371 6.55688 67.2411 6.10888C67.9451 5.66088 68.7771 5.43688 69.7371 5.43688C70.9691 5.43688 71.9691 5.79688 72.7371 6.51688C73.5051 7.23688 73.8891 8.29288 73.8891 9.68488V17.6769H69.8091V10.7649C69.8091 9.93288 69.6491 9.35688 69.3291 9.03688C69.0091 8.71688 68.6011 8.55688 68.1051 8.55688C67.5131 8.55688 67.0011 8.76488 66.5691 9.18088C66.1531 9.59688 65.9451 10.3089 65.9451 11.3169V17.6769H61.8651ZM82.1239 17.9169C80.1239 17.9169 78.5399 17.3729 77.3719 16.2849C76.2199 15.1969 75.6439 13.6609 75.6439 11.6769C75.6439 10.3649 75.9079 9.24488 76.4359 8.31688C76.9799 7.37288 77.7159 6.66088 78.6439 6.18088C79.5879 5.68488 80.6839 5.43688 81.9319 5.43688C83.1959 5.43688 84.2679 5.68488 85.1479 6.18088C86.0439 6.66088 86.7239 7.33288 87.1879 8.19688C87.6519 9.04488 87.8839 10.0209 87.8839 11.1249C87.8839 11.4289 87.8679 11.7249 87.8359 12.0129C87.8199 12.2849 87.8039 12.5169 87.7879 12.7089H79.6039C79.7159 13.5409 79.9879 14.1409 80.4199 14.5089C80.8519 14.8609 81.4199 15.0369 82.1239 15.0369C82.7319 15.0369 83.2119 14.9169 83.5639 14.6769C83.9319 14.4369 84.2039 14.1009 84.3799 13.6689L87.6439 14.7489C87.4199 15.4369 87.0279 16.0209 86.4679 16.5009C85.9239 16.9649 85.2679 17.3169 84.4999 17.5569C83.7479 17.7969 82.9559 17.9169 82.1239 17.9169ZM81.9319 8.29288C80.6359 8.29288 79.8679 9.03688 79.6279 10.5249H84.0199C83.8439 9.03688 83.1479 8.29288 81.9319 8.29288ZM89.6863 17.6769V5.67688H93.2863L93.4543 8.26888C93.7423 7.38888 94.1823 6.70088 94.7743 6.20488C95.3823 5.69288 96.1583 5.43688 97.1023 5.43688C97.4063 5.43688 97.6623 5.46888 97.8703 5.53288C98.0943 5.58088 98.2703 5.63688 98.3983 5.70088L97.9903 9.06088C97.8303 9.01288 97.6223 8.96488 97.3663 8.91688C97.1263 8.86888 96.8303 8.84488 96.4783 8.84488C95.7423 8.84488 95.1023 9.07688 94.5583 9.54088C94.0303 10.0049 93.7663 10.7009 93.7663 11.6289V17.6769H89.6863Z"
              fill="#D07A25"
            />
          </svg>
        </div>
        <p className="max-w-md pt-2 px-3 sm:px-6">
          Inspiration is everywhere and I love to see it all around me: in the
          colors of the sunset, in the sounds of the ocean or the texture of a
          leave. Nature is my main muse.
        </p>
        <div className="w-full px-1 sm:px-6 lg:px-10">
          <ButtonIconChat link="/comingsoon" text="Say Hi" />
        </div>
      </div>
    </>
  )
}
