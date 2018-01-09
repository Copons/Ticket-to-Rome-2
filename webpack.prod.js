const path = require('path');
const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const commonConfig = require('./webpack.common');

const PATH_CLIENT = path.resolve(__dirname, 'client');

module.exports = webpackMerge(commonConfig, {
	entry: path.join(PATH_CLIENT, 'index.js'),
	devtool: 'source-map',
	plugins: [
		new UglifyJSPlugin({
			sourceMap: true,
		}),
		new webpack.DefinePlugin({
			'process.env.NODE_ENV': JSON.stringify('production'),
		}),
	],
});
