var assert = require("assert");
var Hero = require("../hero");
var Food = require("../food");
var Task = require("../task");


describe("Hero", function () {

  var hero;
  var banana;
  var twix;
  var xlBaconDoubleCheese;
  var saveCatFromTree;
  var unblockSink;

  beforeEach( function() {
    banana = new Food("Banana", 20);
    twix = new Food("Twix", 5);
    xlBaconDoubleCheese = new Food("XL Bacon Double Cheeseburger", 3);
    hero = new Hero("Bananaman", 100, banana);
    saveCatFromTree = new Task(10, 10, banana);
    unblockSink = new Task(5, 3, twix);
    returnLostDucksToPond = new Task(8, 6, xlBaconDoubleCheese);
  });

  it("should have a name", function() {
    assert.strictEqual(hero.name, "Bananaman");
  });

  it("should have health", function() {
    assert.strictEqual(hero.health, 100);
  });

  it("should have faveFood", function() {
    assert.strictEqual(hero.faveFood, banana);
  });

  it("should talk, saying name", function() {
    assert.strictEqual(hero.sayName(), "My name is Bananaman")
  });

  it("should start with empty collection of tasks", function() {
    assert.strictEqual(hero.tasks.length, 0)
  });

  it("should be able to add task", function() {
    hero.addTask(saveCatFromTree);
    assert.strictEqual(hero.tasks.length, 1);
  });

  it("should eat food, health increases", function() {
    hero.eatFood(banana);
    assert.strictEqual(hero.health, 130);
  });

  it("should sort tasks by difficulty, easy first", function() {
    hero.addTask(saveCatFromTree);
    hero.addTask(unblockSink);
    hero.addTask(returnLostDucksToPond);
    hero.sortTasksEasy();
    assert.strictEqual(hero.tasks[0], unblockSink);
  });

  it("should sort tasks by difficulty, hard first", function() {
    hero.addTask(saveCatFromTree);
    hero.addTask(unblockSink);
    hero.addTask(returnLostDucksToPond);
    hero.sortTasksHard();
    assert.strictEqual(hero.tasks[0], saveCatFromTree);
  });

  it("should sort tasks by urgency, most urgent", function() {
    hero.addTask(saveCatFromTree);
    hero.addTask(unblockSink);
    hero.addTask(returnLostDucksToPond);
    hero.sortTasksMostUrgent();
    assert.strictEqual(hero.tasks[0], saveCatFromTree);
  });

  it("should sort tasks by urgency, least urgent", function() {
    hero.addTask(saveCatFromTree);
    hero.addTask(unblockSink);
    hero.addTask(returnLostDucksToPond);
    hero.sortTasksLeastUrgent();
    assert.strictEqual(hero.tasks[0], unblockSink);
  });

  it("should sort tasks by reward", function() {
    hero.addTask(saveCatFromTree);
    hero.addTask(unblockSink);
    hero.addTask(returnLostDucksToPond);
    hero.sortTasksByReward();
    assert.strictEqual(hero.tasks[0], saveCatFromTree);
  });

  it("should return completed tasks", function() {
    hero.addTask(saveCatFromTree);
    hero.addTask(unblockSink);
    hero.addTask(returnLostDucksToPond);
    hero.tasks[1].markComplete();
    assert.strictEqual(hero.completed().length, 1);
  });

  it("should return incomplete tasks", function() {
    hero.addTask(saveCatFromTree);
    hero.addTask(unblockSink);
    hero.addTask(returnLostDucksToPond);
    hero.tasks[1].markComplete();
    assert.strictEqual(hero.incomplete().length, 2);
  });

})