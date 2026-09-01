function reversePair<T, U>(a: T, b: U): [U, T] {
  return [b, a];
}
let reversedOrder = reversePair<string, number>("abdullah", 21);
console.log(reversedOrder);
