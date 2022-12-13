# 34. JSON and Object Literals

JSON stands for Javascript Object Notation. It does look like Object notation cuz it looks alot alike it, but they're not the same.
A JSON would look like this:

```js
{
    "name": "Denis",
    "surname": "Filipov",
    "age": 29
}
```

Notice the double quotes ("") in the name attributes. Whereas an object literal would look like this:

```js
{
    name: "Denis",
    surname: "Filipov",
    age: 29
}
```

Js comes with a built-in functionality to treat JSONs. This first function, `JSON.stringify()` would convert the object in a json string

```js
var objectLiteral = {
    firstName: "Denis",
    isAProgrammer: true,
};
console.log(JSON.stringify(objectLiteral));
```

This second function, `JSON.parse()` would convert a string into a js object

```js
var jsonValue = JSON.parse('{"firstName": "Denis","isAProgrammer": true,}');
console.log(jsonValue);
```

**TLDR**: JSON would be an Object with stricter rules.
