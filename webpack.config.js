const path = require("path");
const TerserPlugin = require("terser-webpack-plugin");

module.exports = {
  entry: {
    product: "./admin/js/product/onlinery-admin-product.js",
  },
  devtool: 'source-map',
  mode: "development",
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()],
    removeAvailableModules: false,
    removeEmptyChunks: false,
    splitChunks: false,
  },
  output: {
    pathinfo: false,
    filename: "[name].min.js",
    path: path.resolve(__dirname, "dist/js"),
  },
  externals: {
    jquery: "jQuery",
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: path.resolve(__dirname, 'admin/js'),
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
        },
      },
      {
        test: /\.(scss|css)$/,
        include: path.resolve(__dirname, 'admin/css'),
        use: ["style-loader", "css-loader", "sass-loader", "postcss-loader"],
      },
      {
        test: /\.svg/,
        type: 'asset/inline'
      },
    ],
  },
};
