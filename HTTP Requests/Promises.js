// Promise example

// const getSomething = () => {
//     return new Promise((resolve, reject) => {
//       //resolve("some data");
//       reject("some error");
//     });
//   };

//   getSomething()
//     .then((data) => {
//       console.log(data);
//     })
//     .catch((err) => {
//       console.log(err);
//     });

const getTodos = (resource) => {
  const request = new XMLHttpRequest();

  return new Promise((resolve, reject) => {
    request.addEventListener("readystatechange", () => {
      if (request.readyState === 4 && request.status === 200) {
        const data = JSON.parse(request.responseText);
        resolve(data);
      } else if (request.readyState === 4) {
        reject("could not fetch the data");
      }
    });
    request.open("GET", resource);
    request.send();
  });
};

getTodos("todos.json")
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });

//   Chaining Promises

getTodos("todos.json")
  .then((data) => {
    console.log(data);
    return getTodos("todos2.json");
  })
  .then((data) => {
    console.log(data);
    return getTodos("todos.json");
  })
  .then((data) => {
    console.log(data);
    return getTodos("todos2.json");
  })
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });
