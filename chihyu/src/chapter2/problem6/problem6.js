// reference: https://github.com/flatiron/prompt
var prompt = require('prompt');

/*
 * Input
 */
// structure of prompt: 
// prompt.message + prompt.delimiter + property.message + prompt.delimiter
// to change property.message value: change description value
var schema = {
	properties: {
		currentAge: {
			pattern: /^[+]?\d+$/,
			message: 'It must be a number(>=0)!',
			description: 'What is your current age?',
			required: true
		},
		retiredAge: {
			pattern: /^[+]?\d+$/,
			message: 'It must be a number(>=0)!',
			description: 'At what age would you like to retire?',
			required: true
		}
	}
};

prompt.message = '';
prompt.delimiter = '';
prompt.colors = false; // disable default prompt font color

prompt.start();
prompt.get(schema, function(err, result) {
	retirementCalculator(Number(result.currentAge), Number(result.retiredAge));
});


/* 
 * Processing
 */
function retirementCalculator(currentAge, retiredAge) {
	var currentYear = new Date().getFullYear();
	var remainYears = retiredAge - currentAge;
	var retiredYear = currentYear + remainYears;
	outputMessage(currentYear, remainYears, retiredYear);
};


/*
 * Output
 */
function outputMessage(currentYear, remainYears, retiredYear) {
	console.log("You have " + remainYears + " years left until you can retire.");
	console.log("It's " + currentYear +', so you can retire in ' + retiredYear + ".");
}