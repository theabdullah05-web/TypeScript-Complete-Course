//Normal Function
// function printNum(val: number, defaultVal: number): [number, number] {
//   return [val, defaultVal];
// }
// function printString(a: string, b: string): [string, string] {
//   return [a, b];
// }
// function printBool(a: boolean, b: boolean): [boolean, boolean] {
//   return [a, b];
// }
// const num = printNum(10, 20);
// console.log(num);
// const str = printString("Abdullah", "Hussain");
// console.log(str);
// const bool = printBool(true, false);
// console.log(bool);

//Generics
// function MultiTypeGenFunc<T>(a: T, b: T): [T, T] {
//   return [a, b];
// }
// let str = MultiTypeGenFunc<string>("Hello", "World");
// let num = MultiTypeGenFunc<number>(21, 26);
// let bool = MultiTypeGenFunc<boolean>(true, false);
// console.log(str);
// console.log(num);
// console.log(bool);

//interface & generics
// interface Dog {
//   name: string;
//   breed: string;
// }
// let dog1 = MultiTypeGenFunc<Dog>(
//   { name: "Puppy", breed: "Some Breed" },
//   { name: "Puppy2", breed: "Stray" },
// );
// console.log(dog1);

//Another Example
function getRandomKeyValuePair<T>(obj: { [key: string]: T }): {
  key: string;
  value: T;
} {
  const keys = Object.keys(obj);
  const randKey = keys[Math.floor(Math.random() * keys.length)];
  return {
    key: randKey,
    value: obj[randKey],
  };
}
const stringObject = { a: "Avacado", b: "Blueberry", c: "Cantaloupe" };
let randVal = getRandomKeyValuePair<string>(stringObject);
console.log(randVal);

const numObject = { one: 1, two: 2, three: 3 };
let randNum = getRandomKeyValuePair<number>(numObject);
console.log(randNum);
