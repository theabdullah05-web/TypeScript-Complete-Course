class Box<T> {
  initialContent: T;
  constructor(intialContent: T) {
    this.initialContent = intialContent;
  }
  get getContent() {
    return this.initialContent;
  }
  set editContent(newContent: T) {
    this.initialContent = newContent;
  }
}
let b1 = new Box<string>("Hello World");
console.log(b1.getContent);
b1.editContent = "TypeScript";
console.log(b1.getContent);

let b2 = new Box<number>(2026);
console.log(b2.getContent);
b2.editContent = 2027;
console.log(b2.getContent);
