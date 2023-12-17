// method -> obj
// function -> global(window, global)

// const video = {
//   title: "a",
//   tags: ["a", "b", "c"],

//   showTags() {
//     this.tags.forEach(function (tag) {
//       console.log(this.title, tag);
//     }, this);
//   },
// };

// video.showTags();

// video.stop = function () {
//   console.log(this);
// };
// video.play();
// video.stop();

// function Video(title) {
//   this.title = title;
//   console.log(this);
// }

// const v = new Video("b"); // {}

// const smth = {
//   title: "Cool Cars",
//   cars: ["mercedes", "opel", "volkswagen"],
//   showCars() {
//     this.cars.forEach(function (car) {
//       console.log(car);
//     });
//   },
// };

// smth.showCars();

// const smth = {
//   title: "Cool Car = ",
//   cars: ["mercedes", "opel", "volkswagen"],
//   showCars() {
//     this.cars.forEach(function (car) {
//       console.log(this.title, car);
//     }, this);
//   },
// };

// smth.showCars();

const dogs = {
  title: "My preferred dog is:",
  dogsArr: ["pitbull", "chihuahua", "pudel"],
  chooseDog() {
    this.dogsArr.forEach(function (dog) {
      console.log(this.title, dog);
    }, this);
  },
};

dogs.chooseDog();
