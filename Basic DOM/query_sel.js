const ele_id = document.querySelector("#div-id");
console.log(ele_id);

const ele_class = document.querySelectorAll(".div-class");
console.log(ele_class);
ele_class.forEach((div) => (div.style.color = "red"));

const ipt = document.querySelector("input");
console.log(ipt);
