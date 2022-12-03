# 28. Existence and Booleans

Let's see how dynamic typing and coercion can be useful. For this we'll use the built-in js function Boolean(). You pass an argument to the function and it returns either true of false. This function shouldn't be used, we're using it here for explanation purposes. Example:

```js
Boolean(undefined); // returns false
Boolean(null); // returns false
Boolean(""); // returns false
```

All these values from above mean _lack of existence_, that's why they return false. We can use this to our advantage.

Let's see a practical example:

```js
var a;

// goes to internet and looks for a value and if it finds it it sets a to that value. This could be your standard API call
if (a) {
    console.log("a is not false (or does not lack existence, aka it exists)");
}

// if a has not been defined (or if the API returned an undefined, null or empty string), we will not be getting inside of the if statement
```

This example is useful for when we want to see if a variable is empty of not. But there's one caveat: `Boolean(0)` returns `false`. And we might not want to interpret a `0` like an empty value. This is what we'd have to do to fix this.

```js
var a = 0;

if (a || a === 0) {
    console.log("a is not false (or does not lack existence, aka it exists)");
}
```

In this case we'd get inside of the if statement. Let's see what's happening under the hood. We have the following if: `if (a || a === 0)`

1. first we'd have to use the [MDN operator precedence table](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence) and there we'd see that the Logical OR (||) has a precedence or `3`, whereas the Strict Equality has a precedence of `8`
2. Then the first thing the js engine would check for is `a === 0` and we know that that's true.
3. So we'd be left with `if (a || true)`. `a` is false, because its value is `0` and `0` coerces to `false`
4. So what we actually have is `if (false || true)`, in other words, if any of those two statements is true, we'd get inside the `if`. And one actually is true, so that's why we're getting inside.

**TLDR**: Using coercion to check for existence can be useful. It's used in many frameworks. And it's a good thing to know how it works to understand how those frameworks work.
