# 25. Conceptual Aside: Coercion

Coercion is convertinga value from one type to another. It would, for instance convert a number into a string, this is what js does because it uses a dynamic typing.

The plus `+` operator adds two numbers such as `1 + 2` would return `3`.

But what if we wanted to add a string to a number? `1 + "2"`, this would return `12`, this happens because of coercion. The first value, which is the number `1`, gets converted into a string, and when u add two strings they concat.

This has a lot to do with js being dynamic. Another language would return an error when doing `1+"2"`

**TLDR**: js does its best to understand what smth should be because it's dinamically typed and that coercion is a fundamental part of that.
