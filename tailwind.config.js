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
      textColor: {
        white: "#fff",
        "autumn-green": "#797E5E",
        "lt-autumn-green": "#A1A77F",
        "concrete-green": "#90947a",
        "ocean-denim-blue": "#457B92",
        "deep-sea": "#254B5B",
        "navy-blue": "#142932",
        "bordeaux-brick": "#BF6363",
        "royal-bordeaux": "#873A3A",
        "autum-orange": "#E09143",
        "vitamin-c": "#B05E0C",
        "shadow-skin": "#E8D5AD",
      },
      backgroundColor: theme => ({
        "autumn-green": "#797E5E",
        "lt-autumn-green": "#A1A77F",
        "concrete-green": "#595D45",
        "ocean-denim-blue": "#3E6E8E",
        "deep-sea": "#254B5B",
        "navy-blue": "#142932",
        "bordeaux-brick": "#BB5858",
        "royal-bordeaux": "#782F2F",
        "autum-orange": "#E09143",
        "vitamin-c": "#EF8720",
        "shadow-skin": "#E8D5AD",
        "shadow-skin": "#E8D5AD",
      }),
      borderColor: {
        "concrete-green": "#595D45",
        "navy-blue": "#142932",
        "royal-bordeaux": "#782F2F",
        "ocean-denim-blue": "#3E6E8E",
        "bordeaux-brick": "#BB5858",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
