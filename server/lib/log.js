const chalk = require('chalk');

const { log } = console;
const error = chalk.white.bgRed;
const info = chalk.black.bgBlue;
const success = chalk.black.bgGreen;

module.exports = {
	logError: message => log(`\n${error(` ${message} `)}\n`),
	logInfo: message => log(`\n${info(` ${message} `)}\n`),
	logSuccess: message => log(`\n${success(` ${message} `)}\n`),
};
