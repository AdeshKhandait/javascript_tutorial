// const URL = "https://jsonplaceholder.typicode.com/posts";

// async function sent() {
//   const response = await fetch(URL, {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({
//       title: "New Post",
//     }),
//   });
//   const post = await response.json();
//   console.log(post);
// }

// sent();

const URL2 = "https://jsonplaceholder.typicode.com/comments?postId=1";

async function comment() {
  const response = await fetch(URL2);
  const data = await response.json();
  console.log(data);
}

comment();
