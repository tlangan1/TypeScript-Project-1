interface CarLike {
    make: string;
    model: string;
    year: number;
}
declare let maybeCar2: unknown;
declare function assertsIsCarLike(valueToTest: any): asserts valueToTest is CarLike;
