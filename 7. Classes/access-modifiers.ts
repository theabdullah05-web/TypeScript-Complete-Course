class Person {
  public first: string;
  private last: string;
  constructor(first: string, last: string) {
    this.first = first;
    this.last = last;
  }
  getName(): string {
    return `Last Name is ${this.last}`;
  }
}
let p1 = new Person("John", "Doe");
console.log(p1.first);
console.log(p1.getName());
