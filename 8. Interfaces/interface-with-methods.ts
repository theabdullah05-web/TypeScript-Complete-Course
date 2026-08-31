interface User {
  name: string;
  age: number;
  sayHello(): void;
}
function greet(user: User) {
  console.log(`${user.name}'s age is ${user.age}`);
  user.sayHello();
}
const John: User = {
  name: "John",
  age: 30,
  sayHello() {
    console.log("Hi, there");
  },
};
const Abdullah: User = {
  name: "Abdullah",
  age: 21,
  sayHello() {
    console.log("On your left");
  },
};
greet(John);
greet(Abdullah);
