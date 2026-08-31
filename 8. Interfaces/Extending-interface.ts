interface Movie {
  readonly name: string;
  verdict: string;
  printMovieInfo(
    name: string,
    verdict: string,
    ratings: number,
  ): string | number;
}
interface MovieGenre extends Movie {
  genre: string;
}
let movie1: MovieGenre = {
  name: "Avengers Doomsday",
  verdict: "ATB",
  genre: "Comics",
  printMovieInfo(name, verdict, ratings) {
    return `Movie Name: ${name}, Box-Office Verdict:${verdict}, Genre:${this.genre}`;
  },
};
