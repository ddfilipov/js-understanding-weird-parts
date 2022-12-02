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

Full table of the operator precedence and associativity on the MDN web docs [MDN web docs](https://www.markdownguide.org/cheat-sheet/) (scroll down for the table!)

## Operator Associativity

What order an operator function gets called in: left-toright (left associativity) or right-to-left (right associativity) when functions have the _same_ precedence. So if we have a line of code with

Associativity example:

```js
var a = 2;
var b = 3;
var c = 4;

a = b = c;

console.log(a); // returns 4
console.log(b); // returns 4
console.log(c); // returns 4
```

If we check the MDN table of associativity we'd see that the `=` operator has an associativity of right-to-left. So this is what js would be doing under the hood:

1. The `=` operator has a right-to-left associativity so js would do `b = c` first. so this returns a value, cuz this is a function, meaning `b` would take `c`'s value, but also `b = c` would return `4`. `b == 4`
2. We're going right-to-left so there's only one `=` operator left, which is `a = b`. Remember `b = c` now, so what we would have left is `a = 4` . `a == 4`
3. That's it, this is how every variable would have the value of `4`.

## Grouping
Not super important but the operator that has the highest precedence is the `()` which is grouping. Like in math, if u put parenthesis between something, that will go first.

**TLDR**: **Precedence** says which operators run first and **associativity** does the same in case the 2 or more operators have the same precedence.
