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

var update = document.querySelector(".update");
var heart = document.querySelector("i");

update.addEventListener("dblclick", function () {
  console.log("hell");

  heart.style.transform = ;
});

addFriend();
