/* LIBRARIES */
var fs = require('fs');
var calcPort = require('hash-to-port');
//var EntityAssets = require("./EntityAssets.js");
var graphicAssets = require('./GraphicAssets.js');
var Launcher = require('./Launcher.js');
/* LIBRARIES */
/*
* 1. Entity
* 2. UserEntity
* 3. UserAnalysisManagement
 */


/**
 * DO NOT INSTANCE THIS CLASS
 * @constructor
 */
function Entity(){
    this.name;
    this.index;
    this.type;



    // LISTAGE GET/SET

    this.getName = function(){
        return this.name;
    }

    this.setName = function(name){
        this.name = name;
    }

    this.getIndex = function(){
        return this.index;
    }

    this.setIndex = function(name){
        this.index = index;
    }

    this.getType = function(){
        return this.type;
    }

    this.setType = function(type){
        this.type = type;
    };

    this.isOnline = function(){
        return true;
    }
}
exports.Entity = Entity;


/******************************/

/**
 * Create users and manage them
 * @param name
 * @constructor
 */
function UserEntity(name) {
    Entity.call(this);


    this._construct = function(){
        this.setName(name);
    };

    this.nameToAddress = function(name){
            return name + '.local:' + calcPort(name);
    };

    this.isOnline = function(){


    };

    this._construct();
}
exports.UserEntity = UserEntity;


/*******************************/

/**
 *
 * @constructor
 */
function UserAnalysisManagement() {

    this.getOnlineUsers = function(){
        topology.connections;
    }

    this.getExistantUserList = function(){

    }
}
exports.UserAnalysisManagement = UserAnalysisManagement;
