/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#A0C878",
        secondary: "#DDEB9D",
        tertiary: "#FAF6E9",
      },
    },
  },
  plugins: [],
};
