const Btn = document.getElementsByClassName("btn");
const Container = document.getElementsByClassName("container");
const Text = document.getElementsByClassName("text");
let color = ["red", "blue", "green", "yellow", "orange"];
Btn[0].addEventListener("click", function () {
  let random = Math.floor(Math.random() * color.length);
  Container[0].style.backgroundColor = color[random];
  Text[0].innerHTML = color[random];
});
