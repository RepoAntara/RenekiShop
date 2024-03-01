/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        main : '#1B03A3',
        secondary : 'black',
        third : '#00FFFF',
        extra : '#0000ff',
      },
      fontFamily: {
        poppins: ["Poppins", "system-ui"],
      },
    },
  },
  plugins: [],
}