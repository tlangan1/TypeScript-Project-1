/***********************************************************************************************/
// Array.prototype.map, but for Dict
export interface Dict<T> {
  [k: string]: T;
}
export function mapDict<T, O>(
  fruits: Dict<T>,
  mapFunc: (input: T, key: string) => O
): Dict<O> {
  var output: Dict<O> = {};
  for (let key in fruits) {
    output[key] = mapFunc(fruits[key], key);
  }

  return output;
}

// Array.prototype.filter, but for Dict
export function filterDict<T>(
  input: Dict<T>,
  filterCB: (item: T) => boolean
): Dict<T> {
  var output = {};
  for (let key in input) {
    if (filterCB(input[key])) {
      output[key] = input[key];
    }
  }
  return output;
}
// Array.prototype.reduce, but for Dict
export function reduceDict<T, O>(
  input: Dict<T>,
  reducerFunc: (initialValue: O, input: T, key: string) => O,
  initialValue: O
): O {
  for (let key in input) {
    initialValue = reducerFunc(initialValue, input[key], key);
  }

  return initialValue;
}
/***********************************************************************************************/

export function assertEquals<T>(found: T, expected: T, message: string) {
  if (found !== expected)
    throw new Error(
      `❌ Assertion failed: ${message}\nexpected: ${expected}\nfound: ${found}`
    );
  console.log(`✅ OK ${message}`);
}

export function assertOk(value: any, message: string) {
  if (!value) throw new Error(`❌ Assertion failed: ${message}`);
  console.log(`✅ OK ${message}`);
}
