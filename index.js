/* Library required */
var fs = require('fs');
var electron = require('electron');
var BrowserWindow = electron.BrowserWindow;
var nativeImage = electron.nativeImage;
var app = electron.app;

var entityAssets = require("./script/EntityAssets.js");
var graphicAssets = require('./script/GraphicAssets.js');
var Launch = require('./script/Launcher.js');
/* Library required */

var ApplicationLoader = Launch.ApplicationLoader;

var loadApp = new ApplicationLoader(400, 600, 800, 1200, false,BrowserWindow);
loadApp.appLoad();
