var path = require("path");
var webpack = require("webpack");
var HtmlWebpackPlugin = require('html-webpack-plugin');

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
		new HtmlWebpackPlugin({
            title: "Todos",
            filename: "index.html",
            template: __dirname + "/app/index.html"
		})
	]
};