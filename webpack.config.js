const path = require("path");

module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.gif$/,
        type: "asset/inline",
      },
      {
        test: /\.(ttf|eot|svg)$/,
        type: "asset/resource",
      },
    ],
  },
  resolve: {
    alias: {
      config$: path.resolve(__dirname, "./configs/app-config.js"),
      react: path.resolve(__dirname, "./vendor/react-master"),
    },
    extensions: [".js", ".jsx"],
    modules: [
      "node_modules",
      "bower_components",
      "shared",
      path.resolve(__dirname, "shared/vendor/modules"),
    ],
  },
};
