const colors = require("tailwindcss/colors")

module.exports = {
  mode: "jit",
  purge: ["./**/*.html"],
  darkMode: false, // or 'media' or 'class',
  theme: {
    extend: {
      container: {
        padding: "0.8rem",
        center: true
      },
      fontSize: {
        logo: "32px",
        "6.5xl": "64px",
        large: "160px",
        "very-large": "200px",
        huge: ["240px", { lineHeight: "15rem" }]
      },
      fontFamily: {
        "gilroy-bold": "Gilroy-Bold",
        "gilroy-medium": "Gilroy-Medium",
        chronicle: "Chronicle Display"
      },
      colors: {
        accent: "#FBD784",
        "dark-green": "#0b1d26"
      },
      letterSpacing: {
        extrawide: ".3em"
      },
      borderWidth: {
        3: "3px"
      },
      maxWidth: {
        "8xl": "1462px"
      },
      backgroundImage: theme => ({
        "hero-skies": "url('./assets/images/skies.jpg')",
        "hero-mountains": "url('./assets/images/bg-mountains.png')",
        "hero-grass": "url('./assets/images/grass.png')"
      }),
      backgroundPosition: {
        "position-custom": "28% center"
      },
      inset: {
        "-68": "-16.95rem",
        "-2/3.5": "-60%"
      },
      zIndex: {
        negative: "-1"
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: [require("@tailwindcss/aspect-ratio"), require("tailwindcss-scroll-snap")]
}
