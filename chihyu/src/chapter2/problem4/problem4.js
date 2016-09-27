// reference: https://github.com/flatiron/prompt
var prompt = require('prompt');

// structure of prompt: 
// prompt.message + prompt.delimiter + property.message + prompt.delimiter
// to change property.message value: change description value
var schema = {
	properties: {
		noun: {
			type: 'string',
			description: 'Enter a noun: ',
			required: true
		},
		verb: {
			type: 'string',
			description: 'Enter a verb: ',
			required: true
		},
		adjective: {
			type: 'string',
			description: 'Enter an adjective: ',
			required: true
		},
		adverb: {
			type: 'string',
			description: 'Enter an adverb: ',
			required: true
		}
	}
};

prompt.message = '';
prompt.delimiter = '';

prompt.start();
prompt.get(schema, function(err, result) {
	console.log("Do you " + result.verb + " your " + result.adjective + " " + 
		result.noun + " " + result.adverb + "?");
});
