# 17. The Scope Chain

Let's see what will happen in this code:

```js
function b() {
    console.log(myVar);
}

function a() {
    var myVar = 2;
    b();
}

var myVar = 1;
a();
```

The value of myVar in `b()` is going to be `1`. `1` Is the value that was sitting at the global level.

When we request a variable, like we're doing inside b(), js does more than just look in the variable environment of the currently executing context, which is `b()` in this case. Every execution context has a referente to its outer environment. This outer environment for b() would be the Global Execution Context. Let's take a look at the execution stack to talk about the reference to the outer environment:

2 - Execution Context of b() -> `myVar` would be `1`
1 - Execution Context of a() -> `myVar` would be `2`
0 - Global Execution Context -> `myVar` would be `1`

b() and also a() reference to the Outer Environment which in this case is the Global Execution Context

**TLDR**: 
