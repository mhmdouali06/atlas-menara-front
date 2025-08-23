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
        orange: {
          DEFAULT: "var(--vt-c-orange)",
          100: "var(--vt-c-orange-100)",
          200: "var(--vt-c-orange-200)",
          300: "var(--vt-c-orange-300)",
          400: "var(--vt-c-orange-400)",
          500: "var(--vt-c-orange-500)",
          600: "var(--vt-c-orange-600)",
          700: "var(--vt-c-orange-700)",
          800: "var(--vt-c-orange-800)",
          900: "var(--vt-c-orange-900)",
        },
        black: "var(--vt-c-black)",
        white: "var(--vt-c-white)",
        gray: "var(--vt-c-gray)",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
        opensans: ["Open Sans", "sans-serif"],
        volkhov: ["Volkhov", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
