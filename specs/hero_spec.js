var assert = require("assert");
var Hero = require("../hero");
var Food = require("../food");

describe("Hero", function () {

  var hero;
  var banana;

  beforeEach( function() {
    banana = new Food("Banana", 20);
    hero = new Hero("Bananaman", 100, banana);
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

  it("should eat food, health increases", function() {
    hero.eatFood(banana);
    assert.strictEqual(hero.health, 130);
  })

})