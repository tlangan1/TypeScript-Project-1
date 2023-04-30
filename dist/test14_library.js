"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reduceDict = exports.filterDict = exports.mapDict = void 0;
function mapDict(fruits, mapFunc) {
    var output = {};
    for (let key in fruits) {
        output[key] = mapFunc(fruits[key], key);
    }
    return output;
}
exports.mapDict = mapDict;
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
