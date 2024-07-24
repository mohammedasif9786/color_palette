let leftPart = document.querySelector(".fa-home");
let colorId = document.querySelector("#color");
leftPart.addEventListener("click", (e) => {
  let createELe = document.createElement("span");
  createELe.style.background = "red";
  createELe.style.width = 100 % colorId.append(createELe);
});
