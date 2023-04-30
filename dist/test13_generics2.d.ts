interface IPhoneInfo {
    customerid: string;
    areaCode: string;
    num: string;
}
declare function listToDict2(list: any[], idGen: (arg: any) => string): {
    [k: string]: any;
};
declare var phoneInfo: {
    customerid: string;
    areaCode: string;
    num: string;
}[];
declare function translate2(phoneItem: any): string;
declare var convertedList2: {
    [k: string]: any;
};
