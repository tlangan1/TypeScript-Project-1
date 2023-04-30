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
// function filterDict(...args: any[]): any {}
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
