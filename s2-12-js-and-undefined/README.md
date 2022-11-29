# 12. Conceptual Aside: Javascript and 'undefined'

Let's focus on the concept of undefined
```js
var a;
console.log(a); //this would return an undefined
console.log(b); //this would return "Uncaught ReferenceError: b is not defined"

```

The ```b``` variable case can be confusing because isn't ```undefined``` and ```not defined``` the same? No.
```undefined``` is a special value in js, it's not just a word. And the ```b``` code would output an error because there's no space in memory for b.

WARNING: Never to this

```js
a = undefined;
```

Never set a variable equal to ```undefined```. If you don't assign undefined to a variable, that'll help you debug the code. If you make the habit of setting the variable's value to undefined it's hard to tell if its undefined because you set it or because the js engine set it.

**TLDR**: undefined is a special value which is also a special keyword in js. It's a value that variables receive during the Creation Phase of the Execution Context.
