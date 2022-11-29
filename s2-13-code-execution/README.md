# 13. The Execution Context: Code Execution

As we said in s2-11-creation-and-hoisting there are 2 phases when it came to the Execution Context. The first phase was the Creation Phase. The second one is the Execution Phase. This phase runs the code you've written line by line on the computer, interpreting it, compiling it and executing it.

```js
function b() {
    console.log("Called b!");
}

b();

console.log(a);

var a = "Hello World!";

console.log(a);
```

The `b` variable case can be confusing because isn't `undefined` and `not defined` the same? No.
`undefined` is a special value in js, it's not just a word. And the `b` code would output an error because there's no space in memory for b.

WARNING: Never to this

```js
a = undefined;
```

Never set a variable equal to `undefined`. If you don't assign undefined to a variable, that'll help you debug the code. If you make the habit of setting the variable's value to undefined it's hard to tell if its undefined because you set it or because the js engine set it.

**TLDR**: In the execution phase your code is run line by line.
