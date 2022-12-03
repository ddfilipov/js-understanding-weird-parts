function a() {
    b(); // 2 - we invoke b()
    var c; // 4 - var c is created
}

function b() {
    var d; // 3 - var d is created
}

a(); // 1 - we invoke a()
var d; // 5 var d is created at the end because js is synchronous
