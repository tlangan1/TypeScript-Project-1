declare function listToDict4<Tom>(list: Tom[], idGen: (arg: Tom) => string): {
    [k: string]: Tom;
};
interface IPet {
    name: string;
    type: string;
    breed: string;
    age: string;
    forSale: boolean;
}
declare var petInfo: IPet[];
declare var convertedList4: {
    [k: string]: IPet;
};
