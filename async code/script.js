const btn = document.querySelector(".btn");

// console.log(btn);

function returnPromiseClick(element, method) {
  return new Promise((resolve) => {
    element.addEventListener(method, resolve);
  });
}

returnPromiseClick(btn, "click").then((e) => {
  console.log("Clicked");
  console.log(e);
});
