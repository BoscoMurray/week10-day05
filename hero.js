var Hero = function(name, health, faveFood) {
  this.name = name;
  this.health = health;
  this.faveFood = faveFood;
  this.tasks = [];
}

Hero.prototype.sayName = function() {
  return "My name is " + this.name;
}

Hero.prototype.eatFood = function( food ) {
  this.health += food === this.faveFood ? food.repValue * 1.5 : food.repValue;
};

module.exports = Hero;