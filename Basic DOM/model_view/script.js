// Selecting the model
const model = document.querySelector("#model");
const openModelButton = document.querySelector("#open-model-btn");
const closeModelButton = document.querySelector("#close-model-btn");
const overlay = document.querySelector("#overlay");
const closeBtn = document.querySelector("#close-btn");

//Adding the event listner
openModelButton.addEventListener("click", () => {
  model.classList.add("open");
  overlay.classList = "open";
});

closeModelButton.addEventListener("click", () => {
  model.classList.remove("open");
  overlay.classList.remove("open");
});

closeBtn.addEventListener("click", () => {
  overlay.classList.remove("open");
  model.classList.remove("open");
});
