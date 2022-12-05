var person = new Object();

person["firstname"] = "Tony";
person["lasttname"] = "Alicea";

var firstNameProperty = "firstname";

console.log(person[firstNameProperty]);

// another way of adding an OBJECT property to an object.
person.address = new Object();
person.address.street = "111 Main St."; // remember these DOTs (.) are operators. So how do we know which one goes first? By using the MDN precedence and associativity table
person.address.city = "New York";
person.address.state = "NY";

console.log(person.address.street);
// The objects themselves, and their properties and their methods are all just sitting in memory. The dots and the brackets are operators functions to access the different locations
