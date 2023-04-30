"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const test14_data_1 = require("./test14_data");
const test14_library_1 = require("./test14_library");
//
// Note that Mike has a test suite that I can leverage to test my solution
var petsFiltered = (0, test14_library_1.filterDict)(test14_data_1.pets, (input) => input.age > 10);
function olderThan10(item) {
    return item["age"] > 10;
}
console.log("Filtered:", petsFiltered);
var petsMapped = (0, test14_library_1.mapDict)(test14_data_1.pets, (input, name) => ({
    age: input.age * 7,
    name,
}));
console.log("Mapped:", petsMapped);
var petsReduced = (0, test14_library_1.reduceDict)(test14_data_1.pets, (total, input) => total + input.age, 0);
function sumAge(init, input, name) {
    return init + input["age"];
}
console.log("Reduced:", petsReduced);
