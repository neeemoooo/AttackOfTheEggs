/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily:{
        mainFont:["Kings","cursive"],
      },      
      backgroundImage:{
        mainBg:"url('./src/assets/images/main-bg.png')"
      }
    },
  },
  plugins: [],
}

