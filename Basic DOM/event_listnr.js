// const bn = document.querySelector("[data-btn]");
// console.log(bn);

// const input = document.querySelector("[data-ipt]");
// console.log(input);

// const form1 = document.querySelector("[data-form]");
// console.log(form);

// function printClick() {
//   console.log("Clicked");
// }

// function chnge() {
//   console.log("Changed");
// }

// bn.addEventListener("click", printClick);
// bn.removeEventListener("click", printClick);

// input.addEventListener("input", chnge);

// form.addEventListener("submit", (e) => {
//   e.defaultPrevented();
//   console.log("Form Submitted");
// });

// anchor
const anc = document.querySelector("[data-link]");
console.log(anc);

anc.addEventListener("click", (e) => {
  e.preventDefault();
  console.log("Prevent to redirect");
});
