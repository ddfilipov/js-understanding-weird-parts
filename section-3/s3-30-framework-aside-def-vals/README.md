# 30. Framework Aside: Default Values

Let's see how default values would apply to frameworks/libraries. Given this html

```html
<!-- index.html-->
<html>
    <head> </head>
    <body>
        <script src="lib1.js"></script>
        <script src="lib2.js"></script>
        <script src="app.js"></script>
    </body>
</html>
```

And the js files looking like this:

```js
// lib1.js
var libraryName = "Lib 1";

// lib2.js
var libraryName = "Lib 2";

// app.js
console.log(libraryName);
```

First, these files would not create their own Executing Context, but they're all using the Global Execution Context. What would our `console.log(libraryName)` return? Well, as we can see in the `index.html`, the order of the files is:

1. `lib1.js` gets executed and creates `libraryName` and sets it value to `Lib 1`
2. After that `lib2.js` gets executed and creates libraryName and sets it value to `Lib 2`
3. When the `console.log()` inside `app.js` is executed the value of `libraryName` is `Lib 2`.

So all of this is treated as global variables that are inside the Global Execution Context and thus attatched to the `window` object.

If we want this to not affect us, this is what we'd have to do:

```js
// lib1.js
var libraryName = "Lib 1";

// lib2.js
window.libraryName = window.libraryName || "Lib 2"; // this means if there's already a libraryName in the window global object we don'd do anything. But if there isn't we assign libraryName to "Lib 2".

// app.js
console.log(libraryName);
```

So this is how we'd have to use in our framework or library. This is pretty common to see in existant frameworks and libraries.

**TLDR**: We can use default values to avoid problems when making our own libraries or frameworks.
