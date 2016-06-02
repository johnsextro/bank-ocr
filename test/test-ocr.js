var assert = require('chai').assert;
var underTest = require('../ocr');
var parser = require('../parser');

describe('Account Number OCR', function() {
  describe('#ocrAccountNumber()', function () {
    it('should return proper account number 000000000', function () {
      var line1 = " _  _  _  _  _  _  _  _  _ ";
      var line2 = "| || || || || || || || || |";
      var line3 = "|_||_||_||_||_||_||_||_||_|";
   	  var toOCR = parser.parseLinesToDigitBlocks([line1,line2,line3]);
      assert.equal("000000000", underTest.ocrAccountNumber(toOCR));
    });
    it('should return proper account number 111111111', function () {
      var line1 = "                           ";
      var line2 = "  |  |  |  |  |  |  |  |  |";
      var line3 = "  |  |  |  |  |  |  |  |  |";
      var toOCR = parser.parseLinesToDigitBlocks([line1,line2,line3]);
      assert.equal("111111111", underTest.ocrAccountNumber(toOCR));
    });
    it('should return proper account number 222222222', function () {
      var line1 = " _  _  _  _  _  _  _  _  _ ";
      var line2 = " _| _| _| _| _| _| _| _| _|";
      var line3 = "|_ |_ |_ |_ |_ |_ |_ |_ |_ ";
      var toOCR = parser.parseLinesToDigitBlocks([line1,line2,line3]);
      assert.equal("222222222", underTest.ocrAccountNumber(toOCR));
    });
    it('should return proper account number 123456789', function () {
      var line1 = "    _  _     _  _  _  _  _ ";
      var line2 = "  | _| _||_||_ |_   ||_||_|";
      var line3 = "  ||_  _|  | _||_|  ||_| _|";
      var toOCR = parser.parseLinesToDigitBlocks([line1,line2,line3]);
      assert.equal("123456789", underTest.ocrAccountNumber(toOCR));
    });
  });
});