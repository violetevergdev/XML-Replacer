const path = require("path");
const TerserPlugin = require("terser-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: "./fsb.js",
  output: {
    path: path.resolve(__dirname, "dist/dist"),
    filename: "fsb.js",
    publicPath: "https://violetevergdev.github.io/XML-Replacer/",
  },
  target: "node",
  plugins: [
    new CopyWebpackPlugin({
      patterns: [{ from: `public`, to: "../" }],
    }),
  ],
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        extractComments: false,
        terserOptions: {
          format: {
            comments: false,
          },
        },
      }),
    ],
  },
};
