// console.log("start");

// setTimeout(function cb() {
//   console.log("callBack");
// }, 5000);

// console.log("end");

// console.log("start");

// document.getElementById("btn").addEventListener("click", function cb() {
//   console.log("callback");
// });

// console.log("end");

console.log("start");

setTimeout(function cbT() {
  console.log("CB SetTimeout");
}, 5000);

fetch("https://api.netflix.com").then(function cbF() {
  console.log("CB Netflix");
});

console.log("end");
