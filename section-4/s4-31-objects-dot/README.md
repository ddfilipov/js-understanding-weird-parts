# 31. Objects and the Dot

Objects are collections of name-value pairs. And those values can be other collections of name-value pairs.
They can have properties and methods.

1. Primitive properties. Like boolean or string
2. Object properties. As we mentioned they can have other objects inside.
3. Functions, called _methods_.

Objects are sitting in memory, which has references to other things sitting in memeory that are connected to it.

## Accessing an object properties

Let's first declare an object the non-so-good way. There are better ways to do this, but this is the one we're using for now:

```js
var person = new Object();

person["firstname"] = "Tony"; // this has created a spot in memory (for the firstname property) and the object will get a reference to the adress of that location in memory.
person["lastname"] = "Alicea";

var firstNameProperty = "firstname"; // we create a variable that we're gonna use to access the firstname property

console.log(person[firstNameProperty]); // this would return "Tony"
console.log(person.firstName); // better way of accessing the property. The DOT (.) operator is also an operator!

// another way of adding an OBJECT property to an object.
person.address = new Object();
person.address.street = "111 Main St."; // remember these DOTs (.) are operators. So how do we know which one goes first? By using the MDN precedence and associativity table
person.address.city = "New York";
person.address.state = "NY";

console.log(person.address.street);
// The objects themselves, and their properties and their methods are all just sitting in memory. The dots and the brackets are operators functions to access the different locations
```

**TLDR**: The preferred method of accessing object data is the DOT (.) operator and not the BRACKET ([]) one. Also the way we're creating objects on this lesson is not the preferred way either.
