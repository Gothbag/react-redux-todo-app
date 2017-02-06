var path = require("path");
var webpack = require("webpack");
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
	context: path.join(__dirname, "app"),
	entry: [
		"babel-polyfill",
		"./index.js"
	],
	output: {
	    path: path.join(__dirname, "dist"),
	    filename: "bundle.js"
	},
	module: {
		loaders: [ 
			{
				test: /\.jsx?$/,
				exclude: /(nodule_modules|bower_components)/,
				loader: 'babel-loader',
				query: {
					presets: ['es2015', 'stage-0', 'react'],
					plugins: ["add-module-exports"]
				}
			
			}
		]
	},
	plugins: [
		new webpack.optimize.OccurrenceOrderPlugin(),
		new webpack.HotModuleReplacementPlugin(),
		new CopyWebpackPlugin([
            { from: "../assets/css/styles.css", to: "../dist/css" }
		]),
		new HtmlWebpackPlugin({
            title: "Todos",
            filename: "index.html",
            template: __dirname + "/app/index.html"
		})
	]
};