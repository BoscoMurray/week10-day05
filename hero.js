var Hero = function(name, health, faveFood) {
  this.name = name;
  this.health = health;
  this.faveFood = faveFood;
  this.tasks = [];
}

Hero.prototype.sayName = function() {
  return "My name is " + this.name;
}


module.exports = Hero;