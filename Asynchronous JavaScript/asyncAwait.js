// to specifu that the function is asynchronous
const getTodos = async () => {
  // wait for the fetch to be finished then assign it to the response constent
  const response = await fetch("todoss.json");

  //throwing our own error - this will make our async function return a rejected promise
  if (response.status !== 200) {
    throw new Error("connot fetch the data");
  }
  // wait for the async response to be returned
  // the await makes is easy to chain promises sequentially
  const data = await response.json();

  // the async function will return a promise and the data constent must be returned in order to access it
  return data;
};

getTodos()
  .then((data) => console.log("resolved: ", data))
  .catch((err) => console.log("rejected: ", err.message));
