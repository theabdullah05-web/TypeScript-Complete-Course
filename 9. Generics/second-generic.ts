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
