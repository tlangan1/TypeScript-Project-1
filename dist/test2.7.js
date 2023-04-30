function A(x) {
    console.log(x.y);
}
function B(x) {
    console.log(x.y);
}
const m = {};
A(m); // OK
B(m); // Error
