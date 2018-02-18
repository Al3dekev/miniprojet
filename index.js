/* Library required */
var fs = require('fs');
var entityAssets = require("./script/EntityAssets.js");
var graphicAssets = require('./script/GraphicAssets.js');
var Launch = require('./script/Launcher.js');
/* Library required */

var joueur = new entityAssets.UserEntity("Quentin");
console.log(joueur.getName());



var ApplicationLoader = Launch.ApplicationLoader;
var loadApp = new ApplicationLoader();
loadApp.appLoad();
