/* LIBRARIES */
var fs = require('fs');
var entityAssets = require("./EntityAssets.js");
var graphicAssets = require('./GraphicAssets.js');
//var Launcher = require('Launcher.js');
/* LIBRARIES */
/*
 * 1. ApplicationLoader
 * 2. ElectronInit
 * 3. TchatController
 */


/**
 * Lauchment Class of the P2P chat application.
 * @constructor
 */
function ApplicationLoader(user){

    this.that = this;
    this.localUser = user;
    var electron = require('electron');

    var BrowserWindow = electron.BrowserWindow;
    var nativeImage = electron.nativeImage;
    var electronLoaded = new ElectronInit(600, 400, 1200, 800, false,BrowserWindow,nativeImage);

    /**
     * constructeur
     *
     */
    this._construct = function () {
        // vide

    }


    this.appLoad = function(){
        var app = electron.app;
        app.on('ready', function() {
            electronLoaded.initiate();
        });

    };


    /**
     * @dependancy -> class PageDemarrage
     * @param HTMLtxtarea
     * @param HTMLbtnvalider
     * @param redirectedPage
     */
    this.createUser = function(name){

        var register = require("register-multicast-dns");
        var topology = require("fully-connected-topology");
        var calcPort = require('hash-to-port');


        var localUser = new entityAssets.UserEntity(name);
        //localUser.nameToAddress();
        register(localUser.getName());
        // Recupere le nom inscrit par l'utilisateur et le stock





        // var bouton = $(".creatUserForm .bouton");
        // bouton.onclick = function() {
        //   var elem = $(".creatUserForm")
        //   elem.parentNode.removeChild(elem);
        // }


    }; // createUser

    /**
     * Lancé lorsque l'utilisateur a entré son pseudo
     */
    this.welcome = function(){
        var $ = document.querySelector.bind(document);
        //Récupération du nom et affichage
        var afficheName = $(".size-card");
        var el = document.createElement("span");
        afficheName.appendChild(el);
        el.innerHTML = this.localUser.getName();

        //Popup disparition
        var bouton = $(".glyphicon-remove");
        var popup = $(".popup-welcome");
        bouton.onclick = function() {
            popup.style = "display : none";
        };
        var deconnexion = $("#pageaccueil .bouton .size-bouton");

        deconnexion.onclick = function(){
            this.disconnect();
        };
    }



    /**
     *
     */
    this.disconnect = function(user){
        this.localUser = null;
        delete this.localUser;
    };

    this._construct();
}
exports.ApplicationLoader = ApplicationLoader;

/************************************************************************************/


/**
 * Classe d'initiatialisation des parametres de base et requis au lancement d'Electron
 *
 * @constructor
 */
function ElectronInit (minWsize, minHsize, maxWsize, maxHsize, fullscreenOption,BrowserWindow,nativeImage){

    this.that = this;
    this.minWsize = minWsize;
    this.minHsize = minHsize;
    this.maxWsize = maxWsize;
    this.maxHsize = maxHsize;
    this.fullscreenOption = fullscreenOption;
    this.title = "Talkin' & Peerin'"
    this.BrowserWindow = BrowserWindow;
    this.nativeImage = nativeImage;


    /**
     *
     * @private
     */
    this._construct = function(){
        // vide
    };


    this.initiate = function(){
        var image = this.nativeImage.createFromPath("../logo.png");


        var win = new this.BrowserWindow();
        win.setTitle(this.title);
        win.setSize(this.minWsize,this.minHsize);
        win.setMinimumSize(this.minWsize,this.minHsize);
        win.setMaximumSize(this.maxWsize,this.maxHsize);
        win.setFullScreenable(this.fullscreenOption);
        win.setIcon(image); //16x16
        //win.setMenu(null);

        win.loadURL("file:///C:/Users/Dell-E6530/Desktop/Mini-Projet%20-%20Formation%20DL/2.%20Clone%20Projet/miniprojet/pagededemarrage.html"); // probleme de link a regler
        win.show();
    }


    /**
     *
     * @param fileName
     */

    this.changeWindow = function(fileName){
        var win = new this.BrowserWindow();
        win.loadURL('file://'+fileName);
        win.show();
    };


    // LISTAGE GET/SET

/*    this.getMinWsize = function(){
        return this.minWsize;
    };
    this.setMinWsize = function(minWsize){
        this.minWsize = minWsize;
    };


    this.getMinHsize = function(){
        return this.minHsize;
    };
    this.setMinHsize = function(minHsize){
        this.minHsize = minHsize;
    };


    this.getMaxWsize = function(){
        return this.maxWsize;
    };
    this.setMaxWsize = function(maxWsize){
        this.maxWsize = maxWsize;
    };


    this.getMaxHsize = function(){
        return this.maxHsize;
    };
    this.setMaxHsize = function(maxHsize){
        this.maxHsize = maxHsize;
    };


    this.getFullScreenOption = function(){
        return this.fullscreenOption;
    };
    this.setFullScreenOption = function(fullscreenOption){
        this.fullscreenOption = fullscreenOption;
    };*/

    this._construct();
}
exports.ElectronInit = ElectronInit;

/************************************************************************************/

/**
 * This class is controlling the communication between 2 users
 * @constructor
 */
function TchatController(me,someone) {

    this.myName = me.getName();
    this.someoneName = someone.getName();
    /**
     *
     * @private
     */
    this._construct = function () {
        // le construction s'occupe de preparer et faire le tunnel entre les 2 utilisateurs.
        var $ = document.querySelector.bind(document);
        var screenWindow = $(".cadre-window-conv");
        var txtarea = $(".btn-enterMessage");
        var bouton = $(".btn-envoyer");
        var level = require('level'); // Database management
        var hyperlog = require("hyperlog");
        var register = require('register-multicast-dns');

        var airpaste = require('airpaste');

        var bdd = hyperlog(level(this.myName)+".db");

        var readStream = bdd.createReadStream({
            live:true
        });

        var stream = airpaste();

        stream.on('connection', function (fromMe, toHim) {
            var infoArea = $("#disc-conv .conversation .banderole-conv");
            infoArea.innerHTML = "info> direct connection to "+toHim;

            fromMe.pipe(logs.createReplicationStream({live: true})).pipe(fromMe)
        })
        stream.pipe(log.replicate({
            live:true
        })).pipe(stream);

        readStream.on('data', function(data){
            var val = JSON.parse(data.value);
            var li = document.createElement('li');
            li.style.color = "white";
            li.innerHTML = localStorage.getItem("pseudo") + ": " + val.message; //element a changer pour ajouter msg et pseudo
            screenWindow.appendChild(li);
        });

        bouton.onclick = function () {
            var message = txtarea.value;
            bdd.append(JSON.stringify({
                message: val
            }));




        };




    };





    this._construct();
}
exports.TchatController = TchatController;