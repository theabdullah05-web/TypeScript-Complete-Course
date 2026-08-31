class Human {
  public first: string;
  private last: string;
  protected age: number;
  constructor(first: string, last: string, age: number) {
    this.first = first;
    this.last = last;
    this.age = age;
  }
  getName(): string {
    return `Last Name is ${this.last}`;
  }
}
class Person extends Human {
  hobby: string;
  constructor(first: string, last: string, age: number, hobby: string) {
    super(first, last, age);
    this.hobby = hobby;
  }
  getAge(): string {
    return `Age=${this.age}`;
  }
}
let p1 = new Person("Abdullah", "Hussain", 21, "coding");
console.log(p1.first);
console.log(p1.Age());
