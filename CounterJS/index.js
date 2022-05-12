const btn = document.querySelectorAll("button");
const count = document.querySelector("#count");
let value = 0;
let isRun = false;
btn.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    let btnId = e.target.id;
    if (btnId === "increment") {
      value++;
    } else if (btnId === "decrement") {
      value--;
    } else if (btnId === "reset") {
      value = 0;
    }
    count.textContent = value;
    if (btnId === "start") {
      isRun = true;
    } else if (btnId === "stop") {
      isRun = false;
      clearInterval(interval);
    }
    if (isRun) {
      interval = setInterval(function () {
        value--;
        count.textContent = value;
        if (value === 0) {
          clearInterval(interval);
        }
      }, 1000);
    }
  });
});
