/*
* Classe d'initiatialisation des parametres de base et requis au lancement d'Electron
*
*/

function ElectronInit(){
	
	this.wsize;
	this.hsize;
	
	this._construct(largeur,hauteur){
		this.setWsize(largeur);
		this.setHsize(hauteur);
		var electron = require('electron');
		var app = electron.app;
		var BrowserWindow = electron.BrowserWindow;
	
		app.on('ready', function(){
			var win = new BrowserWindow({
				width:this.getWsize(),
				height:this.getWsize()
			});
			
			win.loadURL('file://' + __dirname + '/pagededemarrage.html');
			win.show();
		})
		
		
	} // Constructeur End
	
	this.addWindow = function(fileName){
        var win = new BrowserWindow({
            width:this.getWsize(),
            height:this.getWsize()
        });

        win.loadURL('file://' + __dirname + '/'+fileName);
        win.show();
	};

	
	// LISTAGE GET/SET
	
  this.getWsize = function(){
    return this.wsize;
  };

  this.setWsize = function(wsize){
    this.wsize = wsize;
  };

  this.getHsize = function(){
    return this.hsize;
  };

  this.setHsize = function(hsize){
    this.hsize = hsize;
  };
	
}