var assert = require("assert");
var Rat = require("../rat");
var Food = require("../food");

describe("Rat", function () {

  var rat;
  var food;

  beforeEach( function() {
    rat = new Rat("Splinter");
    food = new Food("Banana", 20);
  });

  it("should have a name", function() {
    assert.strictEqual(rat.name, "Splinter");
  });

  it("should be able to poison food", function() {
    rat.touchFood(food);
    assert.strictEqual(food.poisoned, true)
  });

})