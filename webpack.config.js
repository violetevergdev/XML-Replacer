const path = require("path");

module.exports = {
  entry: "./fsb.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "fsb.js",
  },
  target: "node",
};
