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
