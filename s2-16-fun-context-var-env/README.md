# 16. Functions, Context, and Variable Environments

Variable environment talks about where the variables live and how they relate to each other in memory. Lets look at some code.

```js
function b() {
    var myVar;
}

function a() {
    var myVar = 2;
    b();
}

var myVar = 1;
a();
```

Lets see the execution stack of this code (notice how the context on the bottom is the first one that is created and the one on the top is the last one)

2 - Execution Context of `b()` -> `myVar` would be `undefined`

1 - Execution Context of `a()` -> `myVar` would be `2`

0 - Global Execution Context -> the Variable Enviornment of the GCE is a global object (or a window in a browser). `myVar` would be `1`

This has to do with the **scope**, aka where are we able to see the variable.

**TLDR**: same variable names being created in different functions refer to different spaces in memory. myVar in fun a() would be different from myVar in fun b()
