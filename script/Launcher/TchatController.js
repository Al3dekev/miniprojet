var screenWindow = document.querySelector(".cadre-window-conv");
var input = document.querySelector(".btn-enterMessage");
var bouton = document.querySelector(".btn-envoyer");

  bouton.onclick = function() {
    var message = input.value;
    // document.querySelector("p").innerHTML = localStorage.getItem("pseudo");
    var li = document.createElement("li");
    li.style.color = "white";
    li.innerHTML = message;
    screenWindow.appendChild(li);
  }
