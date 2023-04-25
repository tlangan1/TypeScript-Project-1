interface someFuncSignature1 {
    (a: string, b: number): boolean;
}
declare var funcX: someFuncSignature1;
type someFuncSignature2 = (a: string, b: number) => boolean;
declare var funcY: someFuncSignature2;
