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

## Creation stage and Hoisting

On this stage, the javascript parser runs my code and it translates it to the hardware. It finds where variables and functions are declared and then sets space in memory for those two. Before my code is executed, the js engine has created this space for vars and functions. These two are accessible anywhere from the code. `This is what hoisting is`. This is why we can call functions and variables before they are created.

We've seen that when a variable is given a space in memory, its value is `undefined`. The js engine doesn't know what the variable's value it's going to be until it executes that line of code. However the function in its entirety is palced into memory space, meaning the function, its name and its code is executed.

**TLDR**: Hoisting (or creation phase) is when Variables are setup (and set equal to `undefined`) and Functions are setup too.
