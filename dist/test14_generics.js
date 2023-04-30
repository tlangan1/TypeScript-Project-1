///// SAMPLE DATA FOR YOUR EXPERIMENTATION PLEASURE (do not modify)
const fruits = {
    apple: { color: "red", mass: 100 },
    grape: { color: "red", mass: 5 },
    banana: { color: "yellow", mass: 183 },
    lemon: { color: "yellow", mass: 80 },
    pear: { color: "green", mass: 178 },
    orange: { color: "orange", mass: 262 },
    raspberry: { color: "red", mass: 4 },
    cherry: { color: "red", mass: 5 },
};
/***********************************************************************************************/
// In the first test case a dictionary of objects of the form {name:{color: string, mass: number}}
// goes in and a dictionary of objects of the form {name:{name: string, kg: number}} comes out.
/***********************************************************************************************/
// Array.prototype.map, but for Dict
function mapDict(fruits, mapFunc) {
    var output = {};
    for (let key in fruits) {
        output[key] = mapFunc(fruits[key], key);
    }
    return output;
}
// Array.prototype.filter, but for Dict
// function filterDict(...args: any[]): any {}
function filterDict(input, filterCB) {
    var output = {};
    for (let key in input) {
        if (filterCB(input[key])) {
            output[key] = input[key];
        }
    }
    return output;
}
// Array.prototype.reduce, but for Dict
function reduceDict(input, reducerFunc, initialValue) {
    for (let key in input) {
        initialValue = reducerFunc(initialValue, input[key], key);
    }
    return initialValue;
}
// Note that Mike has a test suite that I can leverage to test my solution
var fruitsFiltered = filterDict(fruits, greaterThan100);
function greaterThan100(item) {
    return item.mass > 100;
}
console.log("Filtered:", fruitsFiltered);
var fruitsMapped = mapDict(fruits, mapFruitInputToFruitOutput);
function mapFruitInputToFruitOutput(input, name) {
    return { kg: input.mass / 1000, name: name };
}
console.log("Mapped:", fruitsMapped);
var fruitsReduced = reduceDict(fruits, weighFruit, 0);
function weighFruit(init, input, name) {
    return init + input.mass;
}
console.log("Reduced:", fruitsReduced);
// @strict: true
/////////////////////////////////////////
/////////// TESTING UTILITIES ///////////
//////// no need to modify these ////////
/////////////////////////////////////////
console.clear();
function assertEquals(found, expected, message) {
    if (found !== expected)
        throw new Error(`❌ Assertion failed: ${message}\nexpected: ${expected}\nfound: ${found}`);
    console.log(`✅ OK ${message}`);
}
function assertOk(value, message) {
    if (!value)
        throw new Error(`❌ Assertion failed: ${message}`);
    console.log(`✅ OK ${message}`);
}
const fruitsWithKgMass = mapDict(fruits, (fruit, name) => (Object.assign(Object.assign({}, fruit), { kg: 0.001 * fruit.mass, name })));
const lemonName = fruitsWithKgMass.lemon.name;
// @ts-ignore-error
const failLemonName = fruitsWithKgMass.lemon.name;
assertOk(fruitsWithKgMass, "[MAP] mapDict returns something truthy");
assertEquals(fruitsWithKgMass.cherry.name, "cherry", '[MAP] .cherry has a "name" property with value "cherry"');
assertEquals(fruitsWithKgMass.cherry.kg, 0.005, '[MAP] .cherry has a "kg" property with value 0.005');
assertEquals(fruitsWithKgMass.cherry.mass, 5, '[MAP] .cherry has a "mass" property with value 5');
assertEquals(Object.keys(fruitsWithKgMass).length, 8, "[MAP] fruitsWithKgMass should have 8 keys");
// FILTER
// only red fruits
const redFruits = filterDict(fruits, (fruit) => fruit.color === "red");
assertOk(redFruits, "[FILTER] filterDict returns something truthy");
assertEquals(Object.keys(redFruits).length, 4, "[FILTER] 4 fruits that satisfy the filter");
assertEquals(Object.keys(redFruits).sort().join(", "), "apple, cherry, grape, raspberry", '[FILTER] Keys are "apple, cherry, grape, raspberry"');
// REDUCE
// If we had one of each fruit, how much would the total mass be?
const oneOfEachFruitMass = reduceDict(fruits, (currentMass, fruit) => currentMass + fruit.mass, 0);
assertOk(redFruits, "[REDUCE] reduceDict returns something truthy");
assertEquals(typeof oneOfEachFruitMass, "number", "[REDUCE] reduceDict returns a number");
assertEquals(oneOfEachFruitMass, 817, "[REDUCE] 817g mass if we had one of each fruit");
