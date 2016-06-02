exports.parseLinesToDigitBlocks = function(lines) {
	var digits = ["","","","","","","","",""];
	for (line in lines) {
		digits = parseLine(digits, lines[line]);
	}
	return digits;
}

var parseLine = function(digits, line){
	var digitIndex = 0;
	var maxLineLength = 27;
	var blockSize = 3;
	for(var index = 0; index<maxLineLength; index+=blockSize) {
		digits[digitIndex++] += line.slice(index, index+blockSize);
	}
	return digits;
}