interface Computer {
  name: string;
  ram: number;
  hdd: number;
}
const computerExample: Computer = {
  name: "i5",
  ram: 8,
  hdd: 100,
};
console.log(computerExample.name);

interface Movie {
  readonly title: string;
  verdict: string;
  genre?: string;
}
const movie1: Movie = {
  title: "Spiderman: Brand New Day",
  verdict: "ATB",
  genre: "Comics",
};
console.log(movie1);
