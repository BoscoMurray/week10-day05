var Hero = function(name, health, faveFood) {
  this.name = name;
  this.health = health;
  this.faveFood = faveFood;
  this.tasks = [];
  this.completedTasks = [];
}

Hero.prototype.sayName = function() {
  return "My name is " + this.name;
};

Hero.prototype.eatFood = function( food ) {
  this.health += food === this.faveFood ? food.repValue * 1.5 : food.repValue;
};

Hero.prototype.addTask = function( task ) {
  this.tasks.push( task );
};

Hero.prototype.sortTasksEasy = function() {
  this.tasks.sort( function(a, b) {
    return a.difficulty - b.difficulty;
  });
};

Hero.prototype.sortTasksHard = function() {
  this.tasks.sort( function(a, b) {
    return b.difficulty - a.difficulty;
  });
};

module.exports = Hero;