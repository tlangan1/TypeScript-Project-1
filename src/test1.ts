function func1(a: number, b: number) {
  return a + b;
}

var sum = func1(2, 3);

console.log(sum);

function func2(a: number, b: number): number {
  if (a > b) {
    return a + b;
  }
}

sum = func2(2, 3);
console.log(sum);
