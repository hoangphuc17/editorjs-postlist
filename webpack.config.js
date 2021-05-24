const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: {
    path: path.join(__dirname, "/dist"),
    publicPath: "/",
    filename: "bundle.js",
    library: "PostList",
    libraryTarget: "umd",
    libraryExport: "default",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
            query: {
              presets: ["@babel/preset-env"],
            },
          },
          "eslint-loader",
        ],
      },
      {
        test: /\.css$/,
        use: [
          "style-loader",
          "css-loader",
          {
            loader: "postcss-loader",
            options: {
              plugins: [
                require("postcss-nested-ancestors"),
                require("postcss-nested"),
              ],
            },
          },
        ],
      },
      {
        test: /\.svg$/,
        loader: "svg-inline-loader?removeSVGTagAttrs=false",
      },
    ],
  },
};