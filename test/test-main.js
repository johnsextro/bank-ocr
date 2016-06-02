var assert = require('chai').assert;
var underTest = require('../main');

describe('Reading file to OCR', function() {
  describe('#readAccountNumbers', function () {
    it('should return proper number of accounts from the file', function () {
      assert.equal(2, underTest.readAccountNumbers("./data/data.txt").length);
    });
    it('should return proper account numbers', function () {
      var actual = underTest.readAccountNumbers("./data/data.txt");
      assert.equal("000000000", actual[0]);
      assert.equal("123456789", actual[1]);
    });
  });
});