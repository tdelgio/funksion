module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "media", // or 'media' or 'class'
  theme: {
    fontFamily: {
      "work-reg": "WorkSansReg",
      "work-semi": "WorkSansSemi",
      "work-bold": "WorkSansBold",
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
    },
  },
  variants: {
    extend: {
      backgroundColor: ["active"],
      borderWidth: ["hover", "focus"],
    },
  },
  plugins: [],
}
