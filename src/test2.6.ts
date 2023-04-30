interface InterfaceSignature1 {
  [type: string | number]: string | number;
}

var x1: InterfaceSignature1 = {
  prop1: "string1",
  2: 4,
  prop2: 3,
};

// In TypeScript type object represents anything that is not a primitive type.
// It does not have any properties
let myObject1: object = { name: "John", age: 30 };

console.log(myObject1.name);

let myObject2: Object = { name: "John", age: 30 };

console.log(myObject2.name);
console.log(myObject2["name"]);
