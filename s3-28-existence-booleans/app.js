var a = 0;

// goes to internet and looks for a value and if it finds it it sets a to that value. This could be your standard API call

if (a || a === 0) {
    console.log("a is not false (or does not lack existence, aka it exists)");
}

// if a has not been defined (or if the API returned an undefined, null or empty string), we will not be getting inside of the if statement
