import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./components/**/*.{vue,js,ts}",
    "./layouts/**/*.{vue,js,ts}",
    "./pages/**/*.{vue,js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {
      colors: {
        blue: "var(--vt-c-blue)",
        softblack: "var(--vt-c-soft-black)",
        orange: "var(--vt-c-orange)",
        black: "var(--vt-c-black)",
        white: "var(--vt-c-white)",
        gray: "var(--vt-c-gray)",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
        opensans: ["Open Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
