function listToDict3<Tom>(
  list: Tom[],
  idGen: (arg: Tom) => string
): { [k: string]: Tom } {
  var dictPhoneItems: { [k: string]: Tom } = {};

  list.forEach((phoneItem) => {
    var id = idGen(phoneItem);
    dictPhoneItems[id] = phoneItem;
  });

  return dictPhoneItems;
}

// Here we are using an array of objects that conform to the IPhoneInfo interface
interface IPhoneInfoNew {
  customer: string;
  areaCode: string;
  num: string;
}

var phoneInfoNew: IPhoneInfoNew[] = [
  { customer: "01", areaCode: "301", num: "123-4567" },
  { customer: "02", areaCode: "410", num: "432-8765" },
];

function translate3(phoneItem: IPhoneInfoNew): string {
  return phoneItem.customer;
}

var convertedList3 = listToDict3(phoneInfoNew, translate3);

console.log(convertedList3);

// Here we are using an array of objects that conform to the IPet interface
interface IPet {
  name: string;
  type: string;
  breed: string;
  age: string;
  forSale: boolean;
}
var petInfo: IPet[] = [
  {
    name: "Gino",
    type: "dog",
    breed: "Boston Bull Terrier",
    age: "12",
    forSale: false,
  },
  {
    name: "Benny",
    type: "dog",
    breed: "Schnoodle",
    age: "11",
    forSale: false,
  },
  {
    name: "Vixen",
    type: "cat",
    breed: "White Russian",
    age: "2",
    forSale: false,
  },
  {
    name: "Hopper",
    type: "rabbit",
    breed: "Unknown",
    age: "1",
    forSale: true,
  },
];

function translate4(petItem: IPet): string {
  return petItem.name;
}

var convertedList4 = listToDict3(petInfo, translate4);

console.log(convertedList4);
