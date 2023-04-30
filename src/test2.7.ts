interface Point {
  x: number;
  y: number;
}
interface NameMap {
  [name: string]: number;
}

function A(x: NameMap) {
  console.log(x.y);
}

function B(x: Point) {
  console.log(x.y);
}

const m: NameMap = {};

A(m); // OK
B(m); // Error
