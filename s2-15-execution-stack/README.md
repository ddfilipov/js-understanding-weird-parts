# 15. Function Invocation and the Execution Stack

Invocation means calling a function. When we invoke a function we're running it. And we do that by using parenthesis().

Quick example:

```js
function b() {}

function a() {
    b(); // function a() invokes function b()
}

a(); // we invoke function a() which will then invoke function b()
```

**TLDR**: In the execution phase your code is run line by line.
