// Let count to 0

let count = 0;

// selecting elements

const btns = document.querySelectorAll(".btn");
const value = document.querySelector("#value");

// setting up function

btns.forEach(function (items) {
  items.addEventListener("click", function (e) {
    const hasClass = e.currentTarget.classList;
    if (hasClass.contains("decrease")) {
      count--;
      value.textContent = count;
    } else if (hasClass.contains("increase")) {
      count++;
      value.textContent = count;
    } else {
      count = 0;
      value.textContent = count;
    }
    if (count < 0) {
      value.style.color = "red";
    } else if (count > 0) {
      value.style.color = "green";
    } else value.style.color = "black";
  });
});
