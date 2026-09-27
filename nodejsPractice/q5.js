function getData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Data received");
    }, 2000);
  });
}


async function displayData() {
  try {
    const result = await getData();
    console.log(result);
  } catch (error) {
    console.error(error);
  }
}

displayData();