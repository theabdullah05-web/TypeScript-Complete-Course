type User = {
  name: string;
  age: number;
  location: string;
};
function printUserInfo(user: User) {
  return `Name:${user.name} Age:${user.age} Location:${user.location}`;
}
