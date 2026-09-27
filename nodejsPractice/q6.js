function fetchFailingData() {
 
  return Promise.reject("Simulated network failure");
}

async function handleData() {
  try {
    await fetchFailingData();
  } catch (error) {
    console.log("Error: Unable to fetch data");
  }
}

handleData();