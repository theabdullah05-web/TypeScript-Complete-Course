class Dog {
  bark() {
    console.log("Woof Woof");
  }
}
class Cat {
  meow() {
    console.log("Meow Meow");
  }
}
function animalFunc(animal: Dog | Cat): void {
  if (animal instanceof Dog) {
    animal.bark();
  } else {
    animal.meow();
  }
}
