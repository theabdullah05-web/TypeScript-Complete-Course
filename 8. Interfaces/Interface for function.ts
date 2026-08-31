interface mathOperation {
  (x: number, y: number): number;
}
const add: mathOperation = (x, y) => {
  return x + y;
};
const subtract: mathOperation = (a, b) => {
  return b - a;
};
console.log(add(13, 54));
console.log(subtract(10, 20));

const multiply: mathOperation = function (a, b) {
  return a * b;
};
console.log(multiply(45, 89));
