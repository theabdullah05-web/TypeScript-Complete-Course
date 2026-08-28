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
