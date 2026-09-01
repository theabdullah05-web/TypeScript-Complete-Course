class Box<T> {
  initialContent: T;
  constructor(intialContent: T) {
    this.initialContent = intialContent;
  }
  get getContent() {
    return this.initialContent;
  }
  set showContent(newContent: T) {
    this.initialContent = newContent;
  }
}
