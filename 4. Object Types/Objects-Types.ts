const person: { firstName: string; lastName: string; age: number } = {
  firstName: "Abdullah",
  lastName: "Hussain",
  age: 21,
};
console.log(
  `Hi, My name is ${person.firstName} ${person.lastName} and my age is ${person.age}`,
);

//-----------------------------------------------------------------------------------------
function printUser(): { name: string; age: number; country: string } {
  return {
    name: "Abdullah",
    age: 21,
    country: "Pakistan",
  };
}
const res = printUser();
console.log(res);
