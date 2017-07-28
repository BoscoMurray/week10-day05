var assert = require("assert");
var Hero = require("../hero");

describe("Hero", function () {

  var hero;

  beforeEach( function() {
    hero = new Hero("Bananaman", 10, "Banana");
  });

  it("should have a name", function() {
    assert.strictEqual(hero.name, "Bananaman");
  });

  it("should have health", function() {
    assert.strictEqual(hero.health, 10);
  });

  it("should have faveFood", function() {
    assert.strictEqual(hero.faveFood, "Banana");
  });

  it("should talk, saying name", function() {
    assert.strictEqual(hero.sayName(), "My name is Bananaman")
  });

  it("should start with empty collection of tasks", function() {
    assert.strictEqual(hero.tasks.length, 0)
  });

})