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

// const equipShelfA = ["baseball", "football", "volleyball"];
// const equipShelfB = ["basketball", "golf balls", "tennis balls"];

// const clothesShelfA = ["tank tops", "t-shirts", "jerseys"];
// const clothesShelfB = ["sweat tops", "sweat pants", "hoodies"];

// console.log(equipShelfA[1]);

// console.log(clothesShelfB[0]);

// const equipDept = [equipShelfA, equipShelfB];
// const clothesDept = [clothesShelfA, clothesShelfB];

// console.log(equipDept[0][1]);
// console.log(clothesDept[1][0]);

// const sportsStore = [equipDept, clothesDept];

// console.log(sportsStore);
// console.log(sportsStore[1][1][2]);
// console.log(sportsStore[0][0][1]);
// console.log(sportsStore[1][1][0]);

// const people = ["Sally", "Kyle", "John"];

// people.splice(0, 2, "New");
// const splicedPeople = people.toSpliced(0, 2, "New");

// console.log("Original", splicedPeople);
// console.log("Original", people);

// const sortedPeople = [...people].sort();
// or
// const sortedPeople = people.toSorted();
// const reversedPeople = people.toReversed();

// console.log("Sorted", sortedPeople);
// console.log("Reversed", reversedPeople);

// const peopleCopy = [...people];
// peopleCopy[2] = "New";

// console.log("Original", people);
// console.log("Copy", peopleCopy);

// const newPeople = people.with(2, "New");
// console.log("Orignal", people);
// console.log("New", newPeople);

// ForEach

// const food = [
//   "apple",
//   "carrot",
//   "pear",
//   "eggplant",
//   "banana",
//   "tomato",
//   "grape",
//   "potato",
//   "avocado",
//   "corn",
// ];

//food.forEach((item) => console.log(item));
// const bananas = food.map((item) => "banana");
// console.log(bananas);

// const duplicateFood = food.map((any) => any + any);
// console.log(duplicateFood);

// const food = ["🍎", "🥕", "🍐", "🍌", "🍅", "🍇", "🥔", "🥑"];

// const banana = food.filter((item) => item === "🍌");
// console.log(banana);

// const watermelon = food.find((item) => item === "🍉");

// console.log(watermelon); //undefined

// const apple = food.find((item) => item === "🍎");

// console.log(apple); // 🍎

// const bananaIndex = food.findIndex((item) => item === "🍌");

// console.log(bananaIndex); //3

// const watermelonIndex = food.findIndex((item) => item === "🍉");

// console.log(watermelonIndex); // -1

// const bananaIndex = food.indexOf("🍌");
// const tomatoIndex = food.indexOf("🍅");
// const watermelonIndex = food.indexOf("🍉");
// console.log(bananaIndex); // 3
// console.log(tomatoIndex); // 4
// console.log(watermelonIndex); // -1

// const bananaIndex = food.lastIndexOf("🍌");
// console.log(bananaIndex); // 3

// const watermelonIndex = food.lastIndexOf("🍉");
// console.log(watermelonIndex); // -1

//some

// const food = ["🍎", "🥕", "🍐", "🍌", "🍅", "🍇", "🥔", "🥑"];

// const hasACarrot = food.some((item) => item === "🥕");

// console.log(hasACarrot); //true

// const hasAWatermelon = food.some((item) => item === "🍉");
// console.log(hasAWatermelon); // false

//every
// const allBananas = food.every((item) => item === "🍌");
// console.log(allBananas); //false
//includes

// const hasAPotato = food.includes("🥔");
// console.log(hasAPotato); //true
// const hasAWatermelon = food.includes("🍉");
// console.log(hasAWatermelon); //false

// food.push("🍉"); //add element in last place of array
// console.log(food);

// food.unshift("🍉"); //add element in first place of array
// console.log(food);
// food.pop(); // removes last element of array
// console.log(food);
// const removedItem = food.pop();
// console.log(removedItem); // 🥑
// food.shift(); // removes first element of array
// console.log(food);
// const removedItem = food.shift();
// console.log(removedItem); // 🍎

//toString()

// console.log(food);
// const foodStr = food.toString();
// console.log(foodStr);

//join()
// const foodStr = food.join();
// const foodStr1 = food.join("");
// const foodStr2 = food.join(", ");
// const foodStr3 = food.join(" + ");

// console.log(foodStr);
// console.log(foodStr1);
// console.log(foodStr2);
// console.log(foodStr3);

//fill()

// food.fill("🍌"); //) ['🍌', '🍌', '🍌', '🍌', '🍌', '🍌', '🍌', '🍌']
// food.fill("🍌", 2); // ['🍎', '🥕', '🍌', '🍌', '🍌', '🍌', '🍌', '🍌']

