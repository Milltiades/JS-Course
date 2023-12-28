// import sayHello, { bye, Car } from "./generate.js";

// bye();
// sayHello();

// const merco = new Car("mercedes", 2020);

// merco.vehicleVoice();

import * as Imported from "./generate.js";
import sayHello from "./generate.js";

Imported.bye();

const mycar = new Imported.Car("BMW", 2023);
mycar.vehicleVoice();
console.log(mycar.age);

sayHello();
