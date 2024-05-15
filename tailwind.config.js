/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        primary: ["Poppins", "sans-serif"],
      },
    },
    colors: {
      transparent: "transparent",
      primary: "#0E185F",
      secondary: "#2FA4FF",
      third: "#00FFDD",
      accent: "#E8FFC2",
      white: "#FFFFFF",
      black: "#000000",
      grey: "#B0B0B0",
    },
  },
  plugins: [],
};
