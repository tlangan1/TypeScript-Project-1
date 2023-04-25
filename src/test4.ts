type Person = {
  id: number;
  name: string;
};

type Product = {
  id: number;
  name: string;
};

var person: Person = {
  id: 1,
  name: "Tom",
};

var product: Product = {
  id: 12,
  name: "Stapler",
};

function func(x: Person): Product {
  return x;
}

console.log(func(person));

console.log(func(product));
