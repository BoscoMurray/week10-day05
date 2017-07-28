var assert = require("assert");
var Food = require("../food");

describe("Food", function () {

  var food;

  beforeEach( function() {
    food = new Food("Banana", 20);
  });

  it("should have a name", function() {
    assert.strictEqual(food.name, "Banana");
  });

})