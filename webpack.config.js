const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Clean = require('clean-webpack-plugin');

module.exports = {
    entry: "./src/index.ts",
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "dist")
    },
    plugins: [
        new Clean(['dist']),
        new MiniCssExtractPlugin(),
        new HtmlWebpackPlugin({
            title: 'TableTop'
        }),
    ],
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: "ts-loader",
                exclude: /node_modules/
            },
            {
                test: /\.(sa|sc|c)ss$/,
                use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"]
            }
        ]
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js"]
    },
    devtool: "inline-source-map",
    devServer: {
        contentBase: './dist'
    },
    mode: "development"
};
