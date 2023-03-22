/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#d8d33a",

          secondary: "#d67424",

          accent: "#7e40ad",

          neutral: "#24282D",

          "base-100": "#F4F1F9",

          info: "#8DC3EC",

          success: "#176D4B",

          warning: "#DEAF17",

          error: "#FB6041",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
