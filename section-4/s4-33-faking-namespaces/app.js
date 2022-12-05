var greet = "Hello!";
var greet = "Hola!";

console.log(greet);

var english = {
    greetings: {
        basic: "hello!",
    },
};
var spanish = {};

english.greet = "Hello!";
spanish.greet = "Hola!";

english.greetings.greet = "Hello!";

console.log(english.greetings.basic);
console.log(english.greetings.greet);
