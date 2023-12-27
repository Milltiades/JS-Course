// // import fetch from "node-fetch";

// // const promise = fetch("https://jsonplaceholder.typicode.com/todos/1");

// // promise
// //   .then((res) => res.json())
// //   .then((user) => console.log("😇", user.title))
// //   .catch((err) => console.log(err));

// // console.log("synchronous");
// // console.log("synchronous 1");

// // setTimeout((_) => console.log("Timeout 2"), 0);

// // Promise.resolve().then((_) => console.log("Promise 3"));

// // console.log("Synchronous 4");

// const tick = Date.now();
// const log = (v) => console.log(`${v} \n Elapsed: ${Date.now() - tick}`);

// // const codeBlocker = () => {
// //   return new Promise((resolve, reject) => {
// //     let i = 0;
// //     while (i < 1000000) {
// //       i++;
// //     }
// //     resolve("🐷 billion loops done!");
// //   });

// //   return Promise.resolve().then((v) => {
// //     let i = 0;
// //     while (i < 1000000) {
// //       i++;
// //     }
// //     return "🐷  billion loops done";
// //   });
// // };

// // log("Synchronous 1");
// // codeBlocker().then(log);
// // log("Synchronous 2");

// // function promiseHell() {
// //   let userId;
// //   let postId;
// //   let db;

// //   db.then((u) => {
// //     return db.user().then((v) => v.json());
// //   })
// //     .then((u) => {
// //       userId = u.id;
// //       return db.post(userId).then((v) => v.json());
// //     })
// //     .then((p) => {
// //       postId = p.id;
// //       return db.comments(postId).then((v) => v.json());
// //     });
// // }

// const getFruit = async (name) => {
//   const fruits = {
//     pineapple: " 🍍 ",
//     peach: "🍑",
//     strawberry: "🍓",
//   };
//   await delay(1000);
//   return fruits[name];
// };

// // getFruit("peach").then(console.log);

// const makeSmoothie = async () => {
//   const a = getFruit("pineapple");
//   const b = getFruit("strawberry");
//   const smoothie = await Promise.all([a, b]);

//   return smoothie;
// };

// // makeSmoothie().then(console.log);

// const badSmoothie = async () => {
//   try {
//     const a = getFruit("pineapple");
//     const b = getFruit("strawberry");
//     const smoothie = await Promise.all([a, b]);
//     throw "broken!";
//     return smoothie;
//   } catch (error) {
//     console.log(error);
//     return "We are going to be fine...";
//   }
// };

// badSmoothie()
//   .then((val) => console.log({ val }))
//   .catch((err) => console.log({ err }));

// const fruits = ["peach", "pineapple", "strawberry"];
// const smoothie = fruits.map(async (v) => {
//   const emoji = await getFruit(v);
//   log(emoji);
//   return emoji;
// });

// const posts = [
//   {
//     title: "Post One",
//     body: "This is post one",
//   },
//   {
//     title: "Post Two",
//     body: "This is post two",
//   },
// ];

// function getPosts() {
//   setTimeout(() => {
//     let output = "";
//     posts.forEach((post, index) => {
//       output += `<li>${post.title}</li>`;
//     });
//     document.body.innerHTML = output;
//   }, 1000);
// }

// function createPost(post, callback) {
//   setTimeout(() => {
//     posts.push(post);
//     callback();
//   }, 2000);
// }

// createPost({ title: "Post Three", body: "This is post three" }, getPosts);

// const posts = [
//   {
//     title: "Post One",
//     body: "This is post one",
//   },
//   {
//     title: "Post Two",
//     body: "This is post two",
//   },
// ];

// function getPosts() {
//   setTimeout(() => {
//     let output = "";
//     posts.forEach((post, index) => {
//       output += `<li>${post.title}</li>`;
//     });
//     document.body.innerHTML = output;
//   }, 1000);
// }

// function createPost(post) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       posts.push(post);

//       const error = false;
//       if (!error) {
//         resolve();
//       } else {
//         reject("Error: Something went wrong!");
//       }
//     }, 2000);
//   });
// }

// createPost({ title: "Post Three", body: "This is post three" })
//   .then(getPosts)
//   .catch((err) => console.log(err));

// Async / Await
// async function init() {
//   await createPost({ title: "Post Three", body: "This is post three" });

//   getPosts();
// }

// init();

// Async / Await / Fetch
// async function fetchUsers() {
//   const res = await fetch("https://jsonplaceholder.typicode.com/users");

//   const data = await res.json();

//   console.log(data);
// }

// fetchUsers();

//Promise.all
// const promise1 = Promise.resolve("Hello World");
// const promise2 = 10;
// const promise3 = new Promise((resolve, reject) =>
//   setTimeout(resolve, 2000, "Goodbye")
// );

// const promise4 = fetch("https://jsonplaceholder.typicode.com/users").then(
//   (res) => res.json()
// );

// Promise.all([promise1, promise2, promise3, promise4]).then((values) =>
//   console.log(values)
// );

// const ninjaPromise = new Promise((resolve, reject) => {
//   // Do some asynchronous operation
//   if (true) {
//     resolve("Here comes the success!");
//   } else {
//     reject("Oops we have an Error!");
//   }
// });

// ninjaPromise
//   .then((result) => {
//     console.log(result); // Output: Here comes the success!
//   })
//   .catch((error) => {
//     console.error(error); // Output: Oops we have an Error!
//   });

// const fetchData = async () => {
//   try {
//     const response = await fetch(
//       "https://jsonplaceholder.typicode.com/users/1"
//     );
//     const data = await response.json();
//     return console.log(data.name); // Output: returns the fetched data
//   } catch (error) {
//     console.log(error); // Output: returns the error message
//   }
// };

// fetchData();

const workPromise = new Promise((resolve, reject) => {
  if (true) {
    resolve("ოპერაცია წარმატებით შესრულდა");
  } else {
    reject("ოპერაცია წარუმატებელია!");
  }
});

workPromise.then((res) => console.log(res)).catch((err) => console.log(err));

const fetchData = async () => {
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = res.json();
    return console.log(data);
  } catch (error) {
    console.log(error);
  }
};

fetchData();
