type MyType = string | number;
function exampleFunction(a: MyType): void {
  if (typeof a === "string") {
    console.log(a.toUpperCase());
  } else {
    console.log(a.toFixed(2));
  }
}
exampleFunction("Abdullah");
exampleFunction(26);
