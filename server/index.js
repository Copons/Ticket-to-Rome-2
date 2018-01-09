const express = require('express');
const http = require('http');
const socket = require('socket.io');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const webpackDevConfig = require('../webpack.dev');
const webpackProdConfig = require('../webpack.prod');
const { logError, logInfo, logSuccess } = require('./lib/log');

const isProduction = process.env.NODE_ENV === 'production';
const port = isProduction ? process.env.PORT || 3000 : 3000;

const app = express();
app.use(express.static('dist'));
const webpackCompiler = webpack(
	isProduction ? webpackProdConfig : webpackDevConfig
);
app.use(webpackDevMiddleware(webpackCompiler, { stats: 'minimal' }));
app.use(webpackHotMiddleware(webpackCompiler, {}));

const server = http.createServer(app);
const io = socket(server);

io.on('connection', client => {
	logSuccess(`Client [${client.id}] connected.`);

	client.on('disconnect', () =>
		logError(`Client [${client.id}] disconnected.`)
	);
});

server.listen(port, () => {
	logInfo(`${isProduction ? 'Prod' : 'Dev'} server listening on ${port}.`);
});
