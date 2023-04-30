interface IPhoneInfo {
  customerid: string;
  areaCode: string;
  num: string;
}

function listToDict1(
  list: IPhoneInfo[],
  idGen: (arg: IPhoneInfo) => string
): { [k: string]: IPhoneInfo } {
  var dictPhoneItems: { [k: string]: IPhoneInfo } = {};

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

function translate1(phoneItem: IPhoneInfo): string {
  return phoneItem.customerid;
}

var convertedList1 = listToDict1(phoneInfo, translate1);

console.log(convertedList1);
