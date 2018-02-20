/* LIBRARIES */
var fs = require('fs');
var entityAssets = require("./EntityAssets.js");
//var graphicAssets = require('GraphicAssets.js');
var Launcher = require('./Launcher.js');
/* LIBRARIES */
/*
 * 1. PageAnalysisManagement
 * 2. PageDemarrage
 * 3. PageAccueil
 * 4. PageDeDiscussion
 */


/**
 * DO NOT INSTANCE THIS CLASS
 * @param namePage
 * @constructor
 */
function PageAnalysisManagement(){


    /**
     * Has to be overriden
     */
    this.startEventPage = function(){};
}
exports.PageAnalysisManagement = PageAnalysisManagement;


/**
 * Gère les events de la Page de Démarrage
 * @constructor
 */
function PageDemarrage(){
    PageAnalysisManagement.call(this);

    /**
     * Commencer l'evenement de la page de demarrage
     */
    this.startEventPage = function(){

        var body = $("body");
        body.id = "pdd-main-background";


    };

}
exports.PageDemarrage = PageDemarrage;


/******************************************************/


/**
 *
 * @constructor
 */
function PageAccueil(){


    /**
     * Commencer l'evenement de la page d'acceuil
     */
    this.startEventPage = function() {

        var $ = document.querySelector.bind(document);
        var afficheName = $(".size-card");
        var p = document.createElement("p");
        afficheName.appendChild(p);
        $("p").innerHTML = localStorage.getItem("pseudo");
        var bouton = $(".glyphicon-remove");
        var popup = $(".popup-welcome");
        bouton.onclick = function () {
            popup.style = "display : none";
        };
    }
}
exports.PageAccueil = PageAccueil;


/*******************************************************************/
/**
 *
 * @constructor
 */
function PageDeDiscussion(){


    this.startEventPage = function(){


    };

}
exports.PageDeDiscussion = PageDeDiscussion;


