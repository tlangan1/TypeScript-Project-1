interface someFuncSignature1 {
  (a: string, b: number): boolean;
}

var funcX: someFuncSignature1 = function (x, y) {
  return x.length > y;
};

type someFuncSignature2 = (a: string, b: number) => boolean;

var funcY: someFuncSignature2 = (x, y) => x.length > y;
