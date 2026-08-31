class Class {
  private _myProperty: number = 0;
  get myProperty(): number {
    return this._myProperty;
  }
  set myProperty(value: number) {
    this._myProperty = value;
  }
}
let myInstance = new Class();
console.log(myInstance.myProperty);
myInstance.myProperty = 26;
console(myInstance.myProperty);
