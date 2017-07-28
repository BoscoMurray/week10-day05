var Hero = function(name, health, faveFood) {
  this.name = name;
  this.health = health;
  this.faveFood = faveFood;
}

Hero.prototype.sayName = function() {
  return "My name is " + this.name;
}


module.exports = Hero;