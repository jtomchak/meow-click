const path = require("path");

module.exports = {
  entry: "./meow.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist")
  }
};
