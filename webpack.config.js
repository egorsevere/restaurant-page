
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require("path");

module.exports = {
    mode: "development",
    entry: "./src/script.js",
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "dist"),
        clean: true,
    },
    plugins: [
     new HtmlWebpackPlugin(
        {template: "./src/index.html",}
     )
    ],
    devtool: "eval-source-map",
    devServer: {
      watchFiles: ['./src/index.html'],
    },
    module: {
        rules: [
            {
              test: /\.css$/i,
              use: ['style-loader', 'css-loader'],
            },
        ],
    },
};