//Regular function
function double(num: number): number {
  return num * 2;
}
let res = double(122);
console.log(res);
//Arrow Func
const sqr = (x: number): string => {
  return `square of ${x} is ${x ** 2}`;
};
const res2 = sqr(99);
console.log(res2);
