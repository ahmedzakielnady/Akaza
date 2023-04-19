let menu = document.querySelector(".bars");
let exit = document.querySelector(".exit");
let list = document.querySelector(".links");
let span = document.querySelector(".nav .menu-icon");

span.addEventListener("click", function () {
  list.classList.toggle("active");
  menu.classList.toggle("active");
  exit.classList.toggle("active");
});

//    Current year update
document.querySelector("#current-year").innerText = new Date().getFullYear();