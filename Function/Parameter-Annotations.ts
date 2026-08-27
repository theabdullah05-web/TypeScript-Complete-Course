//Regular Func
function addOne(num: number) {
  return num + 1;
}
const res = addOne(20);
console.log(res);

//Arrow Func
let mulFunc = (a: number, b: number) => {
  return;
  a * b;
};
const doubledAge = mulFunc(2, 21);
console.log(doubledAge);
