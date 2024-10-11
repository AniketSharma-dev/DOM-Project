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
    // using foreach because it run till the size of array or the list
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

function story() {
  var arr = [
    {
      name: "Emma",
      dp: "https://images.unsplash.com/photo-1528962728833-5106fc29b9c8?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      story:
        "https://images.unsplash.com/photo-1727731481816-bf055858e20f?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Olivia",
      dp: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      story:
        "https://images.unsplash.com/photo-1533618561606-3b2a0766d159?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Ava",
      dp: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?q=80&w=1727&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      story:
        "https://plus.unsplash.com/premium_photo-1664046912334-134dbd487444?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Sophia",
      dp: "https://images.unsplash.com/photo-1482555670981-4de159d8553b?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      story:
        "https://images.unsplash.com/photo-1527285286036-1ae743926077?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      name: "Isabella",
      dp: "https://images.unsplash.com/photo-1512310604669-443f26c35f52?q=80&w=1934&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      story:
        "https://images.unsplash.com/photo-1698620625458-340dba2af9ea?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ];

  var storySection = document.querySelector(".main-screen");
  var fullScreen = document.querySelector(".full-screen");
  var cluster = "";

  arr.forEach(function (e, index) {
    cluster += ` <div class="story">
    <img data-index="${index}" src="${e.dp}" alt="${e.name}">
  </div>`;
  });

  storySection.innerHTML = cluster;

  storySection.addEventListener("click", function (e) {
    if (e.target.tagName === "IMG") {
      // Check if you clicked at is image or not
      var index = e.target.getAttribute("data-index"); // Get the number (data-index) of the image you clicked.
      var value = arr[index].story; // Use that index to find the correct story.

      // Start the progress bar
      var progressBar = document.querySelector(".progress-bar");
      progressBar.style.transition = "none"; // Temporarily disable the transition
      progressBar.style.width = "0";

      setTimeout(function () {
        progressBar.style.transition = "width 3s linear"; // Re-enable the transition
        progressBar.style.width = "100%"; // Animate the progress bar to 100% over 3 seconds
      }, 50);

      fullScreen.style.backgroundImage = `url(${value})`; // Set the background image as the story.
      fullScreen.style.display = "block"; // Show story.

      autoClose = setTimeout(function () {
        fullScreen.style.display = "none";
        document.querySelector(".progress-bar").style.width = "0"; // Reset progress bar
      }, 3000);
    }
  });

  var closeButton = document.querySelector(".close-btn");

  closeButton.addEventListener("click", () => {
    fullScreen.style.display = "none";
    clearTimeout(autoClose);
  });
}

story();
elements();
customCursor();
heart();
addFriend();
