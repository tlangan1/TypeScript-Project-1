declare const fruits: {
    apple: {
        color: string;
        mass: number;
    };
    grape: {
        color: string;
        mass: number;
    };
    banana: {
        color: string;
        mass: number;
    };
    lemon: {
        color: string;
        mass: number;
    };
    pear: {
        color: string;
        mass: number;
    };
    orange: {
        color: string;
        mass: number;
    };
    raspberry: {
        color: string;
        mass: number;
    };
    cherry: {
        color: string;
        mass: number;
    };
};
interface IFruitInput {
    color: string;
    mass: number;
}
interface IFruitOutput {
    name: string;
    kg: number;
}
interface Dict<T> {
    [k: string]: T;
}
/***********************************************************************************************/
/***********************************************************************************************/
declare function mapDict<T, O>(fruits: Dict<T>, mapFunc: (input: T, key: string) => O): Dict<O>;
declare function filterDict<T>(input: Dict<T>, filterCB: (item: T) => boolean): Dict<T>;
declare function reduceDict<T, O>(input: Dict<T>, reducerFunc: (initialValue: O, input: T, key: string) => O, initialValue: O): O;
declare var fruitsFiltered: Dict<{
    color: string;
    mass: number;
} | {
    color: string;
    mass: number;
} | {
    color: string;
    mass: number;
} | {
    color: string;
    mass: number;
} | {
    color: string;
    mass: number;
} | {
    color: string;
    mass: number;
} | {
    color: string;
    mass: number;
} | {
    color: string;
    mass: number;
}>;
declare function greaterThan100(item: IFruitInput): boolean;
declare var fruitsMapped: Dict<IFruitOutput>;
declare function mapFruitInputToFruitOutput(input: IFruitInput, name: string): IFruitOutput;
declare var fruitsReduced: number;
declare function weighFruit(init: number, input: IFruitInput, name: string): number;
declare function assertEquals<T>(found: T, expected: T, message: string): void;
declare function assertOk(value: any, message: string): void;
declare const fruitsWithKgMass: Dict<{
    kg: number;
    name: string;
    color: string;
    mass: number;
} | {
    kg: number;
    name: string;
    color: string;
    mass: number;
} | {
    kg: number;
    name: string;
    color: string;
    mass: number;
} | {
    kg: number;
    name: string;
    color: string;
    mass: number;
} | {
    kg: number;
    name: string;
    color: string;
    mass: number;
} | {
    kg: number;
    name: string;
    color: string;
    mass: number;
} | {
    kg: number;
    name: string;
    color: string;
    mass: number;
} | {
    kg: number;
    name: string;
    color: string;
    mass: number;
}>;
declare const lemonName: string;
declare const failLemonName: number;
declare const redFruits: Dict<{
    color: string;
    mass: number;
} | {
    color: string;
    mass: number;
} | {
    color: string;
    mass: number;
} | {
    color: string;
    mass: number;
} | {
    color: string;
    mass: number;
} | {
    color: string;
    mass: number;
} | {
    color: string;
    mass: number;
} | {
    color: string;
    mass: number;
}>;
declare const oneOfEachFruitMass: number;
