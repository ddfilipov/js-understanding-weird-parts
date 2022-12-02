# 20. Conceptual Aside: Types and Javascript

How does JavaScript deal with types? It's called dynamic typing

## Dynamic typing
The enginde figures out what data a variable is holding while the code is running. So a signle variable can hold different types of values during execution. The user doesn't have to declare a type for a variable, that would be **Static Typing**, which is used in other programming language like Java.

Quick example of **Static Typing**:
```js
boolean isNew = "hello"; // Error!
```
vs **Dynamic Typing**

```js
var isNew = true; // no errors
isNew= "yep!"; // no errors
isNew= 1; // no errors
```

**TLDR**: Js deals with types while the code is running, it figures out what type a variable is on the fly. 