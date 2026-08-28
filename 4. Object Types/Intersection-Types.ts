type userInfo = {
  name: string;
  age: number;
  semester: number;
};
type accountInfo = {
  email: string;
  password: string;
};

type personDetails = userInfo & accountInfo;

const me: personDetails = {
  name: "Abdullah",
  age: 21,
  semester: 1,
  email: "theabullah@gmail.com",
  password: "superman",
};
console.log(me);
