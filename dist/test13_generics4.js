function listToDict4(list, idGen) {
    var dictPhoneItems = {};
    list.forEach((phoneItem) => {
        var id = idGen(phoneItem);
        dictPhoneItems[id] = phoneItem;
    });
    return dictPhoneItems;
}
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
