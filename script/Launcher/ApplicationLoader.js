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

        var input = document.querySelector(".form-control");
        var bouton = document.querySelector(".bouton");
        bouton.onclick = function() {
            name = input.value;
            console.log(name);
        }

	}
	
	this.welcome = function(){

	}
	
}



