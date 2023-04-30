interface CarLike {
  make: string;
  model: string;
  year: number;
}

let maybeCar2: unknown;

// the guard
function assertsIsCarLike(valueToTest: any): asserts valueToTest is CarLike {
  if (
    !(
      valueToTest &&
      typeof valueToTest === "object" &&
      "make" in valueToTest &&
      typeof valueToTest["make"] === "string" &&
      "model" in valueToTest &&
      typeof valueToTest["model"] === "string" &&
      "year" in valueToTest &&
      typeof valueToTest["year"] === "number"
    )
  )
    throw new Error(`Value does not appear to be a CarLike${valueToTest}`);
}

// using the guard
maybeCar2;
assertsIsCarLike(maybeCar2);
maybeCar2;
