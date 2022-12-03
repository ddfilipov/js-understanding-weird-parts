# 22. Conceptual Aside: Operators

An operator is a special **FUNCTION** (yes, a function) that is syntactically (written) differently than the usual `a()`. Generally operators take two params and return one result. Examples of operators: 
```
=, <, >, ==, +, - 
```

Practical example:

```js
var a = 3 + 4;
// the code from above would be like the one from below
function +(a, b){
    return // add the two numbers and return the result
}
```
So the `+` operator is a function itself. There's a prewritten code in those operator functions that do the thing they're supposed to do (+ adds, - substracts).

**TLDR**: Operators are functions in Javascript.
