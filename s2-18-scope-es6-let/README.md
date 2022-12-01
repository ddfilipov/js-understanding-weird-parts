# 18. Scope, ES6, and let

**Scope** is where a variable is available in your code.

ECMAScript2015 introduced a new word: let. Let allows the js engine to use block scoping. Another thing that the let adds is that you can't access a variable before the line of code is run in the execution phase. You'd get an error otherwise. Example:

```js
console.log(a); // Uncaught ReferenceError: Cannot access 'a' before initialization
let a = 1;
```

**TLDR**: if a var does not exist inside of an Execution Context it will use its referens to its outer environment to look for the value of that var. If it can't find it in that one it will look in the even yet outer environment. If there's none, the var will return an error.
