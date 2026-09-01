interface Identifier {
  id: number;
}
function mergeObjects<T extends Identifier, U extends Record<string, any>>(
  obj1: T,
  obj2: U,
): T & U {
  return { ...obj1, ...obj2 };
}
let obj1 = {
  id: 1,
  name: "Abdullah",
};
let obj2 = {
  id: 2,
  age: 21,
};
const merged = mergeObjects(obj1, obj2);
console.log(merged);
