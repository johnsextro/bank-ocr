# The Bank OCR Kata

## Step 1
* Created `test-parser.js` to drive the creation of the capability to parse out each number to OCR
* Implemented the code to perform the actual parsing in `parser.js`
* Refactored to simplify the implementation and remove magic numbers

## Step 2
* Created `test-ocr.js` to drive the creation of the OCR'ing of each digit
* First test OCR'ed account number '000000000'
* Implemented the OCR'ing only for zero in `ocr.js` Used a Javascript object created from a static JSON file to translate the keys to their appropriate values.
* Second test OCR'ed account number '111111111'
* Added element for 1 to the JSON
* Third test OCR'ed account number '222222222'
* Added element for 2 to the JSON
* Fourth test OCR'ed account number '123456789'
* Added elements 3, 4, 5, 6, 7, 8, & 9 to the JSON
* Refactored to simplify the implementation

## Step 3
* Created `test-main.js` to drive the creation of the file handling and OCR orchestration
* Created data.txt to represent a test data file to read
* Wrote the first test to get back an appropriate number of elements from the file.
* Wrote just enough code to get that to pass in `main.js`.
* Wrote another test to make sure the correct account numbers are returned
* Wrote just enough code to orchestrate the retrieval of the account numbers
* Refactored to simplify the implementation
