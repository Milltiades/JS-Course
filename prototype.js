// const dude = {};

// dude.name = "Sinnnna";

// dude.age = 34;

// console.log(dude);

// const myBrothers = ["Ben", "Sam"];

// const name = "Sina";

// const human = {
//   kind: "Human",
// };
// const sina = Object.create(human);
// sina.age = 34;

// const ben = Object.create(sina);

// console.log(ben); // {}
// console.log(ben.age); // 34
// console.log(ben.kind); // Human
// ben.age = 12;
// console.log(ben.age); // 12

class Human {
  talk() {
    return "Talking";
  }
}

class SuperHuman extends Human {
  fly() {
    return "Flying";
  }
}
const ben = new SuperHuman();

console.log(ben.fly()); // Flying
console.log(ben.talk()); // Talking
console.log(ben);
