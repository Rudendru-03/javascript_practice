// promise --> it is an object which represent the eventually completion or the failure of the asynchronous operation.

// it has : promise.prototype, promise.state -> it has three state : 1. success, 2. failure, 3. pending, promise.result;

// it has promise.then(), promise.catch(), promise.finally() --> these are the methods which are

// used to handle the asynchronous operation.

// it has promise.all(), promise.race(), promise.any() --> these are the methods which are used to handle multiple asynchronous operations.

// function fetchGithubprofile(username) {
//   const url = `https://api.github.com/users/${username}`;

//   fetch(url)
//     .then((response) => {
//       console.log("Response : ", response);
//       if (!response.ok) {
//         throw new Error(`Error : ${(response.message, response.status)}`);
//       }
//       return response.json();
//     })
//     .then((data) => console.log("Data : ", data))
//     .catch((error) => console.log(`An error occurred : ${error.message}`));
// }

// async function fetchGithubprofile(username) {
//   const url = `https://api.github.com/users/${username}`;
//   const response = await fetch(url);
//   if (!response.ok) {
//     throw new Error(`Error : ${(response.message, response.status)}`);
//   }
//   const jsonData = await response.json();
//   console.log("Josn Data : ", jsonData);
// }

// async function fetchGithubprofile3(username) {
//   const url = `https://api.github.com/users/${username}`;
//   try {
//     const response = await fetch(url);
//     if (!response.ok) {
//       throw new Error(`Error : ${(response.message, response.status)}`);
//     }
//     const data = await response.json();
//     console.log(data);
//   } catch (error) {
//     console.log("Failed to fetch Github profile", error);
//   }
// }

// fetchGithubprofile("Rudendru-03");
// fetchGithubprofile2("Rudendru-03");
// fetchGithubprofile3("Rudendru-03");

Promise.resolve();
