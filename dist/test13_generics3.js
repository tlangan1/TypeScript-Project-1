function listToDict3(list, idGen) {
    var dictPhoneItems = {};
    list.forEach((phoneItem) => {
        var id = idGen(phoneItem);
        dictPhoneItems[id] = phoneItem;
    });
    return dictPhoneItems;
}
var phoneInfoNew = [
    { customer: "01", areaCode: "301", num: "123-4567" },
    { customer: "02", areaCode: "410", num: "432-8765" },
];
function translate3(phoneItem) {
    return phoneItem.customer;
}
var convertedList3 = listToDict3(phoneInfoNew, translate3);
console.log(convertedList3);
var petInfo = [
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
function translate4(petItem) {
    return petItem.name;
}
var convertedList4 = listToDict3(petInfo, translate4);
console.log(convertedList4);
