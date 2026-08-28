type User = {
  name: string;
  age: number;
  location: string;
};
function printUserInfo(user: User) {
  return `Name:${user.name} Age:${user.age} Location:${user.location}`;
}
const res = printUserInfo({ name: "Abdullah", age: 21, location: "Alewali" });
console.log(res);