// food.fill("🍌", 2, 6); // ['🍎', '🥕', '🍌', '🍌', '🍌', '🍌', '🥔', '🥑']
// console.log(food);

// console.log(food);
// food.copyWithin(2);
// console.log(food);
// food.copyWithin(3, 6);
// food.copyWithin(2, 4, 6);
// console.log(food);

//slice
// const food = ["🍎", "🥕", "🍐", "🍌", "🍅", "🍇", "🥔", "🥑"];

// const foodSlice = food.slice(2, 4);
// const foodSlice2 = food.slice(2);
// const foodSlice3 = food.slice();
// console.log(food);
// console.log(foodSlice); //['🍐', '🍌']
// console.log(foodSlice2); //['🍐', '🍌', '🍅', '🍇', '🥔', '🥑']
// console.log(foodSlice3); //['🍎', '🥕', '🍐', '🍌', '🍅', '🍇', '🥔', '🥑']

//splice
// const months = ["Jan", "February", "March", "April"];

// months.splice(0, 1); //remove 1 element from 0
// months.splice(1, 1, "June"); //['Jan', 'June', 'March', 'April']
// months.splice(0, 1, "December", "January"); //['December', 'January', 'February', 'March', 'April']
// console.log(months); //['February', 'March', 'April']

//sort
// const months = ["Jan", "February", "March", "April"];
// const numbers = [1, 5, 80, 9, 6];
// months.sort();
// // numbers.sort(); //[1, 5, 6, 80, 9]
// numbers.sort((a, b) => {
//   return a - b;
// }); //[1, 5, 6, 9, 80]

// numbers.sort((a, b) => {
//   return b - a;
// }); //[80, 9, 6, 5, 1]
// console.log(months);
// console.log(numbers);

//reverse
// const numbers = [1, 2, 3, 4, 5];
// numbers.reverse();
// console.log(numbers); //[5, 4, 3, 2, 1]

//from()

// const str = "1234";
// const numbers = Array.from(str);
// console.log(numbers); // ['1', '2', '3', '4']

// const str1 = "1234";
// const numbers1 = Array.from(str1, (element) => Number(element));
// console.log(numbers1); //[1, 2, 3, 4]

//isArray

// const food = ["🍌", "🍅", "🥔", "🥑"];
// console.log(Array.isArray(food)); //true
// const obj = { foo: 123 };
// console.log(Array.isArray(obj)); //false

//valueOF

// const food = ["🍌", "🍅", "🥔", "🥑"];
// const foodCopy = food.valueOf();
// console.log(foodCopy); //['🍌', '🍅', '🥔', '🥑']

//entries

// const food = ["🍌", "🍅", "🥔", "🥑"];
// const foodEntries = food.entries();
// for (let element of foodEntries) {
//   console.log(element);
// }
// // [0, "🍌"];
// // [1, "🍅"];
// // [2, "🥔"];
// // [3, '🥑']
// [...foodEntries];

//keys
// const food = ["🍌", "🍅", "🥔", "🥑"];
// const foodKeys = food.keys();
// for (let key of foodKeys) {
//   console.log(key);
// }
// 0
// 1
// 2
// 3

//values
// const food = ["🍌", "🍅", "🥔", "🥑"];
// const foodValues = food.values();
// for (let value of foodValues) {
//   console.log(value);
// }
// // 🍌
// // 🍅
// // 🥔
// // 🥑

//reduce
// const numbers = [1, 2, 3, 4];
// function reducer(previousValue, currentValue) {
//   return previousValue + currentValue;
// }
// const sum = numbers.reduce(reducer, 0);
// console.log(sum); //10

//reduceRight
// const numbers = [1, 2, 3, 4];
// function reducer(previousValue, currentValue) {
//   return previousValue + currentValue;
// }
// const sum = numbers.reduceRight(reducer, 0);
// console.log(sum); //10

//flat
// const numbers = [1, 2, 3, [4, [5, [6]]]];
// console.log(numbers); //[1, 2, 3, Array(2)]
// console.log(numbers.flat()); //[1, 2, 3, 4, Array(2)]
// console.log(numbers.flat(2)); // [1, 2, 3, 4, 5, Array(1)]
// console.log(numbers.flat(3)); // [1, 2, 3, 4, 5, 6]
// console.log(numbers.flat(4)); //[1, 2, 3, 4, 5, 6]

//flatMap
// const food = [
//   ["🍌", "🍅"],
//   ["🥔", "🥑"],
// ];
// const result = food
//   .map((array) => {
//     return [array[0] + array[1]];
//   })
//   .flat();
// console.log(result); // ['🍌🍅', '🥔🥑']

// // or

// const result1 = food.flatMap((array) => {
//   return [array[0] + array[1]];
// });
// console.log(result1); // ['🍌🍅', '🥔🥑']
