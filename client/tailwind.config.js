/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
    "./node_modules/flowbite-react/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        purple: {
          500: "#8B5CF6",
        },
        pink: {
          500: "#EC4899",
        },
      },
    },
  },

  plugins: [ require("flowbite/plugin")],
};
