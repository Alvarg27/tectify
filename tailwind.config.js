module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // that is animation class
      animation: {
        fade: "fadeOut 0.3s ease-in-out",
      },

      // that is actual animation
      keyframes: () => ({
        fadeOut: {
          "0%": { opacity: 0, maxHeight: "0px" },
          "100%": { opacity: 1, maxHeight: "400px" },
        },
      }),
    },
  },
  plugins: [],
};
