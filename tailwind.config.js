// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',  //包含 app 目录
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './layouts/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'primary': "#0000E3",
        1: '#0000E3',
        2: '#1C1E86',
        3: '#1C1E8C',
        4: '#000055',
        5: '#293993',
        6: '#0382E0',
        7: '#0a0a36',
        8: "#ececec"
      },
      margin:{
        l10: "10vw",
        l12: "12vw",
        l15: "15vw",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      fontSize: {
        size18: "18px",
        size22: "22px",
      }
    },
  },
  darkMode: "class",
}
