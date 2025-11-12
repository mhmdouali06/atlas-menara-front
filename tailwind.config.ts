import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./components/**/*.{vue,js,ts}",
    "./layouts/**/*.{vue,js,ts}",
    "./pages/**/*.{vue,js,ts}",
    "./app.vue",
  ],
  safelist: [
    "bg-green-600",
    "bg-amber-500",
    "bg-red-600",
    "bg-gray-500",
    "bg-yellow-400",
    "bg-blue-600",
    "bg-gray-400",
    "bg-purple-500",
    "bg-indigo-500",
    "bg-zinc-700",
    "text-white",
    "text-gray-900",
    "border",
    "border-yellow-500",
    "border-yellow-600",
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
        arefRuqaa: ["Aref Ruqaa", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
