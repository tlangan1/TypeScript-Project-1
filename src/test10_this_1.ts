interface thisInObject {
  prop1: string;
  getProp1: () => string;
}

var x2: thisInObject = {
  prop1: "prop1 value",
  getProp1() {
    return this.prop1;
  },
};

console.log(x2.getProp1());
