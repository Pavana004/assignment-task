module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        dropdown: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        carousel: {
          "0%": { opacity: "0", transform: "scale(0.95)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
      },
      animation: {
        dropdown: "dropdown 0.3s ease-out",
        carousel_ani: "carousel 0.3s ease-out",
      },
      fontFamily: {
        sans: ["Barlow", "sans-serif"],
      },
      backgroundImage: {
        "section-1-bg": "url('/src/assets/images/sec-3.png')",
        "section-2-bg": "url('/src/assets/images/sec-3-1.png')",
        "section-3-bg": "url('/src/assets/images/sec-3-2.png')",
        "section-4-bg": "url('/src/assets/images/sec-3-4.png')",
        "section-bg": "url('/src/assets/images/bg.png')",
      },
      colors: {
        "custom-color": "#E8505E",
      },
    },
  },
  plugins: [],
};
