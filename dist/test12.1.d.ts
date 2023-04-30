interface CarLike {
    make: string;
    model: string;
    year: number;
}
declare let maybeCar1: unknown;
declare function isCarLike(valueToTest: any): valueToTest is CarLike;
