// let num = 3;
// let newNum = 3.16;

// console.log(typeof num);
// console.log(typeof newNum);

// let mill = 1e6;
// 1 * (10**6) = 1000000
// console.log(mill);

// let smallNum = 1e-2;

// console.log(smallNum);

// let score = new Number(100);
// console.log(newNum.toFixed());

// let num = 1e5;
// console.log("num: ", typeof num);

// const PI = 3.141596254;

// let num = PI.toFixed(3); // დაამრგვალო სიზუსტით
// num = PI.toPrecision(5); // ზუსტად გამოაჩინო

// let mill = 1000000;
// num = mill.toExponential(); // შეკვეცილათ აჩვენო

// let num2 = PI.toPrecision(3);
// console.log(num2);
// let lightSpeed = 186000;

// console.log(lightSpeed.toExponential());

// String primitive
// const message = "This is my first message";
// const message2 = " This is my first message ";
// console.log(message.includes("my"));
// console.log(message.includes("not"));
// console.log(message.startsWith("This"));
// console.log(message.startsWith("this"));
// console.log(message.endsWith("message"));
// console.log(message.endsWith("e"));
// console.log(message.indexOf("message"));
// console.log(message.replace("first", "second"));
// console.log(message);
// console.log(message.toUpperCase());
// console.log(message.toLowerCase());
// console.log(message2.trim());
// console.log(message2.trimLeft());
// console.log(message2.trimRight());

// const message = "This is my\n first message";
// console.log(message);
// console.log(message.split(" "));

// String object
// const another = new String("hi");
//

// const myVariable = "Mathematics";

// console.log(myVariable.length);
// console.log("Every good boy does fine".length);
// console.log(myVariable.charAt(6)); //მეექვსე ციფრი სტრინგში
// console.log(myVariable.indexOf("ati"));
// console.log(myVariable.lastIndexOf("ath"));
// console.log(myVariable.slice(5)); //იწყება 5 ინდექსით და გამოაქვს ბოლომდე
// console.log(myVariable.slice(5, 8)); //იწყება 5 ინდექსით და 8-მდე
// console.log(myVariable.slice(5, 6)); //არაფერს არ გამოიტანს თუ ნაკლებია ან იგივე
// console.log(myVariable.split("a"));
// const num = myVariable.split("");
// console.log(num);

// function start() {
//   for (var i = 0; i < 5; i++) {
//     if (true) {
//       let color = "red";
//     }
//   }

//   console.log(color);
// }
// start();

// var => function-scoped
// ES6 (ES2015): let, const => block-scoped

var color = "red"; // var is attached to window object
let age = 30;

// this function is attached to window object
function saiHi() {
  console.log("hi");
}
