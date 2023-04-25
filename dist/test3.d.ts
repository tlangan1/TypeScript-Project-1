interface Type1 {
    name: string;
    email: string;
    length: number;
}
interface Type2 {
    name: string;
    id: number;
    frog: boolean;
    length: number;
}
declare function maybeGetUserInfo_Example1(): ["error", Type1] | ["success", Type2];
declare var outcome_Example1: ["error", Type1] | ["success", Type2];
declare function maybeGetUserInfo_Example2(): {
    kind: "error";
    data: Type1;
} | {
    kind: "success";
    data: Type2;
};
declare var outcome_Example2: {
    kind: "error";
    data: Type1;
} | {
    kind: "success";
    data: Type2;
};
