	var electron = require('electron');
	var app = electron.app;
	var BrowserWindow = electron.BrowserWindow;
	
app.on('ready', function(){
	var win = new BrowserWindow({
		width:1200,
		height:600
		
		
	})
	
	win.loadURL('file://' + __dirname + '/pagededemarrage.php');
	win.show();
})