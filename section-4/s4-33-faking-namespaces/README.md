# 33. Faking namespaces

A **namespace** is a container for variables and functions. Typically to keep variables and functions with the same name separate. There's a problem tho, javascript doesn't have namespaces. Although we can fake them. Let's see how.

```js
var greet = "Hello!";
var greet = "Hola!";

console.log(greet);
```

This will return `Hola!`. Let's imagine that these 2 vars were created in 2 different js files. This would be a problem cuz both are setting their value in the global object and both are overritting each other. If we had a namespaces we'd have a container for the English readers and a container for the Spanish readers.

In order to fake a namespace, we can create an object that will be the container for our properties and methods. We'd do this:

```js
var english = {};
var spanish = {};

english.greet = "Hello!";
spanish.greet = "Hola!";
```

This way both variables don't override each other. **This is seen a lot inside of frameworks and libraries!**. That way when you're writing a function and someone else is, you don't have any collisions.

Watch out when using the DOT (.) operator though. Example:

```js
var english = {};
english.greetings.greet = "Hello!";
```

This would return a `Uncaught TypeError: Cannot set properties of undefined (setting 'greet')` because `english.greetings.greet = "Hello!"` we have this line of code:

1. The DOT operator is left-to-right. so `english.greetings` runs first. We didn't define a value for greetings before, so this would return `undefined`
2. Then we'd have undefined.greet, which would return the error from above `Uncaught TypeError: Cannot set properties of undefined (setting 'greet')`

First we'd have to do this:

```js
english.greetings = {};
english.greetings.greet = "Hello!";
```

Although the best way would be using object literals like this:

```js
var english = {
    greetings: {
        basic: "hello!",
    },
};
```

**TLDR**: If we crack open the source code of frameworks and libraries we'd see this **namespace faking** a lot.
