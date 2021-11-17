const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const NodePolyfillPlugin = require("node-polyfill-webpack-plugin");

module.exports = {
  mode: "production",
  entry: "./src/index.tsx",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js",
  },
  devtool: "inline-source-map",
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"],
    fallback: {
      os: require.resolve("os-browserify/browser"),
      path: require.resolve("path-browserify"),
    },
  },
  devServer: {
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: "ts-loader",
      },
      {
        test: /\.(s[ac]ss|css)$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: [/\.bmp$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
        loader: require.resolve("url-loader"),
        options: { limit: 8000, name: "images/[hash]-[name].[ext]" },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./public/index.html",
    }),
    new NodePolyfillPlugin(),
  ],
};
