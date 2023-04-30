"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.assertOk = exports.assertEquals = exports.reduceDict = exports.filterDict = exports.mapDict = void 0;
function mapDict(fruits, mapFunc) {
    var output = {};
    for (let key in fruits) {
        output[key] = mapFunc(fruits[key], key);
    }
    return output;
}
exports.mapDict = mapDict;
// Array.prototype.filter, but for Dict
function filterDict(input, filterCB) {
    var output = {};
    for (let key in input) {
        if (filterCB(input[key])) {
            output[key] = input[key];
        }
    }
    return output;
}
exports.filterDict = filterDict;
// Array.prototype.reduce, but for Dict
function reduceDict(input, reducerFunc, initialValue) {
    for (let key in input) {
        initialValue = reducerFunc(initialValue, input[key], key);
    }
    return initialValue;
}
exports.reduceDict = reduceDict;
/***********************************************************************************************/
function assertEquals(found, expected, message) {
    if (found !== expected)
        throw new Error(`❌ Assertion failed: ${message}\nexpected: ${expected}\nfound: ${found}`);
    console.log(`✅ OK ${message}`);
}
exports.assertEquals = assertEquals;
function assertOk(value, message) {
    if (!value)
        throw new Error(`❌ Assertion failed: ${message}`);
    console.log(`✅ OK ${message}`);
}
exports.assertOk = assertOk;
