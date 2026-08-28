let myVar: string | number = "Abdullah";
type userInfo = {
  name: string;
  age: number;
  semester: number;
};
type accountInfo = {
  email: string;
  password: string;
};
let user1: userInfo | accountInfo = {
  email: "Abdullah",
  password: "123",
};

let array: (number | string)[] = [21, "Abdullah"];
