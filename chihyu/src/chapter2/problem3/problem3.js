// reference: https://github.com/flatiron/prompt
var prompt = require('prompt');


// structure of prompt: 
// prompt.message + prompt.delimiter + property.message + prompt.delimiter
// to change property.message value: change description value
var schema = {
	properties: {
		quote: {
			type: 'string',
			description: 'What is the quote?',
			required: true
		},
		author: {
			type: 'string',
			description: 'Who said it?',
			required: true
		}
	}
};

prompt.message = '';
prompt.delimiter = '';

prompt.start();

prompt.get(schema, function(err, result) {
	console.log(result.author + ' says, ' + '"' + result.quote + '"');
});
