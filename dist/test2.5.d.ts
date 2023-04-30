interface StoresNumbersAccessedByStringKeys {
    [key: string]: number;
}
declare var v1_ValidStringKeys: StoresNumbersAccessedByStringKeys;
declare var v1_InvalidStringKeys1: StoresNumbersAccessedByStringKeys;
declare var v1_InvalidStringKeys2: StoresNumbersAccessedByStringKeys;
declare var v1_InvalidStringKeys3: StoresNumbersAccessedByStringKeys;
interface StoresStringsAccessedByNumberKeys {
    [key: number]: string;
}
declare var v1_ValidNumberKeys1: StoresStringsAccessedByNumberKeys;
declare var v1_InvalidNumberKeys1: StoresStringsAccessedByNumberKeys;
declare var v1_InvalidNumberKeys2: StoresStringsAccessedByNumberKeys;
