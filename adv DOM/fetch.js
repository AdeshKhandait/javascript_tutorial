// // using then
// fetch("https://jsonplaceholder.typicode.com/users")
//   .then((response) => {
//     return response.json();
//   })
//   .then((data) => {
//     console.log(data.map((user) => user.name));
//   });

//   using async await
async function names() {
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const users = await response.json();
  console.log(users.map((user) => user.name));
}
console.log(names());

// async function user() {
//   const users = await fetch("https://jsonplaceholder.typicode.com/users");
//   c
// }
// user();
