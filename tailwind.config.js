/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        gray: {
          "100": "rgba(0, 0, 0, 0.06)",
          "200": "rgba(255, 255, 255, 0)",
          "300": "rgba(0, 0, 0, 0.16)",
        },
        darkred: "#990000",
        firebrick: "#cc3333",
        darkslategray: "rgba(51, 51, 51, 0.16)",
        silver: "#b9b9b9",
        black: "#000",
        lightsteelblue: "#99a9bc",
        aliceblue: "#e8eef4",
        gainsboro: "rgba(217, 217, 217, 0.33)",
      },
      spacing: {},
      fontFamily: {
        mada: "Mada",
        inter: "Inter",
      },
      borderRadius: {
        "8xs": "5px",
      },
    },
    fontSize: {
      "6xl": "25px",
      xs: "12px",
      xl: "20px",
      "41xl": "60px",
      "17xl": "36px",
      "29xl": "48px",
      inherit: "inherit",
    },
    screens: {
      mq750: {
        raw: "screen and (max-width: 750px)",
      },
      mq675: {
        raw: "screen and (max-width: 675px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
