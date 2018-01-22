# Datavized Code Style

Our code style is based on Crockfor's, with a few modifications. We use 

## The Basics
- Indent with tabs, not spaces
- Always end statements with semicolons
- Conditionals and loops ("if", "while", "for") always use curly braces
- Never use `var`. Use `const` wherever possible and `let` only if necessary.
- Always use "strict equal" (`===` and `!==`, not `==` or `!=`)
- Define variables in scope, never global.

## The Rules

### Stylistic Issues
Rule|Value|Description
----|----
[array-bracket-spacing](https://eslint.org/docs/rules/array-bracket-spacing)||enforce consistent spacing inside array brackets
[brace-style](https://eslint.org/docs/rules/brace-style)||enforce consistent brace style for blocks
[comma-dangle](https://eslint.org/docs/rules/comma-dangle)||require or disallow trailing commas
[comma-spacing](https://eslint.org/docs/rules/comma-spacing)||enforce consistent spacing before and after commas
[comma-style](https://eslint.org/docs/rules/comma-style)||enforce consistent comma style
[indent](https://eslint.org/docs/rules/indent)|tab|enforce consistent indentation
[key-spacing](https://eslint.org/docs/rules/key-spacing)||enforce consistent spacing between keys and values in object literal properties
[keyword-spacing](https://eslint.org/docs/rules/keyword-spacing)||enforce consistent spacing before and after keywords
[new-cap](https://eslint.org/docs/rules/new-cap)||require constructor names to begin with a capital letter
[no-continue](https://eslint.org/docs/rules/no-continue)||disallow `continue` statements
[no-mixed-spaces-and-tabs](https://eslint.org/docs/rules/no-mixed-spaces-and-tabs)||disallow mixed spaces and tabs for indentation
[no-trailing-spaces](https://eslint.org/docs/rules/no-trailing-spaces)||disallow trailing whitespace at the end of lines
[no-underscore-dangle](https://eslint.org/docs/rules/no-underscore-dangle)||disallow dangling underscores in identifiers
[one-var](https://eslint.org/docs/rules/one-var)|never|enforce variables to be declared either together or separately in functions
[semi](https://eslint.org/docs/rules/semi)||require or disallow semicolons instead of ASI
[semi-spacing](https://eslint.org/docs/rules/semi-spacing)||enforce consistent spacing before and after semicolons
[space-before-blocks](https://eslint.org/docs/rules/space-before-blocks)||enforce consistent spacing before blocks
[space-before-function-paren](https://eslint.org/docs/rules/space-before-function-paren)|[object Object]|enforce consistent spacing before `function` definition opening parenthesis
[space-in-parens](https://eslint.org/docs/rules/space-in-parens)||enforce consistent spacing inside parentheses
[space-infix-ops](https://eslint.org/docs/rules/space-infix-ops)||require spacing around infix operators
[space-unary-ops](https://eslint.org/docs/rules/space-unary-ops)||enforce consistent spacing before or after unary operators
[no-bitwise](https://eslint.org/docs/rules/no-bitwise)||disallow bitwise operators
[camelcase](https://eslint.org/docs/rules/camelcase)||enforce camelcase naming convention
[max-params](https://eslint.org/docs/rules/max-params)|5|enforce a maximum number of parameters in function definitions
[quotes](https://eslint.org/docs/rules/quotes)|single|enforce the consistent use of either backticks, double, or single quotes
[linebreak-style](https://eslint.org/docs/rules/linebreak-style)|unix|enforce consistent linebreak style
[one-var-declaration-per-line](https://eslint.org/docs/rules/one-var-declaration-per-line)||require or disallow newlines around variable declarations
### Best Practices
Rule|Value|Description
----|----
[curly](https://eslint.org/docs/rules/curly)||enforce consistent brace style for all control statements
[dot-notation](https://eslint.org/docs/rules/dot-notation)||enforce dot notation whenever possible
[eqeqeq](https://eslint.org/docs/rules/eqeqeq)||require the use of `===` and `!==`
[no-eval](https://eslint.org/docs/rules/no-eval)||disallow the use of `eval()`
[no-implied-eval](https://eslint.org/docs/rules/no-implied-eval)||disallow the use of `eval()`-like methods
[no-multi-str](https://eslint.org/docs/rules/no-multi-str)||disallow multiline strings
[no-new-func](https://eslint.org/docs/rules/no-new-func)||disallow `new` operators with the `Function` object
[no-sequences](https://eslint.org/docs/rules/no-sequences)||disallow comma operators
[no-with](https://eslint.org/docs/rules/no-with)||disallow `with` statements
[vars-on-top](https://eslint.org/docs/rules/vars-on-top)||require `var` declarations be placed at the top of their containing scope
[wrap-iife](https://eslint.org/docs/rules/wrap-iife)|any|require parentheses around immediate `function` invocations
[guard-for-in](https://eslint.org/docs/rules/guard-for-in)||require `for-in` loops to include an `if` statement
[no-global-assign](https://eslint.org/docs/rules/no-global-assign)||disallow assignments to native objects or read-only global variables
[no-extend-native](https://eslint.org/docs/rules/no-extend-native)||disallow extending native types
[block-scoped-var](https://eslint.org/docs/rules/block-scoped-var)||enforce the use of variables within the scope they are defined
[no-iterator](https://eslint.org/docs/rules/no-iterator)||disallow the use of the `__iterator__` property
[no-caller](https://eslint.org/docs/rules/no-caller)||disallow the use of `arguments.caller` or `arguments.callee`
[no-new](https://eslint.org/docs/rules/no-new)||disallow `new` operators outside of assignments or comparisons
[no-implicit-globals](https://eslint.org/docs/rules/no-implicit-globals)||disallow variable and `function` declarations in the global scope
[no-loop-func](https://eslint.org/docs/rules/no-loop-func)||disallow `function` declarations and expressions inside loop statements
[require-await](https://eslint.org/docs/rules/require-await)||disallow async functions which have no `await` expression
### Possible Errors
Rule|Value|Description
----|----
[no-empty](https://eslint.org/docs/rules/no-empty)|[object Object]|disallow empty block statements
[no-irregular-whitespace](https://eslint.org/docs/rules/no-irregular-whitespace)||disallow irregular whitespace outside of strings and comments
[valid-typeof](https://eslint.org/docs/rules/valid-typeof)||enforce comparing `typeof` expressions against valid strings
### Variables
Rule|Value|Description
----|----
[no-undef](https://eslint.org/docs/rules/no-undef)||disallow the use of undeclared variables unless mentioned in `/*global */` comments
[no-use-before-define](https://eslint.org/docs/rules/no-use-before-define)|[object Object]|disallow the use of variables before they are defined
[no-unused-vars](https://eslint.org/docs/rules/no-unused-vars)||disallow unused variables
### Strict Mode
Rule|Value|Description
----|----
[strict](https://eslint.org/docs/rules/strict)||require or disallow strict mode directives
### ECMAScript 6
Rule|Value|Description
----|----
[prefer-const](https://eslint.org/docs/rules/prefer-const)||require `const` declarations for variables that are never reassigned after declared