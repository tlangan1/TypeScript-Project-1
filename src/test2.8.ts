interface Ipets {
  [name: string]: {
    type: string;
    breed: string;
    age: number;
    forSale: boolean;
  };
}

var pets: Ipets = {
  Vixen: { type: "cat", breed: "White Russian", age: 10, forSale: false },
  Benny: { type: "dog", breed: "SnickerDoodle", age: 12, forSale: false },
  Hopper: { type: "rabbit", breed: "Unknown", age: 1, forSale: true },
};

for (let key in pets) {
  let value = pets[key];
  console.log(value);
}
