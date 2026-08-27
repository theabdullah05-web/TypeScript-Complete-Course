function throwsErr(): never {
  throw new Error();
}

function infiniteLoop(): never {
  while (true) {}
}
let x: never;

function neverreturns(): never {
  while (true) {}
}
