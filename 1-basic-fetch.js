const url = "https://jsonplaceholder.typicode.com/users";

function getData() {
  fetch(url)
    .then((res) => {
      if (!res.ok) throw new Error("was not a valid response!");
      return res.json(); // method to extract JSON string and convert it to an Object
    })
    .then((dataObj) => {
      console.log(dataObj);
    })
    .catch((err) => {
      console.warn(err.message);
    });
}

// getData();
