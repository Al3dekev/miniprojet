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
     *
     */
    this.pageLinkName;


    /**
     *
     * @param namePage
     * @constructor
     */
    this._construct = function(){
        //this.setPageLinkName(namePage);



    };

    this.startPage = function(){
        //electronLoaded.addWindow(this.getPageLinkName());
    };


    // LISTAGE GET/SET

    this.getPageLinkName = function(){
        return this.pageLinkName;
    }

    this.setPageLinkName = function(PLN){
        this.pageLinkName = PLN;
    }

    this._construct;
}
exports.PageAnalysisManagement = PageAnalysisManagement;


/**
 * Gère les events de la Page de Démarrage
 * @constructor
 */
function PageDemarrage(){
    PageAnalysisManagement.call(this);


/* No Attributes */


    /**
     *
     * @private
     */
    this._construct = function(){};

    /**
     *
     */
    this.startPage = function(){
        var $ = document.querySelector.bind(document);
        var body = $("body"); // body selection
        body.id = "pdd-main-background";

        var divPageDem = document.createElement("div");
        divPageDem.id="PageDemarrage";
        divPageDem.style.display="inline";
        body.appendChild(divPageDem);

        var divTitle = document.createElement("div");
        divTitle.id="PDD-Title";
        divPageDem.appendChild(divTitle);

        var h1 = document.createElement("h1");
        h1.className="display-2 mainTitle";
        h1.innerHTML="Talkin' & Peerin'";
        divTitle.appendChild(h1);

        var spanTitle = document.createElement("span");
        spanTitle.className="mainTitle2";
        spanTitle.innerHTML="COMMUNICATION";
        divTitle.appendChild(spanTitle);



        var form = document.createElement("form");
        /*form.method="POST";*/
        form.className="PDD-form";
        divPageDem.appendChild(form);

        var title = document.createElement("h2");
        title.className="sub-title";
        title.innerHTML="Bienvenue";
        form.appendChild(title);

        var cuf = document.createElement("div");// cuf: createUserForm
        cuf.className="creatUserForm";
        form.appendChild(cuf);

        var divInputToWriteName = document.createElement("div");
        divInputToWriteName.className="enterName";
        cuf.appendChild(divInputToWriteName);
        var inputToWriteName = document.createElement("input");
        inputToWriteName.className="form-control";
        inputToWriteName.type="text";
        inputToWriteName.placeholder="Entrez votre nom...";
        divInputToWriteName.appendChild(inputToWriteName);

        var br = document.createElement("br");
        cuf.appendChild(br);

        var divBtn = document.createElement("div");
        divBtn.className="btn-valider";
        cuf.appendChild(divBtn);
        var inputBtn = document.createElement("button");
        inputBtn.className="btn btn-info bouton";
        inputBtn.innerHTML = "Valider";
        inputBtn.type="button";
        divBtn.appendChild(inputBtn);



    };



    /**
     * Permet de supprimer la page de la page :sic:
     */
    this.removePage = function(){
        var $ = document.querySelector.bind(document);
        var body = $("body");
        var mainDiv = $("#PageDemarrage");

        body.removeAttribute("id");
        mainDiv.remove();
    };



this._construct();
}
exports.PageDemarrage = PageDemarrage;


/******************************************************/


/**
 *
 * @constructor
 */
function PageAccueil(){

    /* pas d'Attributs */

    this._construct = function (){};

    this.startPage = function(){

        var $ = document.querySelector.bind(document);
        var body = $("body");

        // div1
        var div1 = document.createElement("div");
        div1.id="pageaccueil";
        body.appendChild(div1);

            // div1_1
            var div1_1 = document.createElement("div");
            div1_1.className="row ligne1";
            div1.appendChild(div1_1);

                //div1_1_1
                var div1_1_1 = document.createElement("div");
                div1_1_1.className="col-md-4";
                div1_1.appendChild(div1_1_1);

                    //div1_1_1_1
                    var div1_1_1_1 = document.createElement("div");
                    div1_1_1_1.className="size-card card card-body";
                    div1_1_1.appendChild(div1_1_1_1);

                //div1_1_2
                var div1_1_2 = document.createElement("div");
                div1_1_2.className="col-md-4";
                div1_1.appendChild(div1_1_2);

                    //div1_1_2_1
                    var div1_1_2_1 = document.createElement("div");
                    div1_1_2_1.className="card-body maintitre";
                    div1_1_2.appendChild(div1_1_2_1);

                        //h11_1_2_1_1
                        var h11_1_2_1_1 = document.createElement("h1");
                        h11_1_2_1_1.className="titre";
                        h11_1_2_1_1.innerHTML = "Talkin' and Peerin'";
                        div1_1_2_1.appendChild(h11_1_2_1_1);


                        //span1_1_2_1_2
                        var span1_1_2_1_2 = document.createElement("span");
                        span1_1_2_1_2.innerHTML="COMMUNICATION";
                        div1_1_2_1.appendChild(span1_1_2_1_2);

                //div1_1_3
                var div1_1_3 = document.createElement("div");
                div1_1_3.className="col-md-4";
                div1_1.appendChild(div1_1_3);

                    //div1_1_3_1
                    var div1_1_3_1 = document.createElement("div");
                    div1_1_3_1.className="bouton";
                    div1_1_3.appendChild(div1_1_3_1);

                        //a1_1_3_1_1
                        var a1_1_3_1_1 = document.createElement("a");
                        a1_1_3_1_1.className="size-bouton btn btn-outline-secondary";
                        a1_1_3_1_1.innerHTML="Se déconnecter";
                        div1_1_3_1.appendChild(a1_1_3_1_1);



            //div1_2
            var div1_2 = document.createElement("div");
            div1_2.className="row";
            div1.appendChild(div1_2);

                //div1_2_1
                var div1_2_1 = document.createElement("div");
                div1_2_1.className="col-md-4";
                div1_2.appendChild(div1_2_1);

                    //div1_2_1_1
                    var div1_2_1_1 = document.createElement("div");
                    div1_2_1_1.className="card listegroupe";
                    div1_2_1.appendChild(div1_2_1_1);

                        //div1_2_1_1_1
                        var div1_2_1_1_1 = document.createElement("div");
                        div1_2_1_1_1.className="back card-header";
                        div1_2_1_1_1.innerHTML="Liste des groupes";
                        div1_2_1_1.appendChild(div1_2_1_1_1);

                        //div1_2_1_1_2
                        var div1_2_1_1_2 = document.createElement("div");
                        div1_2_1_1_2.className="listeDuGroupe list-group list-group-flush";
                        div1_2_1_1.appendChild(div1_2_1_1_2);

                //div1_2_2
                var div1_2_2 = document.createElement("div");
                div1_2_2.className="col-md-4";
                div1_2.appendChild(div1_2_2);

                    //div1_2_2_1
                    var div1_2_2_1 = document.createElement("div");
                    div1_2_2_1.className="card popup-welcome";
                    div1_2_2.appendChild(div1_2_2_1);

                        //span1_2_2_1_1
                        var span1_2_2_1_1 = document.createElement("span");
                        span1_2_2_1_1.className="glyphicon glyphicon-remove";
                        span1_2_2_1_1.style.textAlign="right";
                        span1_2_2_1_1.style.marginLeft="93%";
                        div1_2_2_1.appendChild(span1_2_2_1_1);

                        //div1_2_2_1_2
                        var div1_2_2_1_2 = document.createElement("div");
                        div1_2_2_1_2.className="txt";
                        div1_2_2_1_2.innerHTML="Bienvenue sur notre Application de tchat en P2P, j'espere que vous l'apprecieraient ! Elle est toujours en cours de developpement et de nouvelles fonctionnalités seront a venir, donc soyez cool avec nous et bonne utilisation !<br><br> - La Direction";
                        div1_2_2_1.appendChild(div1_2_2_1_2);


                    //button1_2_2_2
                    var button1_2_2_2 = document.createElement("button");
                    button1_2_2_2.type="button";
                    button1_2_2_2.className="btn btn-secondary btn-lg create-groupe";
                    div1_2_2.appendChild(button1_2_2_2);

                        //span1_2_2_2_1
                        var span1_2_2_2_1 = document.createElement("span");
                        span1_2_2_2_1.className="glyGroupe glyphicon glyphicon-arrow-left";
                        button1_2_2_2.appendChild(span1_2_2_2_1);

                        //span1_2_2_2_2
                        var span1_2_2_2_2 = document.createElement("span");
                        span1_2_2_2_2.className="txt-btn-create-groupe";
                        span1_2_2_2_2.innerHTML="Création d'un groupe";
                        button1_2_2_2.appendChild(span1_2_2_2_2);

                //div1_2_3
                var div1_2_3 = document.createElement("div");
                div1_2_3.className="col-md-4";
                div1_2.appendChild(div1_2_3);

                    //div1_2_3_1
                    var div1_2_3_1 = document.createElement("div");
                    div1_2_3_1.className="card listeconnecte";
                    div1_2_3.appendChild(div1_2_3_1);


                        //div1_2_3_1_1
                        var div1_2_3_1_1 = document.createElement("div");
                        div1_2_3_1_1.className="titre-personne card-header";
                        div1_2_3_1_1.innerHTML="Liste des personnes en ligne";
                        div1_2_3_1.appendChild(div1_2_3_1_1);

                        //div1_2_3_1_2
                        var div1_2_3_1_2 = document.createElement("div");
                        div1_2_3_1_2.className="list-group list-group-flush";
                        div1_2_3_1.appendChild(div1_2_3_1_2);

                            //div1_2_3_1_2_1
                            var div1_2_3_1_2_1 = document.createElement("div");
                            div1_2_3_1_2_1.className="liste-de-personne";
                            div1_2_3_1_2.appendChild(div1_2_3_1_2_1);

                            //div1_2_3_1_2_1_1
                            var div1_2_3_1_2_1_1 = document.createElement("div");
                            div1_2_3_1_2_1_1.className="personne";
                            div1_2_3_1_2_1.appendChild(div1_2_3_1_2_1_1);
                            //boucle de gens en ligne ici en html

                                //span1_2_3_1_2_1_1_1
                                var span1_2_3_1_2_1_1_1 = document.createElement("span");
                                span1_2_3_1_2_1_1_1.className="new-personne-ok glyphicon glyphicon-ok-circle";
                                div1_2_3_1_2_1_1.appendChild(span1_2_3_1_2_1_1_1);

                                //a1_2_3_1_2_1_1_2
                                var a1_2_3_1_2_1_1_2 = document.createElement("a");
                                a1_2_3_1_2_1_1_2.className="size-personne";
                                a1_2_3_1_2_1_1_2.innerHTML="Rejoindre le tchat";
                                div1_2_3_1_2_1_1.appendChild(a1_2_3_1_2_1_1_2);


    };


    this.removePage = function(){
        var $ = document.querySelector.bind(document);
        var body = $("body");
        var mainDiv = $("#pageaccueil");

        body.removeAttribute("id");
        mainDiv.remove();
    };

    this._construct();
}
exports.PageAccueil = PageAccueil;


/*******************************************************************/
/**
 *
 * @constructor
 */
function PageDeDiscussion(){

    this._construct = function(){};

    this.startPage = function(){






    };

    this.removePage = function(){
        var $ = document.querySelector.bind(document);
        var body = $("body");
        var mainDiv = $("#Page-Discussion");

        body.removeAttribute("id");
        mainDiv.remove();
    };

    this._construct();
}
exports.PageDeDiscussion = PageDeDiscussion;