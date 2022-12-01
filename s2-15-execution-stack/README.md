# 15. Function Invocation and the Execution Stack

**Invocation** means calling a function. When we invoke a function we're running it. And we do that by using parenthesis().

Quick example:

```js
function b() {}

function a() {
    b(); // function a() invokes function b()
}

a(); // we invoke function a() which will then invoke function b()
```

Let's use the code from above as an example of what would happen when we run it.

1. A **Global Execution Context (GEC)** would be created
2. Inside of that GEC the variable `this` and the `window` object.
3. The functions `a()` and `b()` would be attatched to this GEC and a space in memory would be set for them in the Creation Phase (phase 1)
4. The code would be executed (even tho there's no code in these functions)

Let's see what will happen when we finally get to the execution step.

First of all there's an Execution stack, which would look something like this:

0-Global Execution Context

Then the program would get invoke function a() and that would create another Execution Context (with a create and execute phase too). Our stack would look like this:

1-Execution Context of a()
0-Global Execution Context

Notice how the Execution Context of a() is on top of the GCE because we're inside a now.

Once a() calls b(), a new Execution context will be created on top of the stack:

2-Execution Context of b()

1-Execution Context of a()

0-Global Execution Context

The order lexically of this code doesn't really matter. Example:

```js
function a() {
    b(); // 2 - we invoke b()
    var c; // 4 - var c is created
}

function b() {
    var d; // 3 - var d is created
}

a(); // 1 - we invoke a()
var d; // 5 var d is created at the end because js is synchronous
```

This would still generate the same execution stack as before:

2 - Execution Context of b()
1 - Execution Context of a()
0 - Global Execution Context

**TLDR**: Each function that's called creates an Execution Context which stack on the pile one on top of the other. Whichever Execution Context is on top is the one that's currently running.
