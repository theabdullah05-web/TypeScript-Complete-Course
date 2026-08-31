interface Car {
  name: string;
  start(): void;
}
interface Car {
  brand: string;
  stop(): void;
}
let car: Car = {
  name: "BMW",
  brand: "M3",
  start() {
    console.log("Start");
  },
  stop() {
    console.log("Stop");
  },
};
