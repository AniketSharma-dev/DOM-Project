function addFriend() {
  var istatus = document.querySelector("p");
  var button = document.querySelector(".add");

  var flag = 0;

  button.addEventListener("click", function () {
    if (flag == 0) {
      istatus.innerHTML = "Friends";
      istatus.style.color = "green";
      button.innerHTML = "Remove";
      button.style.backgroundColor = "red";
      flag = 1;
    } else {
      istatus.innerHTML = "Stranger";
      istatus.style.color = "red";
      button.innerHTML = "Add Friend";
      button.style.backgroundColor = "Green";
      flag = 0;
    }
  });
}

function heart() {
  var update = document.querySelector(".update");
  var heart = document.querySelector("i");

  update.addEventListener("dblclick", function () {
    heart.style.transform = "translate(-50%, -50%) scale(2)";
    heart.style.opacity = 0.9;

    setTimeout(() => {
      heart.style.opacity = 0;
    }, 1550);
    setTimeout(() => {
      heart.style.transform = "translate(-50%, -50%) scale(0)";
    }, 1500);
  });
}

var main = document.querySelector("body");
var crsr = document.querySelector(".cursor");

main.addEventListener("mousemove", (e) => {
  console.log(e);
  crsr.style.left = e.pageX + "px";
  crsr.style.top = e.pageY + "px";
});

heart();
addFriend();
