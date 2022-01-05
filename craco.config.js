const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const webpack = require("webpack");
const dotenv = require("dotenv");

const source = path.resolve(__dirname, "src");

const throwError = (message) => console.log(message);

const mode = process.env.NODE_ENV;

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
  webpack: {
    configure: () => {
      return {
        mode,
        entry: "./src/index.tsx",
        devtool: "inline-source-map",
        output: {
          path: path.resolve(__dirname, "dist"),
          filename: "bundle.js",
        },
        module: {
          rules: [
            {
              test: /\.tsx?$/,
              use: "ts-loader",
              include: path.resolve(__dirname, "src"),
              exclude: /node_modules/,
            },
            {
              test: /\.s[ac]ss$/i,
              exclude: /node_modules/,
              include: path.resolve(__dirname, "src"),
              use: [
                "style-loader",
                "css-loader",
                "sass-loader",
                {
                  loader: "postcss-loader",
                  options: {
                    postcssOptions: {
                      plugins: [
                        require("postcss-import"),
                        require("postcss-nesting"),
                        require("tailwindcss/nesting"),
                        require("tailwindcss"),
                        require("autoprefixer"),
                      ],
                    },
                  },
                },
              ],
            },
            {
              test: /\.css$/i,
              exclude: /node_modules/,
              include: path.resolve(__dirname, "src"),
              use: [
                "style-loader",
                "css-loader",
                {
                  loader: "postcss-loader",
                  options: {
                    postcssOptions: {
                      plugins: [
                        require("autoprefixer"),
                        require("tailwindcss"),
                      ],
                    },
                  },
                },
              ],
            },
            {
              test: /\.(jpg|jpeg|png|woff|woff2|eot|ttf|svg)$/,
              use: [
                {
                  loader: "url-loader",
                  options: {
                    limit: 10000,
                  },
                },
              ],
            },
          ],
        },
        plugins: [
          new HtmlWebpackPlugin({
            template: path.join(__dirname, "public", "index.html"),
          }),
          new webpack.ProvidePlugin({
            process: "process/browser",
            Buffer: ["buffer", "Buffer"],
          }),
          new webpack.DefinePlugin({
            "process.env": JSON.stringify(dotenv.config().parsed),
          }),
        ],

        resolve: {
          extensions: [".ts", ".tsx", ".js", ".jsx"],
          alias: {
            components: path.resolve(__dirname, "src/components"),
            config: path.resolve(__dirname, "src/config"),
            contexts: path.resolve(__dirname, "src/contexts"),
            hooks: path.resolve(__dirname, "src/hooks"),
            router: path.resolve(__dirname, "src/router"),
            types: path.resolve(__dirname, "src/types"),
            utils: path.resolve(__dirname, "src/utils"),
            views: path.resolve(__dirname, "src/views"),
          },
          fallback: {
            buffer: require.resolve("buffer/"),
            constants: require.resolve("constants-browserify"),
            assert: require.resolve("assert/"),
            crypto: require.resolve("crypto-browserify"),
            http: require.resolve("stream-http"),
            https: require.resolve("https-browserify"),
            os: require.resolve("os-browserify/browser"),
            stream: require.resolve("stream-browserify"),
            fs: false,
          },
        },
      };
    },
  },
};
