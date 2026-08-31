interface Vehicle {
  start(): void;
  stop(): void;
}
class Car implements Vehicle {
  start() {
    console.log("Car is starting...");
  }
  stop() {
    console.log("Car is stopped");
  }
}
let c1 = new Car();
c1.start();
c1.stop();
