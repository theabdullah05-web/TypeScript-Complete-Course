function printNum(val: number, defaultVal: number): [number, number] {
  return [val, defaultVal];
}
function printString(a: string, b: string): [string, string] {
  return [a, b];
}
function printBool(a: boolean, b: boolean): [boolean, boolean] {
  return [a, b];
}
const num = printNum(10, 20);
console.log(num);
const str = printString("Abdullah", "Hussain");
console.log(str);
const bool = printBool(true, false);
