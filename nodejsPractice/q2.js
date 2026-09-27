function checkEligibility(age) {
  return new Promise((resolve, reject) => {
    if (age >= 18) {
      resolve("Eligible");
    } else {
      reject("Not Eligible");
    }
  });
}

checkEligibility(20)
  .then((result) => console.log(result))
  .catch((error) => console.error(error));