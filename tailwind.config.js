/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "custom-bg": "url('/Esutlodgesbg.jpg')",
        bg2: "url('/bg1.jpg')",
        bg3: "url('/bg3.jpg')",
      },
      colors: {
        primary: "#fbe3d1",
        secondary: "#640000",
      },
      keyframes: {
        fadeInBottom: {
          "0%": { opacity: 0, transform: "translateY(100%)" },
          "100%": { opacity: 1 },
        },
      },
      animation: {
        fadeInBottom: "fadeInBottom 1s ease-out",
      },
    },
  },
  plugins: [],
};
