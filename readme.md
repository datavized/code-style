# Datavized Code Style

Our code style is based on Crockford's, with a few modifications.

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
----|----|----
[array-bracket-spacing](https://eslint.org/docs/rules/array-bracket-spacing)||enforce consistent spacing inside array brackets
[brace-style](https://eslint.org/docs/rules/brace-style)||enforce consistent brace style for blocks
[camelcase](https://eslint.org/docs/rules/camelcase)||enforce camelcase naming convention
[comma-dangle](https://eslint.org/docs/rules/comma-dangle)||require or disallow trailing commas
[comma-spacing](https://eslint.org/docs/rules/comma-spacing)||enforce consistent spacing before and after commas
[comma-style](https://eslint.org/docs/rules/comma-style)||enforce consistent comma style
[indent](https://eslint.org/docs/rules/indent)|tab|enforce consistent indentation
[key-spacing](https://eslint.org/docs/rules/key-spacing)||enforce consistent spacing between keys and values in object literal properties
[keyword-spacing](https://eslint.org/docs/rules/keyword-spacing)||enforce consistent spacing before and after keywords
[linebreak-style](https://eslint.org/docs/rules/linebreak-style)|unix|enforce consistent linebreak style
[max-params](https://eslint.org/docs/rules/max-params)|5|enforce a maximum number of parameters in function definitions
[new-cap](https://eslint.org/docs/rules/new-cap)||require constructor names to begin with a capital letter
[no-array-constructor](https://eslint.org/docs/rules/no-array-constructor)||disallow `Array` constructors
[no-bitwise](https://eslint.org/docs/rules/no-bitwise)||disallow bitwise operators
[no-continue](https://eslint.org/docs/rules/no-continue)||disallow `continue` statements
[no-mixed-spaces-and-tabs](https://eslint.org/docs/rules/no-mixed-spaces-and-tabs)||disallow mixed spaces and tabs for indentation
[no-trailing-spaces](https://eslint.org/docs/rules/no-trailing-spaces)||disallow trailing whitespace at the end of lines
[no-underscore-dangle](https://eslint.org/docs/rules/no-underscore-dangle)||disallow dangling underscores in identifiers
[one-var](https://eslint.org/docs/rules/one-var)|never|enforce variables to be declared either together or separately in functions
[one-var-declaration-per-line](https://eslint.org/docs/rules/one-var-declaration-per-line)||require or disallow newlines around variable declarations
[quote-props](https://eslint.org/docs/rules/quote-props)|as-needed|require quotes around object literal property names
[quotes](https://eslint.org/docs/rules/quotes)|single|enforce the consistent use of either backticks, double, or single quotes
[semi](https://eslint.org/docs/rules/semi)||require or disallow semicolons instead of ASI
[semi-spacing](https://eslint.org/docs/rules/semi-spacing)||enforce consistent spacing before and after semicolons
[space-before-blocks](https://eslint.org/docs/rules/space-before-blocks)||enforce consistent spacing before blocks
[space-before-function-paren](https://eslint.org/docs/rules/space-before-function-paren)||enforce consistent spacing before `function` definition opening parenthesis
[space-in-parens](https://eslint.org/docs/rules/space-in-parens)||enforce consistent spacing inside parentheses
[space-infix-ops](https://eslint.org/docs/rules/space-infix-ops)||require spacing around infix operators
[space-unary-ops](https://eslint.org/docs/rules/space-unary-ops)||enforce consistent spacing before or after unary operators
### Best Practices
Rule|Value|Description
----|----|----
[babel/no-invalid-this](https://eslint.org/docs/rules/babel/no-invalid-this)||disallow `this` keywords outside of classes or class-like objects
[block-scoped-var](https://eslint.org/docs/rules/block-scoped-var)||enforce the use of variables within the scope they are defined
[consistent-return](https://eslint.org/docs/rules/consistent-return)||require `return` statements to either always or never specify values
[curly](https://eslint.org/docs/rules/curly)||enforce consistent brace style for all control statements
[dot-notation](https://eslint.org/docs/rules/dot-notation)||enforce dot notation whenever possible
[eqeqeq](https://eslint.org/docs/rules/eqeqeq)||require the use of `===` and `!==`
[guard-for-in](https://eslint.org/docs/rules/guard-for-in)||require `for-in` loops to include an `if` statement
[no-caller](https://eslint.org/docs/rules/no-caller)||disallow the use of `arguments.caller` or `arguments.callee`
[no-case-declarations](https://eslint.org/docs/rules/no-case-declarations)||disallow lexical declarations in case clauses
[no-empty-pattern](https://eslint.org/docs/rules/no-empty-pattern)||disallow empty destructuring patterns
[no-eval](https://eslint.org/docs/rules/no-eval)||disallow the use of `eval()`
[no-extend-native](https://eslint.org/docs/rules/no-extend-native)||disallow extending native types
[no-fallthrough](https://eslint.org/docs/rules/no-fallthrough)||disallow fallthrough of `case` statements
[no-global-assign](https://eslint.org/docs/rules/no-global-assign)||disallow assignments to native objects or read-only global variables
[no-implicit-globals](https://eslint.org/docs/rules/no-implicit-globals)||disallow declarations in the global scope
[no-implied-eval](https://eslint.org/docs/rules/no-implied-eval)||disallow the use of `eval()`-like methods
[no-iterator](https://eslint.org/docs/rules/no-iterator)||disallow the use of the `__iterator__` property
[no-loop-func](https://eslint.org/docs/rules/no-loop-func)||disallow function declarations that contain unsafe references inside loop statements
[no-multi-str](https://eslint.org/docs/rules/no-multi-str)||disallow multiline strings
[no-new](https://eslint.org/docs/rules/no-new)||disallow `new` operators outside of assignments or comparisons
[no-new-func](https://eslint.org/docs/rules/no-new-func)||disallow `new` operators with the `Function` object
[no-octal](https://eslint.org/docs/rules/no-octal)||disallow octal literals
[no-redeclare](https://eslint.org/docs/rules/no-redeclare)||disallow variable redeclaration
[no-self-assign](https://eslint.org/docs/rules/no-self-assign)||disallow assignments where both sides are exactly the same
[no-sequences](https://eslint.org/docs/rules/no-sequences)||disallow comma operators
[no-unused-labels](https://eslint.org/docs/rules/no-unused-labels)||disallow unused labels
[no-useless-catch](https://eslint.org/docs/rules/no-useless-catch)||disallow unnecessary `catch` clauses
[no-useless-escape](https://eslint.org/docs/rules/no-useless-escape)||disallow unnecessary escape characters
[no-with](https://eslint.org/docs/rules/no-with)||disallow `with` statements
[radix](https://eslint.org/docs/rules/radix)||enforce the consistent use of the radix argument when using `parseInt()`
[require-await](https://eslint.org/docs/rules/require-await)||disallow async functions which have no `await` expression
[vars-on-top](https://eslint.org/docs/rules/vars-on-top)||require `var` declarations be placed at the top of their containing scope
[wrap-iife](https://eslint.org/docs/rules/wrap-iife)|any|require parentheses around immediate `function` invocations
### ECMAScript 6
Rule|Value|Description
----|----|----
[constructor-super](https://eslint.org/docs/rules/constructor-super)||require `super()` calls in constructors
[no-class-assign](https://eslint.org/docs/rules/no-class-assign)||disallow reassigning class members
[no-const-assign](https://eslint.org/docs/rules/no-const-assign)||disallow reassigning `const` variables
[no-dupe-class-members](https://eslint.org/docs/rules/no-dupe-class-members)||disallow duplicate class members
[no-new-symbol](https://eslint.org/docs/rules/no-new-symbol)||disallow `new` operators with the `Symbol` object
[no-this-before-super](https://eslint.org/docs/rules/no-this-before-super)||disallow `this`/`super` before calling `super()` in constructors
[no-useless-computed-key](https://eslint.org/docs/rules/no-useless-computed-key)||disallow unnecessary computed property keys in objects and classes
[no-var](https://eslint.org/docs/rules/no-var)||require `let` or `const` instead of `var`
[prefer-const](https://eslint.org/docs/rules/prefer-const)||require `const` declarations for variables that are never reassigned after declared
[require-yield](https://eslint.org/docs/rules/require-yield)||require generator functions to contain `yield`
### Possible Errors
Rule|Value|Description
----|----|----
[for-direction](https://eslint.org/docs/rules/for-direction)||enforce "for" loop update clause moving the counter in the right direction.
[getter-return](https://eslint.org/docs/rules/getter-return)||enforce `return` statements in getters
[no-async-promise-executor](https://eslint.org/docs/rules/no-async-promise-executor)||disallow using an async function as a Promise executor
[no-compare-neg-zero](https://eslint.org/docs/rules/no-compare-neg-zero)||disallow comparing against -0
[no-cond-assign](https://eslint.org/docs/rules/no-cond-assign)||disallow assignment operators in conditional expressions
[no-constant-condition](https://eslint.org/docs/rules/no-constant-condition)||disallow constant expressions in conditions
[no-control-regex](https://eslint.org/docs/rules/no-control-regex)||disallow control characters in regular expressions
[no-debugger](https://eslint.org/docs/rules/no-debugger)||disallow the use of `debugger`
[no-dupe-args](https://eslint.org/docs/rules/no-dupe-args)||disallow duplicate arguments in `function` definitions
[no-dupe-else-if](https://eslint.org/docs/rules/no-dupe-else-if)||disallow duplicate conditions in if-else-if chains
[no-dupe-keys](https://eslint.org/docs/rules/no-dupe-keys)||disallow duplicate keys in object literals
[no-duplicate-case](https://eslint.org/docs/rules/no-duplicate-case)||disallow duplicate case labels
[no-empty](https://eslint.org/docs/rules/no-empty)||disallow empty block statements
[no-empty-character-class](https://eslint.org/docs/rules/no-empty-character-class)||disallow empty character classes in regular expressions
[no-ex-assign](https://eslint.org/docs/rules/no-ex-assign)||disallow reassigning exceptions in `catch` clauses
[no-extra-boolean-cast](https://eslint.org/docs/rules/no-extra-boolean-cast)||disallow unnecessary boolean casts
[no-extra-parens](https://eslint.org/docs/rules/no-extra-parens)||disallow unnecessary parentheses
[no-extra-semi](https://eslint.org/docs/rules/no-extra-semi)||disallow unnecessary semicolons
[no-func-assign](https://eslint.org/docs/rules/no-func-assign)||disallow reassigning `function` declarations
[no-import-assign](https://eslint.org/docs/rules/no-import-assign)||disallow assigning to imported bindings
[no-inner-declarations](https://eslint.org/docs/rules/no-inner-declarations)||disallow variable or `function` declarations in nested blocks
[no-invalid-regexp](https://eslint.org/docs/rules/no-invalid-regexp)||disallow invalid regular expression strings in `RegExp` constructors
[no-irregular-whitespace](https://eslint.org/docs/rules/no-irregular-whitespace)||disallow irregular whitespace
[no-misleading-character-class](https://eslint.org/docs/rules/no-misleading-character-class)||disallow characters which are made with multiple code points in character class syntax
[no-obj-calls](https://eslint.org/docs/rules/no-obj-calls)||disallow calling global object properties as functions
[no-prototype-builtins](https://eslint.org/docs/rules/no-prototype-builtins)||disallow calling some `Object.prototype` methods directly on objects
[no-regex-spaces](https://eslint.org/docs/rules/no-regex-spaces)||disallow multiple spaces in regular expressions
[no-setter-return](https://eslint.org/docs/rules/no-setter-return)||disallow returning values from setters
[no-sparse-arrays](https://eslint.org/docs/rules/no-sparse-arrays)||disallow sparse arrays
[no-unexpected-multiline](https://eslint.org/docs/rules/no-unexpected-multiline)||disallow confusing multiline expressions
[no-unreachable](https://eslint.org/docs/rules/no-unreachable)||disallow unreachable code after `return`, `throw`, `continue`, and `break` statements
[no-unsafe-finally](https://eslint.org/docs/rules/no-unsafe-finally)||disallow control flow statements in `finally` blocks
[no-unsafe-negation](https://eslint.org/docs/rules/no-unsafe-negation)||disallow negating the left operand of relational operators
[require-atomic-updates](https://eslint.org/docs/rules/require-atomic-updates)||disallow assignments that can lead to race conditions due to usage of `await` or `yield`
[use-isnan](https://eslint.org/docs/rules/use-isnan)||require calls to `isNaN()` when checking for `NaN`
[valid-typeof](https://eslint.org/docs/rules/valid-typeof)||enforce comparing `typeof` expressions against valid strings
### Variables
Rule|Value|Description
----|----|----
[no-delete-var](https://eslint.org/docs/rules/no-delete-var)||disallow deleting variables
[no-restricted-globals](https://eslint.org/docs/rules/no-restricted-globals)|event|disallow specified global variables
[no-shadow-restricted-names](https://eslint.org/docs/rules/no-shadow-restricted-names)||disallow identifiers from shadowing restricted names
[no-undef](https://eslint.org/docs/rules/no-undef)||disallow the use of undeclared variables unless mentioned in `/*global */` comments
[no-unused-vars](https://eslint.org/docs/rules/no-unused-vars)||disallow unused variables
[no-use-before-define](https://eslint.org/docs/rules/no-use-before-define)||disallow the use of variables before they are defined
### Strict Mode
Rule|Value|Description
----|----|----
[strict](https://eslint.org/docs/rules/strict)||require or disallow strict mode directives