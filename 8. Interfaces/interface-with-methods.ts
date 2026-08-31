interface User {
  name: string;
  age: number;
  sayHello(): void;
}
function greet(user: User) {
  console.log(`${user.name}'s age is ${user.age}`);
  user.sayHello();
}
const John: User = {
  name: "John",
  age: 30,
  sayHello() {
    console.log("Hi, there");
  },
};
const Abdullah: User = {
  name: "Abdullah",
  age: 21,
  sayHello() {
    console.log("On your left");
  },
};
greet(John);
greet(Abdullah);

//Example 2
interface Song {
  songName: string;
  singerName: string;
  getSongInfo(song: string, singer: string): string;
}
const song1: Song = {
  songName: "Kharku",
  singerName: "Diljit Dosanjh",
  getSongInfo(songName, singerName) {
    return `${songName} by ${singerName}`;
  },
};

console.log(song1.getSongInfo(song1.songName, song1.singerName));
