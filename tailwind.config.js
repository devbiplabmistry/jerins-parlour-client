/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      poppins: ['Poppins', 'sans'],
      Montserrat: ['Montserrat', 'sans-serif'],
    },
  },

    plugins: [require("daisyui")],
}

