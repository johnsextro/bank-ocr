var assert = require('chai').assert;
var underTest = require('../parser');

describe('Parsing', function() {
  describe('#parseLinesToDigitBlocks()', function () {
    it('should return array with proper length', function () {
   	  var result = underTest.parseLinesToDigitBlocks(["000111222333444555666777888"]);
      assert.equal(9, result.length);
    });
    it('should return array with appropriate values in each slot', function () {
   	  var result = underTest.parseLinesToDigitBlocks(["000111222333444555666777888"]);
      assert.equal("000", result[0]);
      assert.equal("888", result[8]);
    });
    it('multiple lines should return array with appropriate values in each slot', function () {
   	  var result = underTest.parseLinesToDigitBlocks(["000111222333444555666777888", "000111222333444555666777888", "000111222333444555666777888"]);
      assert.equal("000000000", result[0]);
      assert.equal("888888888", result[8]);
    });
  });
});