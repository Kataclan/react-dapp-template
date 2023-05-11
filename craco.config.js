const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const webpack = require("webpack");
const dotenv = require("dotenv");
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
    },
  },
  webpack: {
    configure: (webpackConfig, { env, paths }) => {
      console.log(mode);
      webpackConfig.devtool =
        mode === "development" ? "inline-source-map" : undefined;
      webpackConfig.plugins.push(
        new webpack.ProvidePlugin({
          Buffer: ["buffer", "Buffer"],
        })
      );
      webpackConfig.resolve.fallback = {
        ...webpackConfig.resolve.fallback,
        buffer: require.resolve("buffer/"),
        constants: require.resolve("constants-browserify"),
        assert: require.resolve("assert/"),
        crypto: require.resolve("crypto-browserify"),
        http: require.resolve("stream-http"),
        https: require.resolve("https-browserify"),
        os: require.resolve("os-browserify/browser"),
        stream: require.resolve("stream-browserify"),
        fs: false,
      };
      return webpackConfig;
    },
  },
};
