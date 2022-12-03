# 29. Default Values

**KINDA DEPRECATED TOPIC**. Default values got added in ES6 and Anthony Licea's course doesn't cover them (yet). Before ES6, there was another way of using these "default values".

Example with ES6 default value

```js
function greet(name = "<Your name here>") {
    console.log("Hello " + name); // would return "Hello <Your name here>"
}

greet(); // we're not passing any params to the function
```

Example without ES6 default value

```js
function greet(name) {
    name = name || "<Your name here>"; // this is how you used to "default value" back in the day
    console.log("Hello " + name); // would return "Hello <Your name here>"
}

greet(); // we're not passing any params to the function
```

Notice how that OR (||) operator returned `<Your name here>` instead of a `boolean` value. And why?

1. we're not passing a param to `greet()` so the value of `name` inside the function will be `undefined`. undefined coerces to false when using the OR (||) operator
2. so when we're setting `name = name || "<Your name here>"` we have: `name = false || "<Your name here>"`. And that second string coerced equals to `true`.
3. The OR (||) operator when passed two value that coerced to true or false will return the first one that coerces to true. It won't return a `true` or `false` necessarily, in our case it returned the string `"<Your name here>"`, cuz a string coerces to true is we use the buil-in function `Boolean("hello")`.

Also, if we checked [the MDN docs about operator precedence](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence) we'd see that the OR (||) operator reads left to right

**TLDR**: Coercion can be useful when dealing with default values. Even though in ES6 we already have an easier way of dealing with default values.
