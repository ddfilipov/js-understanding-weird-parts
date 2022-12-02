# 23. Operator Precedence and Associativity

What are those?

## Operator Precedence

It indicates which operator function gets called first. Functions are called in order of precedence, the one with higher precedence wins. Let's see an example:

```js
var a = 2;
var b = 3;
var c = 4;

console.log(a + b + c); // all of them have the same operator so the adding would do a + b = 5, then the result + c = 5 + 4 = 9
console.log(a * b + c); // like in math, we multiply first, then we add: a * b = 6, then 6 + 4 = 10
console.log(a + b * c); // same as above, only this time the first function to be executed would be b * c = 12, then 12 + 2 = 14
```

Full table of the operator precedence and associativity on the MDN web docs [MDN web docs](https://www.markdownguide.org/cheat-sheet/) (scroll down!)

## Operator Associativity

What order an operator function gets called in: left-toright (left associativity) or right-to-left (right associativity) when functions have the _same_ precedence. So if we have a line of code with

Associativity example:

```js
var a = 3 + 4;
// the code from above would be like the one from below
function +(a, b){
    return // add the two numbers and return the result
}
```

**TLDR**: Operators are functions in Javascript.
