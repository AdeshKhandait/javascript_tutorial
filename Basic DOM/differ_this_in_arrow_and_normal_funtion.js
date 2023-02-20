const btn = document.querySelector("[data-btn]");
console.log(btn);

// Arraow belong to window
btn.addEventListener("click", (e) => {
  console.log("Arrow");
  console.log(this);
});

// function to object which calling this fucntion
btn.addEventListener("click", function (e) {
  console.log("Function");
  console.log(this);
});
