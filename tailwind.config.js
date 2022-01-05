module.exports = {
  mode: "jit",
  content: ["./public/**/*.html", "./src/**/*.{js,jsx,ts,tsx,mdx}"],
  important: true,
  darkMode: "media",
  theme: {
    fontFamily: {
      sans: ["Marr Sans Web", "sans-serif"],
      gt: ["GtAmerica", "serif"],
    },
    container: {
      center: true,
    },
    extend: {
      spacing: {
        100: "25rem",
        188: "11.75rem",
        75: "4.6875rem",
      },
      maxWidth: {
        220: "13.75rem",
        400: "33.33rem",
        500: "31.25rem",
      },
      transitionProperty: {
        width: "33.33rem",
      },
      fontSize: {
        "2xl": "1.35rem",
        "3xl": "1.5rem",
      },
      colors: {
        gray: {
          200: "#E5E5E5",
          300: "#C4C4C4",
          400: "#616161",
          500: "#333333",
        },
        beige: {
          100: "#F7F1ED",
          300: "#E8C2A3",
        },
        purple: {
          100: "#F0E3FD",
          200: "#C398EB",
          300: "#9B51E0",
          400: "#7232AE",
          500: "#3E1862",
        },
        red: {
          300: "#B71F1F",
          400: "#7E1B1B",
        },
      },
      backdropBlur: {
        xs: "3px",
      },
      boxShadow: {
        "2xl": "0 15px 50px -12px rgba(0, 0, 0, 0.25)",
        modal: "0px 4px 50px rgba(0, 0, 0, 0.25)",
      },
      padding: {},
    },
  },
  variants: {},
  plugins: [require("@tailwindcss/forms")],
};
