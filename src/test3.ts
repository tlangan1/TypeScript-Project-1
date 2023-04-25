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

function maybeGetUserInfo_Example1(): ["error", Type1] | ["success", Type2] {
  if (Math.random() > 0.5) {
    return [
      "error",
      { name: "Mike North", email: "mike@example.com", length: 1 },
    ];
  } else {
    return ["success", { name: "Tom Lagan", id: 1, frog: true, length: 1 }];
  }
}

var outcome_Example1 = maybeGetUserInfo_Example1();

if (typeof outcome_Example1[0] == "string") {
  console.log("the type is string");
} else {
  console.log("the type is not string");
}

// Note that this only works because this is actually a type check
// "error" and "success" are type literals
if (outcome_Example1[0] === "error") {
  outcome_Example1;
} else {
  outcome_Example1;
}

function maybeGetUserInfo_Example2():
  | { kind: "error"; data: Type1 }
  | { kind: "success"; data: Type2 } {
  if (Math.random() > 0.5) {
    return {
      kind: "error",
      data: { name: "Mike North", email: "mike@example.com", length: 1 },
    };
  } else {
    return {
      kind: "success",
      data: { name: "Tom Lagan", id: 1, frog: true, length: 1 },
    };
  }
}

var outcome_Example2 = maybeGetUserInfo_Example2();

// Again, this only works because this is actually a type check
// "error" and "success" are type literals
if (outcome_Example2.kind === "error") {
  outcome_Example2;
} else {
  outcome_Example2;
}
