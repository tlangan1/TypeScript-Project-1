interface CarLike {
  make: string;
  model: string;
  year: number;
}

let maybeCar1: unknown;

// the guard
function isCarLike(valueToTest: any): valueToTest is CarLike {
  return (
    valueToTest &&
    typeof valueToTest === "object" &&
    "make" in valueToTest &&
    typeof valueToTest["make"] === "string" &&
    "model" in valueToTest &&
    typeof valueToTest["model"] === "string" &&
    "year" in valueToTest &&
    typeof valueToTest["year"] === "number"
  );
}

// using the guard
if (isCarLike(maybeCar1)) {
  maybeCar1;
  // ^?
}
