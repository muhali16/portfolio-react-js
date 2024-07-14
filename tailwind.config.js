/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      raleway: ["Arial", "ui-sans-serif"],
      lato: ["Lato", "ui-sans-serif"],
    },
    colors: {
      richBlack: "#040D12",
      msuGreen: "#183D3D",
      winterGreenDream: "#5C8374",
      cadetGrey: "#93B1A6",
      russianViolet: "#240750",
      white: "#FFFFFF",
      black: "#000000",
    },
    animation: {
      shake: "shakeFrame 0.82s 3s cubic-bezier(.36,.07,.19,.97) both",
    },
    keyframes: {
      shakeFrame: {
        "10%, 90%": {
          transform: "translate3d(-1px, 0, 0)",
        },
        "20%, 80%": {
          transform: "translate3d(2px, 0, 0)",
        },
        "30%, 50%, 70%": {
          transform: "translate3d(-4px, 0, 0)",
        },
        "40%, 60%": {
          transform: "translate3d(4px, 0, 0)",
        },
      },
    },
  },
  plugins: [],
};
