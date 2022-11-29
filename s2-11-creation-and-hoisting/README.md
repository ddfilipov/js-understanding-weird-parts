# The Execution Context - Creation and Hoisting

Javascript has access to variables and functions that are written after the code's execution Let's see an example

```js
b();
console.log(a);

function b() {
    console.log("Called b!");
}

var a = "Hello World!";
```

This would return the following code on the console when executing:

```
Called b!
undefined
```

Notice how the `function b()` got called with no problems but the `a` variable returns an `undefined`. And what about if the variable was not declared?

```js
b();
console.log(a);

function b() {
    console.log("Called b!");
}

// var a = "Hello World!";
```

Console output:

```
Called b!
Uncaught ReferenceError: a is not defined
```
