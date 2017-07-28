var assert = require("assert");
var Hero = require("../hero");

describe("Hero", function () {

  var hero;

  beforeEach( function() {
    hero = new Hero("Banana Man", 10, "Banana");
  });

  it("should have a name", function() {
    assert.strictEqual(hero.name, "Banana Man");
  });

  
  
})