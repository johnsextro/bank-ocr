var ocrDigits = require('./ocr-digits');

exports.ocrAccountNumber = function(digitsToOCR) {
	var accountNumber = "";
	for (digit in digitsToOCR) {
		var identifier = digitsToOCR[digit];
		accountNumber += ocrDigits[identifier];
	}
	return accountNumber;
}