import { fruits } from "./test14_data";
import {
  mapDict,
  filterDict,
  reduceDict,
  assertEquals,
  assertOk,
} from "./test14_library";

// Note that Mike has a test suite that I can leverage to test my solution
var fruitsFiltered = filterDict(fruits, (item) => item.mass > 100);

console.log("Filtered:", fruitsFiltered);

var fruitsMapped = mapDict(fruits, (input, name) => ({
  kg: input.mass / 1000,
  name,
}));

console.log("Mapped:", fruitsMapped);

var fruitsReduced = reduceDict(fruits, (init, input) => init + input.mass, 0);

function weighFruit<T>(init: number, input: T, name: string): number {
  return init + input["mass"];
}

console.log("Reduced:", fruitsReduced);

/////////////////////////////////////////
/////////// TESTING UTILITIES ///////////
//////// no need to modify these ////////
/////////////////////////////////////////
console.clear();

const fruitsWithKgMass = mapDict(fruits, (fruit, name) => ({
  ...fruit,
  kg: 0.001 * fruit.mass,
  name,
}));
const lemonName: string = fruitsWithKgMass.lemon.name;
// @ts-ignore-error
const failLemonName: number = fruitsWithKgMass.lemon.name;
assertOk(fruitsWithKgMass, "[MAP] mapDict returns something truthy");
assertEquals(
  fruitsWithKgMass.cherry.name,
  "cherry",
  '[MAP] .cherry has a "name" property with value "cherry"'
);
assertEquals(
  fruitsWithKgMass.cherry.kg,
  0.005,
  '[MAP] .cherry has a "kg" property with value 0.005'
);
assertEquals(
  fruitsWithKgMass.cherry.mass,
  5,
  '[MAP] .cherry has a "mass" property with value 5'
);
assertEquals(
  Object.keys(fruitsWithKgMass).length,
  8,
  "[MAP] fruitsWithKgMass should have 8 keys"
);

// FILTER
// only red fruits
const redFruits = filterDict(fruits, (fruit) => fruit.color === "red");
assertOk(redFruits, "[FILTER] filterDict returns something truthy");
assertEquals(
  Object.keys(redFruits).length,
  4,
  "[FILTER] 4 fruits that satisfy the filter"
);
assertEquals(
  Object.keys(redFruits).sort().join(", "),
  "apple, cherry, grape, raspberry",
  '[FILTER] Keys are "apple, cherry, grape, raspberry"'
);

// REDUCE
// If we had one of each fruit, how much would the total mass be?
const oneOfEachFruitMass = reduceDict(
  fruits,
  (currentMass, fruit) => currentMass + fruit.mass,
  0
);
assertOk(redFruits, "[REDUCE] reduceDict returns something truthy");
assertEquals(
  typeof oneOfEachFruitMass,
  "number",
  "[REDUCE] reduceDict returns a number"
);
assertEquals(
  oneOfEachFruitMass,
  817,
  "[REDUCE] 817g mass if we had one of each fruit"
);
