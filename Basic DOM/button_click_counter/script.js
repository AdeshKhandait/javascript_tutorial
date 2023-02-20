const btns = document.querySelectorAll("[data-clicks]");
// console.log(btns);

btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    const currBtn = parseInt(btn.dataset.clicks);
    btn.dataset.clicks = currBtn + 1;
  });
});
