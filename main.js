// Arrays
// const myArray = [];

// add elements to an array
// myArray[0] = "Dave";
// myArray[1] = 1001;
// myArray[2] = false;

// console.log(myArray);

// myArray.splice(1, 0, 42);
// myArray.splice(0, 0, "Gedeon");

// myArray.splice(myArray.length, 0, "Kakulia");
// myArray.splice(myArray.length - 1, 0, "Lasha");

// console.log(myArray);
// console.log(myArray.length);
// console.log(myArray[1]);

// delete myArray[1];
// console.log(myArray);
// console.log(myArray[1]);
// console.log(myArray.length);

// const newLength = myArray.unshift(42);
// console.log(myArray);
// myArray.shift();
// console.log(myArray);
// console.log(myArray[1]);
// console.log(myArray[2]);
// const firstItem = myArray.shift();
// console.log(firstItem);
// console.log(myArray);

// myArray.push("school"); //ad 1 item
// const lastItem = myArray.pop(); // remove 1 item
// console.log(lastItem);

// myArray.unshift(42);
// console.log(myArray); //add 1 item at the beginning of an array
// // refer to an array
// console.log(myArray);

// //length property
// console.log(myArray.length);

// //last element in an array
// console.log(myArray[myArray.length - 1]);

// console.log(myArray[1]);
// const myArray = ["A", "B", "C", "D", "E", "F"];

// const newString = myArray.join();
// const newArray = newString.split(",");
// myArray.reverse();

// console.log(newArray);

// const newArray = myArray.slice(2);

// console.log(newArray); // ["C", "D", "E", "F"]

// const myArrayA = ["A", "B", "C"];
// const myArrayB = ["D", "E", "F"];

// const newArray = [...myArrayA, ...myArrayB];

// console.log(newArray);

// const newArray = myArrayA.concat(myArrayB);
// const newArray1 = myArrayB.concat(myArrayA);
// console.log(newArray);
// console.log(newArray1);

const equipShelfA = ["baseball", "football", "volleyball"];
const equipShelfB = ["basketball", "golf balls", "tennis balls"];

const clothesShelfA = ["tank tops", "t-shirts", "jerseys"];
const clothesShelfB = ["sweat tops", "sweat pants", "hoodies"];

console.log(equipShelfA[1]);

console.log(clothesShelfB[0]);

const equipDept = [equipShelfA, equipShelfB];
const clothesDept = [clothesShelfA, clothesShelfB];

console.log(equipDept[0][1]);
console.log(clothesDept[1][0]);

const sportsStore = [equipDept, clothesDept];

console.log(sportsStore);
console.log(sportsStore[1][1][2]);
console.log(sportsStore[0][0][1]);
console.log(sportsStore[1][1][0]);
