let maybeCar1;
// the guard
function isCarLike(valueToTest) {
    return (valueToTest &&
        typeof valueToTest === "object" &&
        "make" in valueToTest &&
        typeof valueToTest["make"] === "string" &&
        "model" in valueToTest &&
        typeof valueToTest["model"] === "string" &&
        "year" in valueToTest &&
        typeof valueToTest["year"] === "number");
}
// using the guard
if (isCarLike(maybeCar1)) {
    maybeCar1;
    // ^?
}
