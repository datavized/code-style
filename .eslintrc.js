module.exports = {
	"plugins": [
		"import"
	],
	"extends": "eslint-config-crockford",
	"parser": "babel-eslint",
	"parserOptions": {
		"sourceType": "module",
		"ecmaVersion": 6,
		"allowImportExportEverywhere": true
	},
	"rules": {
		"no-bitwise": 2,
		"camelcase": 2,
		"curly": 2,
		"eqeqeq": 2,
		"guard-for-in": 2,
		"no-global-assign": 2,
		"no-extend-native": 2,
		"block-scoped-var": 2,
		"strict": 1,
		"wrap-iife": [ 2, "any" ],
		"no-iterator": 2,
		"no-use-before-define": [ 2, { "functions": false } ],
		"max-params": [ 2, 5 ],
		"new-cap": 2,
		"no-caller": 2,
		"no-irregular-whitespace": 2,
		"no-new": 2,
		"valid-typeof": 2,
		"quotes": [ 2, "single" ],
		"no-extra-parens": 1,
		"no-undef": 2,
		"no-unused-vars": 2,
		"indent": [ "error", "tab", { "SwitchCase": 1 } ],
		"linebreak-style": [ "error", "unix" ],
		"eol-last": [ "off" ],
		"no-implicit-globals": 2,
		"prefer-const": 1,
		"one-var": [ 1, "never" ],
		"one-var-declaration-per-line": 1,
		"no-loop-func": 2,
		"space-before-function-paren": [ "error", { "anonymous": "always", "named": "never", "asyncArrow": "always" } ],
		"no-plusplus": 0,
		"require-await": 2
	}
};