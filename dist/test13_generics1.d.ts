interface IPhoneInfo {
    customerid: string;
    areaCode: string;
    num: string;
}
declare function listToDict1(list: IPhoneInfo[], idGen: (arg: IPhoneInfo) => string): {
    [k: string]: IPhoneInfo;
};
declare var phoneInfo: {
    customerid: string;
    areaCode: string;
    num: string;
}[];
declare function translate1(phoneItem: IPhoneInfo): string;
declare var convertedList1: {
    [k: string]: IPhoneInfo;
};
