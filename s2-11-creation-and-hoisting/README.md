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

This has to do with the Execution Context and how it is created. This Context has two stages: `creation` and `execution`.

##Creation stage
On this stage, the jacascript parser runs my code and it translates it to the hardware. It finds where variables and functions are declared and then sets space in memory for those two. Before my code is executed, the js engine has created this space for vars and functions. These two are accessible anywhere from the code. `This is what hoisting is`. This is why we can call functions and variables before they are created.

We've seen that when a variable is given a space in memory, its value is `undefined`.
