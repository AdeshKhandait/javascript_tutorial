const btns = document.querySelectorAll("button");

document.addEventListener(
  "click",
  () => {
    console.log("Clicked on Document");
  }
  //   { capture: false }
);

document.body.addEventListener(
  "click",
  (e) => {
    //e.stopPropagation();
    console.log("Clicked on Body");
  },
  { capture: true }
);

btns.forEach(
  (btn) => {
    btn.addEventListener("click", (e) => {
      e.stopPropagation();
      console.log("Clicked Button");
    });
  }
  //   { capture: true }
);

// document
//   body
//     button
