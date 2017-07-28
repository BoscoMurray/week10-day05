var assert = require("assert");
var Rat = require("../rat");

describe("Rat", function () {

  var rat;

  beforeEach( function() {
    rat = new Rat("Splinter");
  });

  it("should have a name", function() {
    assert.strictEqual(rat.name, "Splinter");
  });

})