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

**TLDR**:
