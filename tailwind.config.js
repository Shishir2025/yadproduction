export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        scroll: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" }, // scrolls half (because we duplicated data)
        },
      },
      animation: {
        // include a duration so the animation actually runs
        scroll: "scroll 25s linear infinite",
      },
    },
  },
  plugins: [],
};
