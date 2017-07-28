var Food = function(name, repValue) {
  this.name = name;
  this.repValue = repValue;
  this.poisoned = false;
}

Food.prototype.poison = function() {
  this.poisoned = true;
};

module.exports = Food;