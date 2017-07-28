var Task = function(difficulty, urgency, reward) {
  this.difficulty = difficulty;
  this.urgency = urgency;
  this.reward = reward;
  this.complete = false;
}

Task.prototype.markComplete = function() {
  this.complete = true;
};

module.exports = Task;