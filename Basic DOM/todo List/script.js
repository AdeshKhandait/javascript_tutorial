// Select all element
const form = document.querySelector("#new-item-form");
const list = document.querySelector("#list");
const input = document.querySelector("#item-input");

// Check element
// console.log(form);
// console.log(list);
// console.log(input);
// when I submit the form add a element to list

form.addEventListener("submit", (e) => {
  e.preventDefault();
  //  Create new new element and append to list
  const new_ele = document.createElement("div");

  //  insert the value in inner text
  new_ele.innerText = input.value;

  //  Add class to newly create ele
  new_ele.classList.add("list-item");

  //  Append new ele to list
  list.appendChild(new_ele);

  //  clear the input
  input.value = "";
  new_ele.addEventListener("click", () => {
    list.removeChild(new_ele);
  });
});

list.addEventListener("click", function (e) {
  list.removeChild(e.target);
});
