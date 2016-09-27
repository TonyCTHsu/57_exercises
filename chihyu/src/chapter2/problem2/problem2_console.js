// reference: https://github.com/flatiron/prompt
var prompt = require('prompt');

var schema = {
	properties: {
		inputString: {
			type: 'string',
			message: 'You must enter something.',
			required: true
		}
	}
};

prompt.start();

console.log("What is the input string?");

prompt.get(schema, function(err, result) {
	console.log(result.inputString + ' has ' + result.inputString.length + ' characters.');
});