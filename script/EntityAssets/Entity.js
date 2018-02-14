function Entity(){
  this.name;
  this.index;
  this.type;


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
  }

  this.isOnline = function(){
    return true;
  }
}
