function printString(val: number, defaultVal: number): [number, number] {
  return [val, defaultVal];
}
const num = printString(10, 20);
console.log(num);
