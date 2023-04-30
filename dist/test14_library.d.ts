/***********************************************************************************************/
export interface Dict<T> {
    [k: string]: T;
}
export declare function mapDict<T, O>(fruits: Dict<T>, mapFunc: (input: T, key: string) => O): Dict<O>;
export declare function filterDict<T>(input: Dict<T>, filterCB: (item: T) => boolean): Dict<T>;
export declare function reduceDict<T, O>(input: Dict<T>, reducerFunc: (initialValue: O, input: T, key: string) => O, initialValue: O): O;
/***********************************************************************************************/
export declare function assertEquals<T>(found: T, expected: T, message: string): void;
export declare function assertOk(value: any, message: string): void;
