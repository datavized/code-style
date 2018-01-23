/* eslint-env node, browser: false */
const eslintConfig = require('./lib/index.js');
module.exports = Object.assign(eslintConfig, {
	env: {
		node: true,
		es6: true,
		commonjs: true
	}
});