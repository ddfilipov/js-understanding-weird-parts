# 19. What About Asynchronous Callbacks?

What is asynchronous? It means "more than one at a time". Code that's executing and starts off some other code that might start yet another code and those pieces of code are executing at the same time.

But Javascript is synchronous! it executes code one line at a time. Then how does js execute async code? Let's talk about the Javascript Engine

## The Javascript Engine
This engine doesn't exist by itself in a browser. There are other elements runnig code outside the js engine such as the Rendering Engine or elements of the browser that have to do with HTTP Requests. The js engine has hooks where it can talk to the Rendering Engine and change how the page looks like. Or the js engine can go out and request data.

But even tho those 3 things (the js engine. the rendering engine and an HTTP request) are runnign asynchronously. The js engine itself is synchronous. 

## The Event Queue

Remember we have the Execution stack that gets created when we run our code. First the GEC is created, then the other execution contexts are created. When this stack is emptied, there's something called the Event Queue. That queue has a stack of different instructions such as lets say a click Event. Once the Execution stack is emptied js will call to the click event and it will create an execution context for that event. Alongside that click event there could be more events that are run asynchronously (at the same time).

The browser asynchronously is putting things into the event queue, but the js code running is still running line by line. Lets see some code and see how this works.

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



**TLDR**: if a var does not exist inside of an Execution Context it will use its referens to its outer environment to look for the value of that var. If it can't find it in that one it will look in the even yet outer environment. If there's none, the var will return an error.
