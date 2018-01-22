const fs = require('fs');
const CLIEngine = require('eslint').CLIEngine;
const rulesDefinition = require(__dirname + '/../.eslintrc.js');
const cli = new CLIEngine(rulesDefinition);

const categories = new Map();

let header = '';
let rest = '';
function finish() {
	if (header && rest) {
		fs.writeFile(__dirname + '/../readme.md', header + rest, err => {
			if (err) {
				throw err;
			}
			console.log('Code style documentation generated');
		});
	}
}

fs.readFile(__dirname + '/header.md', (err, data) => {
	if (err) {
		throw err;
	}
	header = data;
	finish();
});

const config = cli.config.getConfig();
const rules = config.rules;
const allRules = cli.getRules();
Object.keys(rules).forEach(key => {
	const params = rules[key];
	if (params === 0 || params[0] === 'off') {
		return;
	}
	const rule = allRules.get(key);
	const { docs } = rule.meta;
	const { category } = docs;
	if (!categories.has(category)) {
		categories.set(category, []);
	}
	categories.get(category).push({ key, docs });
});

categories.forEach((ruleDefs, name) => {
	rest += `\n### ${name}\nRule|Value|Description\n----|----|----\n`;
	rest += ruleDefs.map(rule => {
		const { key } = rule;
		const val = Array.isArray(rules[key]) && rules[key].length > 1 && typeof rules[key][1] !== 'object' ? rules[key][1] : '';
		return `[${key}](https://eslint.org/docs/rules/${key})|${val}|${rule.docs.description}`;
	}).join('\n');
});
finish();
