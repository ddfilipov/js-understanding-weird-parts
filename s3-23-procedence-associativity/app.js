// operator precedence 
var a = 2;
var b = 3;
var c = 4;

console.log(a + b + c); // all of them have the same operator so the adding would do a + b = 5, then the result + c = 5 + 4 = 9
console.log(a * b + c); // like in math, we multiply first, then we add: a * b = 6, then 6 + 4 = 10
console.log(a + b * c); // same as above, only this time the first function to be executed would be b * c = 12, then 12 + 2 = 14

// operator associativity
var a = 1;
var b = 2;
var c = 3;

console.log(a > b > c); // all of them have the same operator so the adding would do a + b = 5, then the result + c = 5 + 4 = 9
console.log(a * b + c); // like in math, we multiply first, then we add: a * b = 6, then 6 + 4 = 10
console.log(a + b * c); // same as above, only this time the first function to be executed would be b * c = 12, then 12 + 2 = 14