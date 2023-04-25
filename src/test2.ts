function printCar(car: {
  make: string;
  model: string;
  year: number;
  chargeVoltage?: number;
}) {
  let str = `${car.make} ${car.model} (${car.year})`;
  car.chargeVoltage;
  //    ^?
  if (typeof car.chargeVoltage !== "undefined")
    str += `// ${car.chargeVoltage.toFixed(2)}v`;
  //                 ^?
  console.log(str);
}
