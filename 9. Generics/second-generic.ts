//First Example
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

//Second Example
function filterData<T>(array: T[], condition: (item: T) => boolean): T[] {
  return array.filter((item) => condition(item));
}
let evenNum = filterData<number>(
  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  (num) => num % 2 === 0,
);
console.log(evenNum);

let fruits = ["apple", "banana", "cherry", "date"];
console.log(filterData<string>(fruits, (fruit) => fruit.length < 6));
