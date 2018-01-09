const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const PATH_CLIENT = path.resolve(__dirname, 'client');
const PATH_DIST = path.resolve(__dirname, 'dist');

module.exports = {
	plugins: [
		new CleanWebpackPlugin([PATH_DIST]),
		new HtmlWebpackPlugin({ template: path.join(PATH_CLIENT, 'index.html') }),
	],
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				use: ['babel-loader'],
			},
			{
				test: /\.scss$/,
				use: ['style-loader', 'css-loader', 'sass-loader'],
			},
		],
	},
	resolve: {
		extensions: ['.js', '.jsx'],
	},
	output: {
		filename: 'bundle.js',
		path: PATH_DIST,
	},
};
