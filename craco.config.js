module.exports = {
  style: {
    postcssOptions: {
      plugins: [require("tailwindcss"), require("autoprefixer")],
    },
  },
  jest: {
    configure: {
      globals: {
        CONFIG: true,
      },
      setupFilesAfterEnv: ["luxon-jest-matchers"],
    },
  },
};
