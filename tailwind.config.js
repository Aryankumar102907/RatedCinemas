// tailwind.config.js
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#030014",
        light: {
          100: "#cecefb",
          200: "#a8b5db",
        },
        gray: {
          100: "#9ca4ab",
        },
        dark: {
          100: "#0f0d23",
        },
      },
      fontFamily: {
        "dm-sans": ["DM Sans", "sans-serif"],
      },
      backgroundImage: {
        "hero-pattern": 'url("/hero-bg.png")',
      },
      screens: {
        xs: "480px",
      },
    },
  },
  plugins: [],
};
