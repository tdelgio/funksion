module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "media", // or 'media' or 'class'
  theme: {
    fontFamily: {
      body: ["Work Sans"],
    },
    extend: {
      screens: {
        sm: "370px",
      },
      colors: {
        //brand-colors
        brand: "#E09143",
        primary: "#797E5E",
        secondary: "#254B5B",
        tertiary: "#BF6363",
        //neutral-colors
        mink: "#E8D5AD",
        "lt-concrete": "#E6E6E9",
        "concrete-gray": "#8C8CA1",
        white: "#FFF",
        black: "#000",
        //accent-colors
        "orange-autumn-dk": "#D07A25",
        "brix-bordeaux": "#BF6363",
        //function-colors
        error: "#671212",
        confirmation: "#4B512B",
        information: "#142932",
      },
      textColor: {
        white: "#fff",
        "autum-orange": "#E09143",
      },
      letterSpacing: {
        tightest: "-0.125em",
      },
      boxShadow: {
        card: "1px 1px 2px rgba(0, 0, 0, 0.4)",
        brand:
          "0 4px 6px -2px rgba(224, 145, 67, 1), 0 2px 4px -1px rgba(224, 145, 67, 0.06)",
      },
      borderWidth: {
        card: "0.5px",
      },
      backgroundImage: {
        "hero-bg": "url('/src/images/hero-pattern.svg')",
        "ready-pattern": "url('/src/images/ready-background.png')",
        "button-brand": "url('/src/images/button-background.png')",
      },
      gradientColorStops: {
        brand: "#E09143",
        primary: "#797E5E",
        secondary: "#254B5B",
      },
    },
  },
  variants: {
    extend: {
      backgroundColor: ["hover", "active"],
      borderWidth: ["hover", "focus"],
    },
  },
  plugins: [],
}
