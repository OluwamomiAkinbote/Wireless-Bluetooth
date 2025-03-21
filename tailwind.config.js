
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html", // If you have an index.html
    "./src/**/*.{js,ts,jsx,tsx}", // Scan all JSX/TSX files in src
  ],
  theme: {
    extend: {
      fontFamily: {
        barlow: ["Barlow Condensed", "sans-serif"],
        openSans: ["Open Sans", "sans-serif"],
        roboto: ["Roboto", "sans-serif"],
      },
    },
  },
  plugins: [],
};
