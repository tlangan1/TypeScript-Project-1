declare function listToDict3<Tom>(list: Tom[], idGen: (arg: Tom) => string): {
    [k: string]: Tom;
};
interface IPhoneInfoNew {
    customer: string;
    areaCode: string;
    num: string;
}
declare var phoneInfoNew: IPhoneInfoNew[];
declare function translate3(phoneItem: IPhoneInfoNew): string;
declare var convertedList3: {
    [k: string]: IPhoneInfoNew;
};
interface IPet {
    name: string;
    type: string;
    breed: string;
    age: string;
    forSale: boolean;
}
declare var petInfo: IPet[];
declare function translate4(petItem: IPet): string;
declare var convertedList4: {
    [k: string]: IPet;
};
