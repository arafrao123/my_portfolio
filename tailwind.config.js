/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          background: "#1A202C",
          text: "#FFFFFF",
        },
        light: {
          background: "#FFFFFF",
          text: "#1A202C",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      transitionTimingFunction: {
        bounce: "cubic-bezier(0.68, -0.55, 0.265, 1.55)",
      },
      animation: {
        linethrough: "linethrough 4s linear forwards",
      },
      keyframes: {
        linethrough: {
          "100%": {
            transform: "translateX(0)",
          },
        },
      },
      fontFamily: {
        newsreader: ["Newsreader", "cursive"],
      },
      fontSize: {
        "10xl": ["12rem", { lineHeight: "1" }],
      },
      letterSpacing: {
        extra: "0.5em",
      },
    },
  },
  plugins: [],
};
