import { pets } from "./test14_data";
import {
  mapDict,
  filterDict,
  reduceDict,
  assertEquals,
  assertOk,
} from "./test14_library";

//
// Note that Mike has a test suite that I can leverage to test my solution
var petsFiltered = filterDict(pets, (input) => input.age > 10);

function olderThan10<T>(item: T): boolean {
  return item["age"] > 10;
}
console.log("Filtered:", petsFiltered);

var petsMapped = mapDict(pets, (input, name) => ({
  age: input.age * 7,
  name,
}));

console.log("Mapped:", petsMapped);

var petsReduced = reduceDict(pets, (total, input) => total + input.age, 0);

function sumAge<T>(init: number, input: T, name: string): number {
  return init + input["age"];
}

console.log("Reduced:", petsReduced);
