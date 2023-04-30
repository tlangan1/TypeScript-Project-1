interface Point {
    x: number;
    y: number;
}
interface NameMap {
    [name: string]: number;
}
declare function A(x: NameMap): void;
declare function B(x: Point): void;
declare const m: NameMap;
