const fetchUsers = new Promise((resolve) => setTimeout(() => resolve("Users"), 1500));
const fetchProducts = new Promise((resolve) => setTimeout(() => resolve("Products"), 500));
const fetchOrders = new Promise((resolve) => setTimeout(() => resolve("Orders"), 2500));

Promise.all([fetchUsers, fetchProducts, fetchOrders])
  .then((results) => {
    console.log("All data fetched:");
    console.log(results); 
  })
  .catch((error) => console.error("One of the promises failed:", error));