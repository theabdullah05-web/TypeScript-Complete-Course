let myTup: [string, number, boolean];
myTup = ["abdullah", 21, true];
console.log(myTup[1]);

//destructuring
let tup2: [string, string] = ["Abdullah", "Hussain"];
let [first, second] = tup2;
console.log(first);
console.log(second);

//Array
let arr: (string | number)[];
arr = [1, 2, "three"];
