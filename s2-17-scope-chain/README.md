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

2 - Execution Context of `b()` -> `myVar` would be `1`
1 - Execution Context of `a()` -> `myVar` would be `2`
0 - Global Execution Context -> `myVar` would be `1`

`b()` and also `a()` reference to the Outer Environment which in this case is the Global Execution Context.

What's happening here is that when the code execution reaches the `b()` fun and tries to console.log() `myVar` it will look inside the Execution Context of `b()`. The var is not declared there, so then it's gonna use its reference to the Outer Environment, (in this case is the GEC as mentioned), and it will see that `myVar`'s value is `1` in that GEC.

And what would happen if we had this case?

```js
function a() {
    function b() {
        console.log(myVar); // myVar = 2
    }
    var myVar = 2;
    b();
}

var myVar = 1;
a();
```

In this case the value of myVar inside of b() would be 2. Because its immidiate outer environment is function a. And we gave myVar a value of 2 in this function.

Last example:

```js
function a() {
    function b() {
        console.log(myVar); // myVar = 1
    }
    console.log(myVar); // myVar = 1
    b();
}

var myVar = 1;
a();
console.log(myVar); // myVar = 1
```

Notice how there's only one assignation to myVar, and it's in the GEC. So when b() is invoked it will look for myVar inside of itself, it wont find it. Then it will look for myVar in a(), and it will not find it either. Then it will look for it on the outer block which is the GEC, and it will see that it's 1.

**TLDR**: if a var does not exist inside of an Execution Context it will use its referens to its outer environment to look for the value of that var. If it can't find it in that one it will look in the even yet outer environment. If there's none, the var will return an error.
