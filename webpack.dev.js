const path = require('path');
const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const commonConfig = require('./webpack.common');

const PATH_CLIENT = path.resolve(__dirname, 'client');

module.exports = webpackMerge(commonConfig, {
	entry: [
		'react-hot-loader/patch',
		path.join(PATH_CLIENT, 'index.js'),
		'webpack-hot-middleware/client',
	],
	devtool: 'inline-source-map',
	plugins: [
		new webpack.NamedModulesPlugin(),
		new webpack.HotModuleReplacementPlugin(),
	],
});
