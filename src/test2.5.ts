interface StoresNumbersAccessedByStringKeys {
  [key: string]: number;
}

var v1_ValidStringKeys: StoresNumbersAccessedByStringKeys = {
  prop1: 2,
  prop2: 4,
};

var v1_InvalidStringKeys1: StoresNumbersAccessedByStringKeys = { prop1: "2" };

var v1_InvalidStringKeys2: StoresNumbersAccessedByStringKeys = { 1: 2 };

var v1_InvalidStringKeys3: StoresNumbersAccessedByStringKeys = { [1]: 3 };

console.log(v1_InvalidStringKeys2[1]);
console.log(v1_InvalidStringKeys3[[1]]);
console.log(v1_InvalidStringKeys3[String.fromCharCode(120)]);

if ("1" == [1]) {
  console.log('"1" == [1] is true');
}

Object.keys(v1_ValidStringKeys).forEach((element) => {
  console.log(element);
});

interface StoresStringsAccessedByNumberKeys {
  [key: number]: string;
}

var v1_ValidNumberKeys1: StoresStringsAccessedByNumberKeys = {
  1: "string1",
  2: "string2",
};

var v1_InvalidNumberKeys1: StoresStringsAccessedByNumberKeys = { prop1: 2 };

var v1_InvalidNumberKeys2: StoresStringsAccessedByNumberKeys = { 1: [2] };
