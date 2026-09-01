interface Identifier {
  id: number;
}
function mergeObjects<T extends Identifier, U extends Record<string, any>>(
  obj1: T,
  obj2: U,
): T & U {
  return { ...obj1, ...obj2 };
}
