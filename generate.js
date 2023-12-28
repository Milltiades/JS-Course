export default function sayHello() {
  console.log("Zdarova sastav!");
}

function sayBye() {
  console.log("aba he!");
}

class CreatorClass {
  constructor(model, age) {
    this.model = model;
    this.age = age;
  }
  vehicleVoice() {
    console.log(`${this.model} has voice Wrooom Wroom`);
  }
}

export { sayBye as bye, CreatorClass as Car };
