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
