const fs = require('fs');
const CLIEngine = require('eslint').CLIEngine;
const rulesDefinition = require(__dirname + '/../.eslintrc.js');
const cli = new CLIEngine(rulesDefinition);

/*
Fix category order so we don't get wild diffs when
changing rules and regenerating docs
*/
const categoryOrder = {
	'Stylistic Issues': 0,
	'Best Practices': 1,
	'ECMAScript 6': 2,
	'Possible Errors': 3,
	Variables: 4,
	'Strict Mode': 5
};

function categorySort([a], [b]) {
	const aOrder = categoryOrder[a] === undefined ? Infinity : categoryOrder[a];
	const bOrder = categoryOrder[b] === undefined ? Infinity : categoryOrder[b];
	if (aOrder !== bOrder) {
		return aOrder - bOrder;
	}

	// alphabetical for new categories
	return a.localeCompare(b);
}

function ruleSort(a, b) {
	return a.key.localeCompare(b.key);
}

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

const config = cli.getConfigForFile(__filename);
const rules = config.rules;
const allRules = cli.getRules();
Object.keys(rules).forEach(key => {
	const params = rules[key];
	if (params === 0 || params === 'off' || params[0] === 0 || params[0] === 'off') {
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

const cats = Array.from(categories).sort(categorySort);
cats.forEach(([name, ruleDefs]) => {
	rest += `\n### ${name}\nRule|Value|Description\n----|----|----\n`;
	rest += ruleDefs.sort(ruleSort).map(rule => {
		const { key } = rule;
		const val = Array.isArray(rules[key]) && rules[key].length > 1 && typeof rules[key][1] !== 'object' ? rules[key][1] : '';
		return `[${key}](https://eslint.org/docs/rules/${key})|${val}|${rule.docs.description}`;
	}).join('\n');
});
finish();
