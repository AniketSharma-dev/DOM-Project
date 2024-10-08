var add = document.querySelector(".friend button");
var type = document.querySelector(".type p");

var flag = 0;

add.addEventListener("click", function () {
  if (flag == 0) {
    type.textContent = "Friend";
    flag += 1;
  } else {
    type.textContent = "Stranger";
    flag += 0;
  }
});
