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
  return this.health += food === this.faveFood ? food.repValue * 1.5 : food.repValue;
};

Hero.prototype.addTask = function( task ) {
  return this.tasks.push( task );
};

Hero.prototype.sortTasksEasy = function() {
  return this.tasks.sort( function(a, b) {
    return a.difficulty - b.difficulty;
  });
};

Hero.prototype.sortTasksHard = function() {
  return this.sortTasksEasy().reverse();
};

Hero.prototype.sortTasksMostUrgent = function() {
  return this.tasks.sort( function(a, b) {
    return b.urgency - a.urgency;
  });
};

Hero.prototype.sortTasksLeastUrgent = function() {
  return this.sortTasksMostUrgent().reverse();
};

Hero.prototype.sortTasksByReward = function() {
  return this.tasks.sort( function(a, b) {
    var capsA = a.reward.name.toUpperCase();
    var capsB = b.reward.name.toUpperCase();
    if (capsA < capsB) {
      return -1;
    }
    if (capsA > capsB) {
      return 1;
    }
    return 0;
  });
};

module.exports = Hero;