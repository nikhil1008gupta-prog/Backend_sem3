const loginUser = () => {
  return new Promise((resolve) => setTimeout(() => resolve("1. User Logged In"), 1000));
};

const getUserDetails = () => {
  return new Promise((resolve) => setTimeout(() => resolve("2. Details Fetched"), 1000));
};

const getUserOrders = () => {
  return new Promise((resolve) => setTimeout(() => resolve("3. Orders Fetched"), 1000));
};

loginUser()
  .then((message) => {
    console.log(message);
    return getUserDetails();
  })
  .then((message) => {
    console.log(message);
    return getUserOrders();
  })
  .then((message) => {
    console.log(message);
  });