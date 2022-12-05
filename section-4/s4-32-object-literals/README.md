# 32. Objects and Object Literals

In js there are often different ways of doing something. Remember how we created an object like this in the previous lesson:

```js
var person = new Object();
```

There's a shorthand for this called an object literal and is just curly braces {}

```js
var person = {}; // this is not an operator! when the js engine sees this it assumes we're creating an object.
console.log(); // this would return an empty object
```

We can also initialize the object like this

```js
var person = { firstName: "Tony", lastName: "Alicea" };
console.log(); // this would return the objects with both properties
```

This object literal way of creating objects is much faster than the new Object() way. We can add objects to objects like this:

```js
var person = {
    firstName: "Tony",
    lastName: "Alicea",
    address: { street: "111 Main St.", city: "New York", state: "NY" },
};
```

## Objects and functions

Let's say we have a function that we wanna pass an object as a param:

```js
function greet(person) {
    console.log("Hi " + person.firstName); // this would show "Hi Tony"
}

var Tony = {
    firstName: "Tony",
    lastName: "Alicea",
    address: { street: "111 Main St.", city: "New York", state: "NY" },
};

greet(Tony);
```

We could also create an object on the fly, no need to create an object before hand and assign it to a variable:

```js
greet({
    firstName: "Mary",
    lastName: "Doe",
});
```

We could also add new properties to our object like:

```js
var Tony = {
    firstName: "Tony",
    lastName: "Alicea",
    address: { street: "111 Main St.", city: "New York", state: "NY" },
};

Tony.address2 = {
    street: "222 Second St.",
};

console.log(Tony.address2.street);
```

**TLDR**: Object literals are the way to go when creating objects.
