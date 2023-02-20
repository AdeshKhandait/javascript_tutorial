const ele_id = document.getElementById("div-id");
ele_id.style.color = "red";

// it written an array collection of html so we convert it into array
const ele_class = document.getElementsByClassName("div-class");
console.log(ele_class);
const ele_class_array = Array.from(ele_class);
console.log(ele_class_array);

ele_class_array.forEach((div) => (div.style.color = "green"));
