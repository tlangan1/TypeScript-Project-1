// Note that although using any does provide a generic solution it is too generic
// We have lost all of our type information and we might as well just use JavaScript
function listToDict2(list, idGen) {
    var dictPhoneItems = {};
    list.forEach((phoneItem) => {
        var id = idGen(phoneItem);
        dictPhoneItems[id] = phoneItem;
    });
    return dictPhoneItems;
}
var phoneInfo = [
    { customerid: "01", areaCode: "301", num: "123-4567" },
    { customerid: "02", areaCode: "410", num: "432-8765" },
];
function translate2(phoneItem) {
    return phoneItem.customerid;
}
var convertedList2 = listToDict2(phoneInfo, translate2);
console.log(convertedList2);
