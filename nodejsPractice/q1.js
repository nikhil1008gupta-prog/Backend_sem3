const fetchPromise = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Data fetched successfully");
  }, 2000);
});

fetchPromise.then((message) => {
  console.log(message);
});