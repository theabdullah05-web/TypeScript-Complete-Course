type Person = {
  readonly name: string;
  age: number;
  location?: string;
};
const user: Person = {
  name: "Abdullah",
  age: 21,
};
console.log(user);
