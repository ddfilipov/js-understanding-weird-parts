function greet(person) {
    console.log("Hi " + person.firstName);
    // console.log("Hi " + person.address2.street);
}

var Tony = {
    firstName: "Tony",
    lastName: "Alicea",
    address: { street: "111 Main St.", city: "New York", state: "NY" },
};

greet(Tony);
greet({
    firstName: "Mary",
    lastName: "Doe",
});

Tony.address2 = {
    street: "222 Second St.",
};

console.log(Tony.address2.street);
