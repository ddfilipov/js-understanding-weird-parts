# 31. Objects and the Dot

Objects are collections of name-value pairs. And those values can be other collections of name-value pairs.
They can have properties and methods.

1. Primitive properties. Like boolean or string
2. Object properties. As we mentioned they can have other objects inside.
3. Functions, called *methods*.

Objects are sitting in memory, which has references to other things sitting in memeory that are connected to it.

## Accessing an object properties
Let's first declare an object the non-so-good way. There are better ways to do this, but this is the one we're using for now:

```js
var person = new Object();

person["firstname"] = "Tony"; // this has created a spot in memory and the object will get a reference to the adress of that location in memory.
```


**TLDR**:
