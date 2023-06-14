/* Promises are particularly useful when dealing with asynchronous tasks that may take an 
unknown amount of time to complete, such as making API requests, reading files,
or fetching data from a database. */

// Example: Fetching data from an API using Promises

// Function to make an API request
function fetchData() {
  return new Promise(function (resolve, reject) {
    // Simulating an API request with a setTimeout
    setTimeout(function () {
      // Simulating a successful response
      var data = { name: "John", age: 30 };
      resolve(data);

      // Simulating an error response
      // reject("Error: Failed to fetch data");
    }, 2000);
  });
}

console.log(fetchData()); // here you can see the promise to resolve it we use .then

// Calling the fetchData function
fetchData()
  .then(function (response) {
    console.log("Data:", response);
    // Process the fetched data here
  })
  .catch(function (error) {
    console.error("Error:", error);
    // Handle the error here
  });

console.log("Fetching data...");
