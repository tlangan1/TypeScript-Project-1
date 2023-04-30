"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const test14_data_1 = require("./test14_data");
const test14_library_1 = require("./test14_library");
// Note that Mike has a test suite that I can leverage to test my solution
var fruitsFiltered = (0, test14_library_1.filterDict)(test14_data_1.fruits, (item) => item.mass > 100);
console.log("Filtered:", fruitsFiltered);
var fruitsMapped = (0, test14_library_1.mapDict)(test14_data_1.fruits, (input, name) => ({
    kg: input.mass / 1000,
    name,
}));
console.log("Mapped:", fruitsMapped);
var fruitsReduced = (0, test14_library_1.reduceDict)(test14_data_1.fruits, (init, input) => init + input.mass, 0);
function weighFruit(init, input, name) {
    return init + input["mass"];
}
console.log("Reduced:", fruitsReduced);
/////////////////////////////////////////
/////////// TESTING UTILITIES ///////////
//////// no need to modify these ////////
/////////////////////////////////////////
console.clear();
const fruitsWithKgMass = (0, test14_library_1.mapDict)(test14_data_1.fruits, (fruit, name) => (Object.assign(Object.assign({}, fruit), { kg: 0.001 * fruit.mass, name })));
const lemonName = fruitsWithKgMass.lemon.name;
// @ts-ignore-error
const failLemonName = fruitsWithKgMass.lemon.name;
(0, test14_library_1.assertOk)(fruitsWithKgMass, "[MAP] mapDict returns something truthy");
(0, test14_library_1.assertEquals)(fruitsWithKgMass.cherry.name, "cherry", '[MAP] .cherry has a "name" property with value "cherry"');
(0, test14_library_1.assertEquals)(fruitsWithKgMass.cherry.kg, 0.005, '[MAP] .cherry has a "kg" property with value 0.005');
(0, test14_library_1.assertEquals)(fruitsWithKgMass.cherry.mass, 5, '[MAP] .cherry has a "mass" property with value 5');
(0, test14_library_1.assertEquals)(Object.keys(fruitsWithKgMass).length, 8, "[MAP] fruitsWithKgMass should have 8 keys");
// FILTER
// only red fruits
const redFruits = (0, test14_library_1.filterDict)(test14_data_1.fruits, (fruit) => fruit.color === "red");
(0, test14_library_1.assertOk)(redFruits, "[FILTER] filterDict returns something truthy");
(0, test14_library_1.assertEquals)(Object.keys(redFruits).length, 4, "[FILTER] 4 fruits that satisfy the filter");
(0, test14_library_1.assertEquals)(Object.keys(redFruits).sort().join(", "), "apple, cherry, grape, raspberry", '[FILTER] Keys are "apple, cherry, grape, raspberry"');
// REDUCE
// If we had one of each fruit, how much would the total mass be?
const oneOfEachFruitMass = (0, test14_library_1.reduceDict)(test14_data_1.fruits, (currentMass, fruit) => currentMass + fruit.mass, 0);
(0, test14_library_1.assertOk)(redFruits, "[REDUCE] reduceDict returns something truthy");
(0, test14_library_1.assertEquals)(typeof oneOfEachFruitMass, "number", "[REDUCE] reduceDict returns a number");
(0, test14_library_1.assertEquals)(oneOfEachFruitMass, 817, "[REDUCE] 817g mass if we had one of each fruit");
