interface Ipets {
    [name: string]: {
        type: string;
        breed: string;
        age: number;
        forSale: boolean;
    };
}
declare var pets: Ipets;
