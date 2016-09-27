// reference: https://github.com/flatiron/prompt
var prompt = require('prompt');

// structure of prompt: 
// prompt.message + prompt.delimiter + property.message + prompt.delimiter
// to change property.message value: change description value
var schema = {
	properties: {
		firstNumber: {
			pattern: /^[+]?\d+(\.\d+)?$/,
			message: 'It must be a number(>=0)!',
			description: 'What is the first number?',
			required: true
		},
		secondNumber: {
			pattern: /^[+]?\d+(\.\d+)?$/,
			message: 'It must be a number(>=0)!',
			description: 'What is the second number?',
			required: true
		}
	}
};

prompt.message = '';
prompt.delimiter = '';

function simpleMath(firstNumber, secondNumber) {
	var summation = firstNumber + secondNumber;
	var subtraction = firstNumber - secondNumber;
	var multiplification = firstNumber * secondNumber;
	var division = firstNumber / secondNumber;
	console.log(firstNumber + " + " + secondNumber + " = " + summation);
	console.log(firstNumber + " - " + secondNumber + " = " + subtraction);
	console.log(firstNumber + " * " + secondNumber + " = " + multiplification);
	console.log(firstNumber + " / " + secondNumber + " = " + division);
}

prompt.start();
prompt.get(schema, function(err, result) {
	simpleMath(Number(result.firstNumber), Number(result.secondNumber));
});