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

function elements() {
  var elem = document.querySelectorAll(".elem"); // getting elems as nodelsit from

  elem.forEach(function (val) {
    // using foreach because it run till the loop did'nt finish
    // console.log(val.children); // output :- 0 : h1, 1 : img, length : 2
    // console.log(val.childNodes); // output :-  0 : text, 1 : h1, 2 : text, 3 : img, 4 : text, length : 5

    val.addEventListener("mousemove", function (e) {
      // val.childNodes return a list of child node with empty text node and its alternative is chidrens which return only is childs
      val.childNodes[3].style.left = e.x + "px"; // for image follow mouse cursor
    });
    val.addEventListener("mouseenter", function () {
      val.childNodes[3].style.opacity = 1; // setting image opacity to 1 by default set to 0
    });
    val.addEventListener("mouseleave", function () {
      val.childNodes[3].style.opacity = 0; // on leave setting opacity of image to 0
    });
  });
}

elements();
customCursor();
heart();
addFriend();
