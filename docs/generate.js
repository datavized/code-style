const fs = require('fs');
const Linter = require('eslint').Linter;
const linter = new Linter();

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

const rules = linter.getRules();
rules.forEach((rule, key) => {
	const { docs } = rule.meta;
	const { category } = docs;
	if (!categories.has(category)) {
		categories.set(category, []);
	}
	categories.get(category).push({ key, docs });
});

categories.forEach((rules, name) => {
	rest += `\n### ${name}\nRule|Description\n----|----\n`;
	rest += rules.map(rule => `[${rule.key}](https://eslint.org/docs/rules/${rule.key}) | ${rule.docs.description}`).join('\n');
});
finish();
