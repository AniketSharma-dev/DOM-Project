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

function customCursor() {
  var main = document.querySelector("body");
  var crsr = document.querySelector(".cursor");

  main.addEventListener("mousemove", (e) => {
    crsr.style.left = e.clientX + "px";
    crsr.style.top = e.clientY + "px";

    /* pageX and pageY use for page event like it only follow page area but in client it follow client screen  */
    // crsr.style.left = e.pageX + "px";
    // crsr.style.top = e.pageY + "px";
  });

  window.addEventListener("load", () => {
    crsr.style.left = "-50px"; // Hide the cursor initially off-screen
    crsr.style.top = "-50px";
  });
}

var elem = document.querySelectorAll(".elem");

elem.forEach(function (val) {
  val.addEventListener("mouseenter", function () {
    val.style.cursor = "pointer";
    console.log(val.childNodes[3]);

    val.childNodes[3].style.opacity = 1;
  });
  val.addEventListener("mouseleave", function () {
    val.childNodes[3].style.opacity = 0;
  });
});

// var elem = document.querySelector(".elem");
// var image = document.querySelector(".img");

// elem.addEventListener("mousemove", function (e) {
//   console.log(e);

//   image.style.left = e.x + "px";
//   image.style.top = e.y + "px";
//   image.style.opacity = 1;
// });
// elem.addEventListener("mouseleave", function () {
//   image.style.opacity = 0;
// });

// customCursor();
heart();
addFriend();
