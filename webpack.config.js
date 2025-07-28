const path = require("node:path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
	entry: "./src/index.jsx",
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: "main.js",
		clean: true,
		publicPath: "/",
	},
	resolve: {
		extensions: [".js", ".jsx"],
	},
	module: {
		rules: [
			{
				test: /\.jsx?$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader",
				},
			},
			{
				test: /\.css$/i,
				use: ["style-loader", "css-loader", "postcss-loader"],
			},
			{
				test: /\.(png|jpe?g|gif|svg)$/i,
				type: "asset/resource",
				generator: {
					filename: "assets/[name][ext]",
				},
			},
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: "./public/index.html",
			filename: "index.html",
			inject: "body",
			favicon: false,
		}),
		new CopyWebpackPlugin({
			patterns: [
				{
					from: "public",
					to: "",
					globOptions: {
						ignore: ["**/index.html"],
					},
				},
			],
		}),
	],
	devServer: {
		static: {
			directory: path.join(__dirname, "public"),
		},
		compress: true,
		port: 8080,
		historyApiFallback: true,
		open: true,
		hot: true,
	},
	performance: {
		maxAssetSize: 2000000, // 2MB - to accommodate your GIF files
		maxEntrypointSize: 2000000, // 2MB
		hints: process.env.NODE_ENV === 'production' ? 'warning' : false,
	},
	mode: "development",
};
