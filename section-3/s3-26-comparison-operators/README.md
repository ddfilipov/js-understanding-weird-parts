# 26. Comparison Operators

Let's see a code that looks pretty obvious:
`1 < 2 < 3`
As a human we would expect this to return `true`. Because `1` is less than `2` and `2` is less than `3`. So if we run this code, it would actually return `true` but not because what I just said. Let's take a look into the operator precedence (remember lesson s3-23?) in [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence). We see that Less than (<) reads left-to-right, so let's see what's happening:

1. First we check for the operator's precedence. In this case we have two `<`, so next step would be checking for associativity.
2. The `<` operator's associativity is left-to-right, so we'd start doing `1 < 2`. this would return a true, cuz 1 is less than 2.
3. What we have left now is `true < 3`. And javascript would coerce `true` to 1. (and it also coerces `false` to `0`).
4. So we would have `1 < 3`. This is true cuz 1 is less than 3. That's why we got a `true` in the end.

Let's see another line of code that's kinda similar:
`3 < 2 < 1`
This line **ALSO RETURNS TRUE**, even though a human would say that it should return false cuz 3 is not less than 2 and 2 is not less than 1, remember that js is synchronous and executes one piece of code at a time. Let's see what's happening here:

1. First we check for the operator's precedence. In this case we have two `<`, so next step would be checking for associativity.
2. The `<` operator's associativity is left-to-right, so we'd start doing `3 < 2`. this would return a `false`, cuz `3` is not less than `2`.
3. So we'd have `false < 1 `. And as I mentioned in the previous example, `false` coerces to `0`. So actually we have `0 < 1`.
4. 0 is less than 1, that's why the `3 < 2 < 1` code returns `true` instead of `false`.

## Equality (`==` and `===`)

What if we wanted to check for equality without coercion? Let's say we have `"3" == 3` this would return true, because the number `3` would be coerced to the string `"3"` (that's the js behavior) and we know that `"3" == "3"`. What if instead we did `"3" === 3`, the triple equal means **Strict Equality**, and in this case it would ommit coercion, returning a `false`.

## Special (weird cases)

What if we had `null == 0`, `null` coerces to `0` when we're using the `<` operator, like in `null < 1`. This would return `true` because `0` is less than `1`. But in the case of `null == 0`, with the Equality operator, this would return a false, meaning `null` did not coerce into `0` this time.

And what if we had `"" == 0` -> returns `true`. But `"" == false` also returns `true`.

## Conclusion

When comparing Equality we should 99% of the time for Strict Equality (`===`) so we don't have to deal with js coercion when comparing values.

There's a [whole article in MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness) about Equality comparisons and sameness that's very useful.

**TLDR**: Coercion exists in js and it can be useful but also dangerous. When _comparing_ try to use Strict Equality (`===`) almost always so you don't have to deal with coercion.
