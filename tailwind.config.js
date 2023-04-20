/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: { nunito: "Nunito" },
    },

    fontSize: {
      base: "16px",
      sm: "13px",
      md: "18px",
      lg: "24px",
      xl: "32px",
    },
    colors: {
      white: "#fff",
      gray: { 100: "#808080", 200: "#323232", 300: "#212121" },
      cyan: "#14ffec",
      green: "#25da72",
      red: "#d6436e",
    },
  },
  // plugins: [require("tailwind-scrollbar")],
};
