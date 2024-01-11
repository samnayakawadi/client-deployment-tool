/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        redColor: "#f3123b",
        navbg: "#1D1E24",
        herobg: "#090909",
        footerbg: "#1D1E24",
        aboutbg: "#191919",
        servicesbg: "#101010",
        serviceTileBg: "#191919",
        serviceTileBgOnHover: "#1D1E24",
        project1bg: "#191919",
        project1TileBg: "#101010",
        project1TileBgOnHover: "#1D1E24",
        project2bg: "#101010",
        project2TileBg: "#191919",
        project2TileBgOnHover: "#1D1E24",
        contactbg: "#191919",
      }
    },
  },
  // eslint-disable-next-line no-undef
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["corporate", "lofi", "business"],
  },
}

// lofi or corporate is WHITE SQUARED THEME [lofi has little different colors but corporate has correct colors]
// light is WHILE DEFAULT BASIC THEME
// business is BLACK SQUARED THEME