var parser = require('./parser');
var ocr = require('./ocr');
var fs = require('fs');

exports.readAccountNumbers = function(dataFile) {
	var blockSize = 4;
	var data = fs.readFileSync(dataFile, 'utf8');
	var lines = data.split("\n");
	var results = new Array();
	for (var index = 0; index < lines.length; index += blockSize) {
		var threeLines = [lines[index], lines[index+1], lines[index+2]];
		results.push(ocr.ocrAccountNumber(parser.parseLinesToDigitBlocks(threeLines)));
	}
	return results;
}