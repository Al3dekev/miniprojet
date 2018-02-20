/*
* Lauchment Class of the P2P chat application.
* The World have to start in a first way.
*
*
*/

function ApplicationLoader(){

	/* No Attributs */


	// Constructeur
	this._construct = function () {
        var electronLoaded = new ElectronInit(600,400);

	};

	this.creatUser = function(){
		var $ = document.querySelector.bind(document);
		var input = document.querySelector(".form-control");
		var bouton = document.querySelector(".bouton");
		bouton.onclick = function() {
				var name = false;
				name = input.value;
				if (name == false) {
					alert("Veuillez mettre un nom !");
				} else {
					var user = new Entity();
					user.setName(name);
					localStorage.setItem("pseudo", name);
					console.log(user.getName(),"user");
					document.location.href = 'pageaccueil.html';
				}

	}

	// var bouton = $(".creatUserForm .bouton");
  // bouton.onclick = function() {
  //   var elem = $(".creatUserForm")
  //   elem.parentNode.removeChild(elem);
  // }

	this.welcome = function(){

	}
}
}
