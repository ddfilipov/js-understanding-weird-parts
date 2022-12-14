# 35. Functions are objects

## First class functions

In js (and otehr programming languages) everything u can do with other types (objects, booleans, strings) you can do with functions. You can assign variables to them, pass them around, you can create them on the fly.

A function is a special type of object. It has a `.name` and `.code` props. `code()` is invokable, you can call it and it will run your function and create its execution context.

We can add properties to functions:
```js
function greet() {
    console.log("hi");
}

greet.language = "english";

console.log(greet.language);
```

What happens on this code from above? When we call `greet()` that generates an execution context for the function.

**TLDR**: In JavaScript functions are objects.
