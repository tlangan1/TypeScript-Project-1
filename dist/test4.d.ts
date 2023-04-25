type Person = {
    id: number;
    name: string;
};
type Product = {
    id: number;
    name: string;
};
declare var person: Person;
declare var product: Product;
declare function func(x: Person): Product;
